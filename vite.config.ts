import { defineConfig, build, type Plugin } from 'vite'
import path from 'path'
import { pathToFileURL } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// After the browser build, render every page to static HTML (scripts/prerender.mjs) so
// crawlers and AI tools that don't run JavaScript can read the site. Running it inside
// `vite build` means it happens whichever build command the host uses.
function prerender(): Plugin {
  let isSsrBuild = false
  return {
    name: 'zarq-prerender',
    apply: 'build',
    configResolved(config) {
      isSsrBuild = !!config.build.ssr
    },
    async closeBundle() {
      if (isSsrBuild) return
      await build({
        configFile: path.resolve(__dirname, 'vite.config.ts'),
        logLevel: 'warn',
        build: { ssr: 'src/entry-server.tsx', outDir: 'dist-ssr', emptyOutDir: true },
      })
      await import(pathToFileURL(path.resolve(__dirname, 'scripts/prerender.mjs')).href)
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    prerender(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
