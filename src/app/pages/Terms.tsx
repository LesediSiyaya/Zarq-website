import { Link } from 'react-router';
import { useSEO } from '../components/useSEO';
import { PageHeader } from '../components/zarq/ui';
import { contact } from '../components/zarq/content';

const sections: { title: string; body: string[] }[] = [
  {
    title: '1. About these terms',
    body: [
      'These terms apply to the technology services Zarq provides through Zarq Digital, including website design and development, app development, UI/UX design, branding, AI and automation, IT services, cybersecurity, digital strategy, CIPC business registration and domain registration. By accepting a quote or paying a deposit, you agree to these terms.',
      'Zarq’s youth programmes are covered in section 13.',
    ],
  },
  {
    title: '2. Quotes and scope',
    body: [
      'Before we start, we send you a written quote that sets out what will be delivered, the price and an estimated timeline. Quotes are valid for 30 days.',
      'Anything not included in the quote is outside the agreed scope. If you ask for extra work, we will quote it separately before doing it.',
    ],
  },
  {
    title: '3. Prices and payment',
    body: [
      'Prices are in South African rand and exclude VAT. Launch special prices apply to projects confirmed while the special runs.',
      'A 50% deposit confirms your booking and lets us start. The balance is due on completion, before handover or before your work goes live. Services under R1,000 are paid upfront. We accept EFT, and we issue an invoice for every payment.',
      'Domain registration and hosting are billed separately at cost. For CIPC registration packages, CIPC’s standard filing fees are included in the package price.',
    ],
  },
  {
    title: '4. Timelines',
    body: [
      'Timelines are estimates and start once we have received your deposit and the content we need from you. Delays in receiving content, feedback or approvals extend the timeline.',
      'If we don’t hear from you for 30 days, we pause the project. If a project stays paused for 60 days, we may close it and invoice the work completed up to that point.',
    ],
  },
  {
    title: '5. Your responsibilities',
    body: [
      'You agree to give us accurate information and the content we need on time, and to confirm that you have the right to use any text, images, logos or other material you supply.',
      'For CIPC registrations, you are responsible for the accuracy of the details of your company and its directors.',
    ],
  },
  {
    title: '6. Revisions',
    body: [
      'Two rounds of revisions are included in every package. Further changes, or new features, are quoted separately.',
    ],
  },
  {
    title: '7. Ownership',
    body: [
      'Once you have paid in full, you own the final deliverables we create for you, such as your website, design files and content.',
      'We keep ownership of our own tools, methods and reusable code, and you receive the right to use them as part of your deliverables. We may show completed work in our portfolio unless you ask us not to or we have agreed to confidentiality.',
    ],
  },
  {
    title: '8. Third-party services',
    body: [
      'Some services depend on third parties, such as hosting providers, domain registries, CIPC and SARS. Their own terms apply, and we are not responsible for their decisions, delays or outages, for example CIPC declining a proposed company name.',
    ],
  },
  {
    title: '9. Support after launch',
    body: [
      'You get 14 days of free support after launch for fixes and small adjustments to the agreed work. After that, support and maintenance are available on request and quoted separately.',
    ],
  },
  {
    title: '10. Cancellations and refunds',
    body: [
      'You may cancel a project by letting us know in writing.',
      'If you cancel before we start work, we refund your deposit, less any third-party costs already paid on your behalf. Once work has started, we keep the part of your payment that covers work completed and costs incurred, and refund any balance.',
      'Nothing in these terms limits your rights under the Consumer Protection Act, where it applies.',
    ],
  },
  {
    title: '11. Liability',
    body: [
      'We provide our services with reasonable care and skill. To the extent the law allows, we are not liable for indirect or consequential loss, such as lost profits or data, and our total liability for a service is limited to the amount you paid for it.',
    ],
  },
  {
    title: '12. Confidentiality',
    body: [
      'We keep your business information confidential and use it only to deliver your service. We are happy to sign a non-disclosure agreement on request. Personal information is handled under our Privacy Policy.',
    ],
  },
  {
    title: '13. Zarq programmes',
    body: [
      'Zarq programmes are free for learners. Young people under 18 need the consent of a parent or guardian to take part, and we share programme dates, times and requirements before anything starts. Learners are expected to treat others, and any devices provided, with respect.',
    ],
  },
  {
    title: '14. Changes and governing law',
    body: [
      'We may update these terms from time to time. The version on this page when you accept a quote applies to that project. These terms are governed by the laws of the Republic of South Africa.',
    ],
  },
];

export default function Terms() {
  useSEO('/terms');

  return (
    <div>
      <PageHeader eyebrow="Legal · Last updated October 2026" title="Terms of Service" intro="The terms that apply when you work with Zarq Digital, in plain language." />

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map(({ title, body }) => (
            <div key={title}>
              <h2 className="text-2xl text-gray-950 mb-3">{title}</h2>
              {body.map((p) => (
                <p key={p.slice(0, 40)} className="text-gray-600 leading-relaxed mb-3">{p}</p>
              ))}
            </div>
          ))}

          <div className="bg-stone-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-2xl text-gray-950 mb-3">15. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Questions about these terms? Get in touch:</p>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Email:</span> <a href={`mailto:${contact.email}`} className="underline underline-offset-2">{contact.email}</a></li>
              <li><span className="font-medium">Phone / WhatsApp:</span> <a href={contact.phoneHref} className="underline underline-offset-2">{contact.phoneDisplay}</a></li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            See also our <Link to="/privacy" className="underline underline-offset-2">Privacy Policy</Link> and the <Link to="/digital#client-faq" className="underline underline-offset-2">Zarq Digital client FAQ</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
