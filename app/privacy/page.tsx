import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
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

      {/* Privacy Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: July 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              UpMatch collects minimal information necessary to provide our AI-powered job analysis service:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Job post content from Upwork (processed locally when possible)</li>
              <li>Usage analytics to improve our service</li>
              <li>Account information for premium subscriptions</li>
              <li>Extension preferences and settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Provide AI analysis and match predictions</li>
              <li>Generate proposal suggestions</li>
              <li>Improve our algorithms and service quality</li>
              <li>Process payments for premium features</li>
              <li>Send important service updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Security</h2>
            <p className="text-gray-300 mb-4">We implement enterprise-grade security measures to protect your data:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>End-to-end encryption for sensitive data</li>
              <li>Local processing when possible to minimize data transmission</li>
              <li>Secure servers with regular security audits</li>
              <li>No storage of personal proposals or sensitive information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or share your personal information with third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>With trusted service providers (like Stripe for payments)</li>
              <li>In anonymized, aggregated form for research purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Cookies and Tracking</h2>
            <p className="text-gray-300 mb-4">
              UpMatch uses minimal tracking technologies to provide and improve our service. We use session cookies for
              authentication and local storage for user preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of non-essential data collection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Data Retention</h2>
            <p className="text-gray-300 mb-4">
              We retain your data only as long as necessary to provide our service. Account data is deleted within 30
              days of account closure. Usage analytics are anonymized after 12 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Children's Privacy</h2>
            <p className="text-gray-300 mb-4">
              UpMatch is not intended for users under 18 years of age. We do not knowingly collect personal information
              from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy periodically. We will notify users of significant changes through the
              extension or email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about this Privacy Policy or how we handle your data, please contact us through the
              UpMatch extension.
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
