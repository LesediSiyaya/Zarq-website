import { Link } from 'react-router';
import { useSEO } from '../components/useSEO';
import { PageHeader } from '../components/zarq/ui';

export default function Privacy() {
  useSEO('/privacy');

  return (
    <div>
      <PageHeader eyebrow="Legal · Last updated July 2026" title="Privacy Policy" intro="How Zarq collects, uses and protects your personal information, in line with POPIA." />

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray">

          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed">
              Zarq ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard the information you
              provide when you visit our website (<a href="https://zarq.sa-tech.workers.dev" className="text-gray-950 underline underline-offset-2">zarq.sa-tech.workers.dev</a>) or
              contact us about our services and programmes.
            </p>
          </div>

          <div className="space-y-8">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We only collect information you voluntarily give us. This may include:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>Your name and contact details (email address and/or phone number) when you submit an inquiry via our contact form or reach out by email or WhatsApp.</li>
                <li>Information about your project or service request that you choose to share.</li>
                <li>Program application details such as your location and areas of interest.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                We also collect anonymised usage data through Google Analytics (GA4) to understand how visitors use our website. This data does not identify you personally and is used solely to improve the website experience. You can opt out of Google Analytics tracking via your browser settings or a browser extension.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Standard technical data such as IP addresses and page visit logs may also be collected automatically by our hosting provider, Cloudflare Pages, as part of normal web traffic processing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Information you provide is used solely to:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>Respond to your inquiry or service request.</li>
                <li>Process and follow up on programme applications.</li>
                <li>Send you a quote, invoice, or project update related to work you have engaged us for.</li>
                <li>Improve our services based on feedback you share.</li>
                <li>Analyse anonymous website usage to improve the site experience.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                We will not add you to a mailing list or send you unsolicited marketing communications without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Sharing of Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. Your details are kept within our internal operations and will not be disclosed to outside parties except where required by law or with your consent. Messages sent through our contact form are delivered to our inbox by our form provider, Web3Forms, which processes them only to pass them on to us. Anonymous usage statistics collected through Google Analytics may be processed by Google in accordance with their privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We take reasonable steps to protect the information you share with us. Our website is hosted on Cloudflare Pages, which provides industry-standard security including HTTPS encryption for all data in transit. Communications via WhatsApp and email are subject to the security practices of those platforms. We do not store sensitive financial information such as banking or card details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to external sites (for example, social media profiles). We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Some of our programmes serve young people under 18. Where we collect information from minors, we do so only in the context of programme enrolment and with the intent of keeping a parent or guardian informed. We do not use personal data from minors for any commercial purpose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights (POPIA)</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                In line with the Protection of Personal Information Act (POPIA) of South Africa, you have the right to:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>Request access to the personal information we hold about you.</li>
                <li>Ask us to correct or delete your information.</li>
                <li>Object to the processing of your personal information.</li>
                <li>Lodge a complaint with the Information Regulator of South Africa if you believe your rights have been violated.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                To exercise any of these rights, contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date at the top. We encourage you to review it periodically.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy, please get in touch:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li><span className="font-medium">Email:</span> <a href="mailto:admin.zarq@gmail.com" className="text-gray-950 underline underline-offset-2">admin.zarq@gmail.com</a></li>
                <li><span className="font-medium">WhatsApp:</span> <a href="https://wa.me/27730286401" className="text-gray-950 underline underline-offset-2">+27 73 028 6401</a></li>
                <li><span className="font-medium">Instagram:</span> <a href="https://www.instagram.com/zarq_sa" target="_blank" rel="noopener noreferrer" className="text-gray-950 underline underline-offset-2">@zarq_sa</a></li>
              </ul>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex px-6 py-3.5 rounded-full bg-gray-950 hover:bg-gray-800 text-white font-medium transition-colors"
            >
              Start a conversation
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
