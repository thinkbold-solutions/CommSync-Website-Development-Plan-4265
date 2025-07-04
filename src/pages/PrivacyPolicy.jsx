import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - CommSync</title>
        <meta name="description" content="CommSync Privacy Policy - How we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  1. Information We Collect
                </h2>
                <p>
                  CommSync collects information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fill out our contact forms or request consultations</li>
                  <li>Subscribe to our newsletters or training programs</li>
                  <li>Participate in our crisis readiness assessments</li>
                  <li>Attend our training sessions or webinars</li>
                  <li>Communicate with us via email, phone, or other channels</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  2. How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our crisis communication services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you relevant training opportunities and updates</li>
                  <li>Analyze website usage and improve user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  3. Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  4. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Given the sensitive nature of crisis communications, we maintain enterprise-grade security protocols.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  5. Cookies and Tracking
                </h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  6. Your Rights
                </h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  7. Children's Privacy
                </h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  9. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p><strong>CommSync</strong></p>
                  <p>Email: privacy@commsync.com</p>
                  <p>Phone: +1 (555) COMM-SYNC</p>
                  <p>Address: Tampa, FL & Cheyenne, WY</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;