import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto mt-28 px-6 py-16">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-gray-100">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          🔒 Privacy Policy
        </h1>
        <p className="text-center text-gray-500 mb-10">
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          At <strong>TodayAtUSA.com</strong>, your privacy matters to us. This
          Privacy Policy explains what information we collect, how we use it,
          and the choices you have. By using our site, you agree to the
          practices described here.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Personal info you share:</strong> like your name, email
              address, or bio if you contact us or submit a guest post.
            </li>
            <li>
              <strong>Automatic info:</strong> like your IP address, browser
              type, device info, and pages you visit (collected through cookies
              and analytics tools).
            </li>
            <li>
              <strong>Guest posts:</strong> if you contribute content, we’ll
              store what you send (and display your author name/bio if you
              provide one).
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Publish and manage guest posts.</li>
            <li>Respond to your questions or messages.</li>
            <li>
              Improve the site and understand what content our readers enjoy.
            </li>
            <li>
              Show relevant ads (if we use Google AdSense or similar services).
            </li>
            <li>Keep the site safe from spam or abuse.</li>
          </ul>
          <p className="text-gray-700 mt-3">
            We <strong>don’t sell</strong> your personal information to third
            parties.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            3. Cookies & Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Like most websites, we use cookies and analytics tools to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Understand site traffic and performance.</li>
            <li>Show ads that may be more relevant to you.</li>
          </ul>
          <p className="text-gray-700 mt-3">
            You can control cookies through your browser settings — you can even
            block them if you prefer (though some features may not work as
            smoothly).
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may use trusted third-party services (like Google Analytics or
            AdSense). These services may collect information about your browsing
            to provide reports or personalized ads. Their use of your data is
            governed by their own privacy policies.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            5. Your Choices
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              You can opt out of cookies or personalized ads through your
              browser or Google’s Ads Settings.
            </li>
            <li>
              You can request that we delete or update any personal info you’ve
              shared with us (for example, through a guest post or contact
              form). Just email us at{" "}
              <strong>[Insert Your Email Here]</strong>.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            6. Protecting Your Data
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We take reasonable steps to protect your information from
            unauthorized access or misuse. However, no system is 100% secure, so
            we cannot guarantee absolute security.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            7. Children’s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our site is not directed at children under 13. We do not knowingly
            collect personal info from children. If you believe we have
            accidentally collected such info, please contact us so we can remove
            it.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. When we do,
            we’ll post the updated version here with a new date.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            9. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy, contact us at:{" "}
            <strong>[Insert Your Email Here]</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
