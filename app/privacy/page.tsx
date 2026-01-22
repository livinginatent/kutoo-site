import Header from "../src/components/landing/Header";
import Footer from "../src/components/landing/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-hero-gradient">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                Privacy Policy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2]">
                Your Privacy
                <span className="block text-[#F28482] mt-2">Matters to Us</span>
              </h1>
              <p className="text-lg md:text-xl text-[#586574] leading-relaxed">
                We are committed to protecting your personal information and being transparent about how we collect, use, and share your data.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Introduction
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  At Kutoo ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our 
                  mobile application and services.
                </p>
                <p className="text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Please read this privacy policy carefully. By using Kutoo, you agree to the collection and use of information 
                  in accordance with this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Information We Collect
                </h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Personal Information
                </h3>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  When you create an account, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#586574] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>Name and email address</li>
                  <li>Profile information and preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Account credentials and authentication data</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Usage Data
                </h3>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We automatically collect information about how you interact with Kutoo, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#586574] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>Device information (model, operating system, unique device identifiers)</li>
                  <li>App usage patterns and feature interactions</li>
                  <li>Learning progress and box completion data</li>
                  <li>Practice trading activity and performance metrics</li>
                  <li>IP address and location data (general, not precise)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Financial Information
                </h3>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  When you connect external wallets or exchanges for real trading:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>We do not store your private keys or wallet passwords</li>
                  <li>We only access public wallet addresses and transaction data necessary for our services</li>
                  <li>All financial data is encrypted and transmitted securely</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  How We Use Your Information
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#586574] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your learning experience and recommend relevant boxes</li>
                  <li>Process transactions and manage your account</li>
                  <li>Send you important updates, security alerts, and support messages</li>
                  <li>Analyze usage patterns to enhance app functionality</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations and enforce our terms of service</li>
                </ul>
              </div>

              {/* Data Sharing and Disclosure */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Data Sharing and Disclosure
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We do not sell your personal information. We may share your data only in the following circumstances:
                </p>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Service Providers
                </h3>
                <p className="text-lg text-[#586574] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We work with trusted third-party service providers who help us operate our platform, such as cloud hosting, 
                  payment processing, analytics, and customer support. These providers are contractually obligated to protect 
                  your data and use it only for the purposes we specify.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Legal Requirements
                </h3>
                <p className="text-lg text-[#586574] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We may disclose your information if required by law, court order, or government regulation, or if we believe 
                  disclosure is necessary to protect our rights, your safety, or the safety of others.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Business Transfers
                </h3>
                <p className="text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring 
                  entity, subject to the same privacy protections.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Data Security
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>End-to-end encryption for sensitive data transmission</li>
                  <li>Secure authentication and access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Secure data storage with encryption at rest</li>
                  <li>Limited access to personal data on a need-to-know basis</li>
                </ul>
                <p className="text-lg text-[#586574] leading-relaxed mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to 
                  protect your data, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights and Choices */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Your Rights and Choices
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#586574] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information in your account settings</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                  <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications (account-related emails will still be sent)</li>
                  <li><strong>Data Processing:</strong> Object to or restrict certain processing of your data</li>
                </ul>
                <p className="text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  To exercise these rights, please contact us at <a href="mailto:privacy@kutoo.com" className="text-[#F28482] hover:underline">privacy@kutoo.com</a>.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Children's Privacy
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Kutoo is not intended for users under the age of 18. We do not knowingly collect personal information from 
                  children. If you believe we have inadvertently collected information from a child, please contact us immediately 
                  so we can delete it.
                </p>
              </div>

              {/* International Data Transfers */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  International Data Transfers
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  These countries may have different data protection laws. We ensure that appropriate safeguards are in place 
                  to protect your data in accordance with this privacy policy.
                </p>
              </div>

              {/* Cookies and Tracking */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#586574] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze app usage and improve performance</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>
                <p className="text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  You can control cookie preferences through your device settings, though this may affect some app functionality.
                </p>
              </div>

              {/* Policy Updates */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Changes to This Privacy Policy
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting 
                  the new policy on this page and updating the "Last updated" date. We encourage you to review this policy 
                  periodically to stay informed about how we protect your information.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Contact Us
                </h2>
                <p className="text-lg text-[#586574] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  If you have questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-card border border-border/50 rounded-[20px] p-6 shadow-card" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-lg text-foreground mb-2"><strong>Email:</strong> <a href="mailto:privacy@kutoo.com" className="text-[#F28482] hover:underline">privacy@kutoo.com</a></p>
                  <p className="text-lg text-foreground mb-2"><strong>Support:</strong> <a href="mailto:support@kutoo.com" className="text-[#F28482] hover:underline">support@kutoo.com</a></p>
                  <p className="text-lg text-foreground"><strong>Address:</strong> Kutoo Privacy Team</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div 
              className="relative rounded-[2.5rem] p-[2px] overflow-visible max-w-4xl mx-auto"
              style={{
                background: 'linear-gradient(158.31deg, #84A59D 3.77%, #CDB4DB 85.77%)',
              }}
            >
              <div className="relative rounded-[2.5rem] bg-background p-12 md:p-16 overflow-hidden">
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
                
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#243242] mb-4">
                    Questions About Privacy?
                  </h2>
                  <p className="text-lg text-[#737F8C]/80 mb-8">
                    We're here to help. Reach out to our privacy team with any questions or concerns.
                  </p>
                  <a 
                    href="mailto:privacy@kutoo.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#cdb4db] text-foreground rounded-full font-semibold hover:bg-[#cdb4db]/90 transition-colors"
                  >
                    Contact Privacy Team
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
