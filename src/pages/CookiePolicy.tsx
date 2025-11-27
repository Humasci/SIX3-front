import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";

const CookiePolicy = () => {
  useEffect(() => {
    gsap.from(".cookie-content", {
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
        <div className="max-w-4xl mx-auto cookie-content">
          <h1 className="text-4xl md:text-5xl font-light mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: November 27, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                FKA WEB Limited trading as SIX3 Agency ("we", "us", or "our") uses cookies and similar technologies on our website. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Company Details:<br />
                FKA WEB Limited<br />
                Registered in England and Wales<br />
                Company Number: 11642660<br />
                Email: hello@six3.agency
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">2. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember information about your visit, making it easier to visit the site again and making the site more useful to you.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cookies can be "persistent" (remaining on your device until deleted or expired) or "session" cookies (deleted when you close your browser).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">3. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use cookies for several purposes:</p>
              
              <h3 className="text-xl font-medium mb-3">3.1 Essential Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies are strictly necessary for the operation of our website. They enable you to navigate the site and use its features, such as accessing secure areas.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>Session management and user authentication</li>
                <li>Security and fraud prevention</li>
                <li>Basic website functionality</li>
                <li>Load balancing and performance optimization</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">3.2 Analytics Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website's performance and user experience.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>Google Analytics for website traffic analysis</li>
                <li>Page view tracking and user journey mapping</li>
                <li>Performance monitoring and error tracking</li>
                <li>A/B testing for website optimization</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">3.3 Functional Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies allow our website to remember choices you make and provide enhanced, more personal features.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>Language and region preferences</li>
                <li>User interface customizations</li>
                <li>Form data persistence</li>
                <li>Chat and support widget functionality</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">3.4 Marketing Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies track your visits across websites to build a profile of your interests and show you relevant advertisements.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Google Ads and Meta advertising platforms</li>
                <li>LinkedIn advertising and tracking</li>
                <li>Retargeting and remarketing campaigns</li>
                <li>Conversion tracking and attribution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use several third-party services that may set their own cookies:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website traffic analysis and user behavior tracking</li>
                <li><strong>Google Ads:</strong> Advertising campaign tracking and conversion measurement</li>
                <li><strong>Meta Pixel:</strong> Facebook and Instagram advertising optimization</li>
                <li><strong>LinkedIn Insight Tag:</strong> LinkedIn advertising and professional targeting</li>
                <li><strong>Hotjar:</strong> User experience analysis and heatmap tracking</li>
                <li><strong>Intercom/Zendesk:</strong> Customer support and chat functionality</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie policies, which we encourage you to review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">5. Your Cookie Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-xl font-medium mb-3">5.1 Browser Settings</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set notifications when cookies are being sent</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">5.2 Cookie Consent</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you first visit our website, you'll see a cookie banner that allows you to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Learn more about our cookie usage</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">5.3 Opt-Out Links</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Browser Add-on</a></li>
                <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Ad Settings</a></li>
                <li><strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Ad Preferences</a></li>
                <li><strong>Industry Opt-out:</strong> <a href="https://youronlinechoices.eu/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">6. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Disabling cookies may affect your experience on our website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information</li>
                <li>Personalized content may not be available</li>
                <li>We may not be able to remember your preferences</li>
                <li>Contact forms may not function correctly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">7. Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Essential cookies:</strong> 1 year maximum</li>
                <li><strong>Analytics cookies:</strong> 2 years maximum</li>
                <li><strong>Marketing cookies:</strong> 1 year maximum</li>
                <li><strong>Functional cookies:</strong> 1 year maximum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">8. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any significant changes by posting the updated policy on our website with a new "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: hello@six3.agency</p>
                <p>Company: FKA WEB Limited</p>
                <p>Registration: England and Wales No. 11642660</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For data protection concerns, you can also contact the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;