import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - CommSync</title>
        <meta name="description" content="CommSync Terms of Service - Legal terms and conditions for using our crisis communication services." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using CommSync's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  2. Service Description
                </h2>
                <p>
                  CommSync provides crisis communication services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Crisis communication planning and management</li>
                  <li>Public Information Officer (PIO) training</li>
                  <li>Brand engineering and reputation management</li>
                  <li>Public affairs and stakeholder communication</li>
                  <li>Emergency response communication support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  3. Professional Standards
                </h2>
                <p>
                  Our services are provided by FEMA-certified professionals, Emmy-winning journalists, and experienced public administrators. We maintain the highest standards of professional conduct and confidentiality in all our engagements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  4. Client Responsibilities
                </h2>
                <p>
                  Clients agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Cooperate fully with our professional recommendations</li>
                  <li>Maintain confidentiality of proprietary methodologies</li>
                  <li>Pay all fees according to agreed terms</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  5. Confidentiality
                </h2>
                <p>
                  CommSync maintains strict confidentiality regarding all client information, crisis situations, and strategic communications. This confidentiality extends to all team members and contractors involved in service delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  6. Emergency Services
                </h2>
                <p>
                  Our 24/7 emergency response services are designed to provide immediate crisis communication support. Response times may vary based on the nature and severity of the situation. Emergency services are subject to additional terms and premium pricing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  7. Limitation of Liability
                </h2>
                <p>
                  While we strive to provide the highest quality crisis communication services, CommSync's liability is limited to the amount paid for services. We are not responsible for outcomes beyond our direct control, including media coverage, public perception, or third-party actions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  8. Intellectual Property
                </h2>
                <p>
                  All training materials, methodologies, and proprietary systems developed by CommSync remain our intellectual property. Clients may use these materials for their intended purpose but may not distribute, reproduce, or commercialize them without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  9. Termination
                </h2>
                <p>
                  Either party may terminate services with appropriate notice as specified in individual service agreements. Emergency services may be terminated immediately if client actions conflict with professional standards or legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  10. Governing Law
                </h2>
                <p>
                  These terms are governed by the laws of the United States and the states of Florida and Wyoming, where CommSync maintains offices. Any disputes will be resolved through binding arbitration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  11. Changes to Terms
                </h2>
                <p>
                  CommSync reserves the right to modify these terms at any time. Clients will be notified of significant changes, and continued use of services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                  12. Contact Information
                </h2>
                <p>
                  For questions regarding these terms or our services, please contact:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p><strong>CommSync</strong></p>
                  <p>Email: legal@commsync.com</p>
                  <p>Phone: +1 (555) COMM-SYNC</p>
                  <p>Emergency Hotline: Available 24/7</p>
                  <p>Offices: Tampa, FL & Cheyenne, WY</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;