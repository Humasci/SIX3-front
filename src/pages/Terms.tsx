import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";

const Terms = () => {
  useEffect(() => {
    gsap.from(".terms-content", {
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
        <div className="max-w-4xl mx-auto terms-content">
          <h1 className="text-4xl md:text-5xl font-light mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: November 27, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the services of FKA WEB Limited trading as SIX3 Agency ("we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Company Details:<br />
                FKA WEB Limited<br />
                Registered in England and Wales<br />
                Company Number: 11642660
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">SIX3 Agency provides the following services:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>AI-powered search marketing and paid media management</li>
                <li>Generative AI content creation (video, audio, and text)</li>
                <li>Machine learning model fine-tuning and optimization</li>
                <li>AI agent development and automation solutions</li>
                <li>Digital marketing strategy and consulting</li>
                <li>Website development and optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">3. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily use our website and services for personal or commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify or copy the materials or services</li>
                <li>Use the materials for any commercial purpose without written consent</li>
                <li>Attempt to reverse engineer any software or proprietary processes</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">4. Service Terms</h2>
              <h3 className="text-xl font-medium mb-3">4.1 Project Scope</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All projects begin with a detailed scope of work that outlines deliverables, timelines, and costs. Changes to the agreed scope may result in additional charges and timeline adjustments.
              </p>
              
              <h3 className="text-xl font-medium mb-3">4.2 Payment Terms</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms will be specified in individual service agreements. Unless otherwise agreed, payments are due within 30 days of invoice date. Late payments may incur additional charges.
              </p>

              <h3 className="text-xl font-medium mb-3">4.3 Client Responsibilities</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Provide timely access to necessary resources, data, and personnel</li>
                <li>Review and approve deliverables within agreed timeframes</li>
                <li>Maintain confidentiality of any proprietary methods or strategies shared</li>
                <li>Comply with all applicable laws and platform terms of service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless otherwise specified in writing:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Client retains ownership of their brand assets, data, and content provided to us</li>
                <li>We retain ownership of our methodologies, tools, and proprietary processes</li>
                <li>Work products created specifically for the client become the client's property upon full payment</li>
                <li>We reserve the right to use project work in our portfolio and case studies (with client approval)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain confidentiality regarding proprietary information, trade secrets, and sensitive business data shared during the course of our relationship. This obligation continues beyond the termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">7. Performance and Results</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we strive for excellent results, marketing and AI development involve numerous variables beyond our control. We cannot guarantee specific outcomes such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Specific traffic, lead, or conversion volumes</li>
                <li>Search engine ranking positions</li>
                <li>AI model performance metrics</li>
                <li>Return on advertising spend (ROAS)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our commitment is to apply industry best practices and deliver services professionally and competently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">8. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services may integrate with third-party platforms and tools (Google Ads, Facebook, AI APIs, etc.). We are not responsible for changes to these platforms, their terms of service, or any service interruptions they may experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall FKA WEB Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if we have been notified orally or in writing of the possibility of such damage. Our total liability shall not exceed the total amount paid for services in the preceding 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate services with written notice:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>30 days notice for ongoing monthly services</li>
                <li>Immediate termination for breach of contract</li>
                <li>Upon completion of project-based work</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon termination, all outstanding invoices become immediately due, and we will provide a final report of work completed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">11. Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting your data in accordance with UK GDPR and applicable data protection laws. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">12. Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Neither party shall be liable for any failure to perform due to unforeseen circumstances or causes beyond their reasonable control, including but not limited to acts of God, war, terrorism, pandemic, government regulations, or failure of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">13. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of England and Wales, and any disputes relating to these terms will be subject to the exclusive jurisdiction of the English courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">14. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to revise these terms at any time. Updated terms will be posted on our website with a new "Last updated" date. Continued use of our services constitutes acceptance of revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: hello@six3.agency</p>
                <p>Company: FKA WEB Limited</p>
                <p>Registration: England and Wales No. 11642660</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;