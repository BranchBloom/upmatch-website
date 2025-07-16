import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/upmatch-logo.png" alt="UpMatch" width={32} height={32} className="rounded-lg" />
            <span className="text-xl font-bold">UpMatch</span>
          </Link>
        </div>
      </header>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: July 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By installing and using the UpMatch Chrome extension, you agree to be bound by these Terms of Service. If
              you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              UpMatch is a Chrome extension that provides AI-powered analysis and insights for Upwork job posts. Our
              service includes job analysis, match prediction, red flag detection, and proposal generation assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Use the service in compliance with all applicable laws and regulations</li>
              <li>Not use the service to violate Upwork's terms of service</li>
              <li>Provide accurate information when using our features</li>
              <li>Not attempt to reverse engineer or modify the extension</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Subscription and Payment</h2>
            <p className="text-gray-300 mb-4">
              UpMatch offers both free and premium subscription tiers. Premium features require a paid subscription
              processed through Stripe. Subscriptions automatically renew unless canceled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Privacy and Data</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
              protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              UpMatch is provided "as is" without warranties. We are not liable for any damages arising from your use of
              the service, including but not limited to lost profits or data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your access to UpMatch at any time for violation of these terms. You may
              discontinue use at any time by uninstalling the extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these terms at any time. Continued use of the service after changes
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about these Terms of Service, please contact us through the UpMatch extension or
              visit our website.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 UpMatch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
