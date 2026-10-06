import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import type { Status } from './content';

// Shared building blocks for every Zarq page. Keep visual decisions here so pages stay consistent.

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type Tone = 'white' | 'paper' | 'ink' | 'blush';

const toneClasses: Record<Tone, string> = {
  white: 'bg-white text-gray-950',
  paper: 'bg-stone-50 text-gray-950',
  ink: 'bg-gray-950 text-white',
  blush: 'bg-[#fff1f6] text-gray-950',
};

export function Section({
  children,
  tone = 'white',
  id,
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 scroll-mt-20 ${toneClasses[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, dark = false, className = 'mb-4' }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={`font-spec text-xs uppercase tracking-[0.18em] ${dark ? 'text-gray-400' : 'text-gray-500'} ${className}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl mb-10 sm:mb-14 ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-4">{title}</h2>
      {intro && <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{intro}</p>}
    </div>
  );
}

const statusStyles: Record<Status, { label: string; className: string }> = {
  current: { label: 'Current', className: 'bg-gray-950 text-white border-gray-950' },
  developing: { label: 'Developing', className: 'bg-[#ffc8dd] text-gray-950 border-[#ffc8dd]' },
  planned: { label: 'Planned', className: 'bg-transparent text-gray-700 border-gray-400 border-dashed' },
  target: { label: 'Year 1 target', className: 'bg-[#e7c6ff] text-gray-950 border-[#e7c6ff]' },
};

export function StatusBadge({ status, className = '' }: { status: Status; className?: string }) {
  const { label, className: style } = statusStyles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border font-spec text-[11px] uppercase tracking-wider ${style} ${className}`}>
      {label}
    </span>
  );
}

export function StatusLegend({ dark = false }: { dark?: boolean }) {
  const items: { status: Status; text: string }[] = [
    { status: 'current', text: 'Exists today' },
    { status: 'developing', text: 'Being built now' },
    { status: 'planned', text: 'Future initiative' },
  ];
  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-3 text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
      {items.map(({ status, text }) => (
        <span key={status} className="inline-flex items-center gap-2">
          <StatusBadge status={status} className={dark && status === 'planned' ? 'text-gray-300 border-gray-500' : ''} />
          {text}
        </span>
      ))}
    </div>
  );
}

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outlineLight';

const buttonStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gray-950 text-white hover:bg-gray-800',
  secondary: 'border border-gray-300 text-gray-950 hover:border-gray-950',
  light: 'bg-white text-gray-950 hover:bg-gray-100',
  outlineLight: 'border border-white/30 text-white hover:border-white',
};

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  arrow = true,
}: {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  arrow?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm sm:text-base transition-colors ${buttonStyles[variant]}`}
    >
      {children}
      {arrow && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
    </Link>
  );
}

export function TextLink({ to, children, dark = false }: { to: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline ${dark ? 'text-white' : 'text-gray-950'}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-stone-50 border-b border-gray-200">
      <div className="zq-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <Container className="relative pt-16 pb-14 sm:pt-24 sm:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[0.98] text-gray-950 max-w-4xl mb-6">{title}</h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">{intro}</p>
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 ${className}`}>{children}</div>;
}

export function CTABand({
  eyebrow,
  title,
  intro,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="bg-gray-950 text-white">
      <Container className="py-16 sm:py-24">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-end">
          <div>
            <Eyebrow dark>{eyebrow}</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-4">{title}</h2>
            {intro && <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">{intro}</p>}
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
            <ButtonLink to={primary.to} variant="light">{primary.label}</ButtonLink>
            {secondary && <ButtonLink to={secondary.to} variant="outlineLight">{secondary.label}</ButtonLink>}
          </div>
        </div>
      </Container>
    </section>
  );
}
