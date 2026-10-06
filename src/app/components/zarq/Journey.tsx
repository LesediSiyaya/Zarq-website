// The Zarq pathway visual: a row of modular blocks joined by a line, showing
// movement from access to opportunity. Stacks vertically on small screens.

interface Step {
  step: string;
  text?: string;
}

export default function Journey({ steps, dark = false }: { steps: Step[]; dark?: boolean }) {
  const last = steps.length - 1;
  return (
    <ol className={`relative grid gap-3 md:gap-0 md:grid-cols-5 ${dark ? 'text-white' : 'text-gray-950'}`}>
      {steps.map(({ step, text }, i) => (
        <li key={step} className="relative flex md:flex-col gap-4 md:gap-0">
          {/* connector */}
          {i < last && (
            <span
              aria-hidden="true"
              className={`absolute left-5 top-10 bottom-[-12px] w-px md:left-10 md:right-0 md:top-5 md:bottom-auto md:w-auto md:h-px ${dark ? 'bg-white/25' : 'bg-gray-300'}`}
            />
          )}
          <span
            className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-spec text-xs ${
              i === last
                ? 'bg-[#ffc8dd] text-gray-950'
                : dark
                  ? 'bg-gray-950 border border-white/30 text-white'
                  : 'bg-white border border-gray-300 text-gray-700'
            }`}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="pb-2 md:pt-5 md:pr-4">
            <p className="font-spec text-sm uppercase tracking-[0.14em] mb-1">{step}</p>
            {text && <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{text}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
