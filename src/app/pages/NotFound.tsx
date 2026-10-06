import { useSEO } from '../components/useSEO';
import { Container, Eyebrow, ButtonLink, TextLink } from '../components/zarq/ui';

export default function NotFound() {
  useSEO({ title: 'Page not found', description: 'The page you are looking for does not exist. Return to the Zarq homepage.', path: '/404' });

  return (
    <section className="relative overflow-hidden bg-stone-50 min-h-[70vh] flex items-center">
      <div className="zq-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <Container className="relative py-20">
        <Eyebrow>404 · Page not found</Eyebrow>
        <h1 className="text-5xl sm:text-7xl leading-[0.98] text-gray-950 max-w-3xl mb-6">This path doesn't lead anywhere, yet.</h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">The page may have moved as the site was restructured.</p>
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <ButtonLink to="/">Back to home</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">Start a conversation</ButtonLink>
        </div>
        <div className="flex flex-wrap gap-6">
          <TextLink to="/programmes">Programmes</TextLink>
          <TextLink to="/digital">Zarq Digital</TextLink>
          <TextLink to="/get-involved">Get involved</TextLink>
        </div>
      </Container>
    </section>
  );
}
