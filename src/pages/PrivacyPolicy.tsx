import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";

const PrivacyPolicy = () => {
  useEffect(() => {
    gsap.from(".privacy-content", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-24 px-6 mt-5">
        <div className="max-w-4xl mx-auto privacy-content">
          <h1 className="text-4xl md:text-5xl font-light mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: November 27, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                FKA WEB Limited trading as SIX3 Agency ("we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Company Details:<br />
                FKA WEB Limited<br />
                Registered in England and Wales<br />
                Company Number: 11642660
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect and process the following types of information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Company information (company name, website, industry)</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent on site, click patterns)</li>
                <li>Communication preferences and marketing consents</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use your personal information for the following purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>To provide and improve our services</li>
                <li>To respond to your inquiries and contact requests</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations</li>
                <li>To protect our business and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Under the UK GDPR, we process your personal data based on:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
                <li><strong>Contract:</strong> To provide services you've requested</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and analyze usage</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Third-party service providers who assist in delivering our services</li>
                <li>Analytics providers (such as Google Analytics)</li>
                <li>Email marketing platforms (such as Mailgun)</li>
                <li>CRM systems (such as Attio)</li>
                <li>Law enforcement agencies when required by law</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, we retain contact information for up to 7 years after our last interaction unless you request deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Under the UK GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Object:</strong> Object to processing for legitimate interests or direct marketing</li>
                <li><strong>Withdraw Consent:</strong> Remove consent for data processing</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at hello@six3.agency.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to improve your browsing experience and analyze site usage. You can control cookie preferences through your browser settings. Essential cookies are necessary for website functionality, while analytics and marketing cookies require your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">9. Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">10. International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some of our service providers may be located outside the UK. When we transfer your data internationally, we ensure appropriate safeguards are in place, such as adequacy decisions or standard contractual clauses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: hello@six3.agency</p>
                <p>Company: FKA WEB Limited</p>
                <p>Registration: England and Wales No. 11642660</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe we have not handled your personal data appropriately.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;