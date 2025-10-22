import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto mt-28 px-6 py-16">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-gray-100">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          📜 Terms & Conditions for Guest Posts
        </h1>
        <p className="text-center text-gray-500 mb-10">
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome! These Terms & Conditions (the “Terms”) govern how guest
          posting works on <strong>TodayAtUSA.com</strong> (the “Site,” “we,”
          “us,” or “our”). By submitting content (e.g. articles, blog posts,
          images) as a guest author, or otherwise using the guest-posting
          feature, you agree to these Terms.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            1. Eligibility & Submission Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Guest content must be original, unpublished elsewhere (unless
              agreed beforehand), and not infringe on the rights of any third
              party.
            </li>
            <li>
              Submissions must be well-written, fact-checked, free of plagiarism,
              and follow good editorial practices — clear citations,
              appropriate style, and proper spelling.
            </li>
            <li>
              Topics must be relevant to the Site’s audience — broadly covering{" "}
              <strong>[news / culture / lifestyle / your niche]</strong> in the
              USA context.
            </li>
            <li>
              We reserve the right to refuse submissions without specifying
              reasons.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            2. Editorial Process & Changes
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Once you submit, we’ll review your content. We reserve the right
              to make changes for clarity, grammar, style, layout, or length. If
              substantial edits are needed, we may contact you.
            </li>
            <li>
              By submitting, you grant us the right to publish the content in
              any form (online, print, or archives) we deem fit.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            3. Rights & Ownership
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You retain copyright to your work. However, by submitting, you grant
            us a <strong>non-exclusive, royalty-free, perpetual license</strong>{" "}
            to use, reproduce, publish, distribute, and display the content in
            connection with the Site (including affiliates and social media).
          </p>
          <p className="text-gray-700 leading-relaxed">
            You also confirm that all parts of your submission (text, images)
            are either your own or properly licensed/attributed.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            4. Links / Promotion
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              You may include one author bio with up to{" "}
              <strong>[Insert number]</strong> links back to your own
              website/social media, subject to review.
            </li>
            <li>
              Any additional links within the content should be relevant, useful
              to readers, non-promotional, and approved by us. We may remove or
              modify links that don’t meet our policies.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            5. Prohibited Content
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You agree not to submit content that:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Is defamatory, obscene, hateful, or harassing.</li>
            <li>Promotes illegal activities.</li>
            <li>Violates any intellectual property or privacy rights.</li>
            <li>Contains spam, hidden text, or harmful code.</li>
            <li>
              Is clearly promotional or advertorial in tone (unless pre-approved
              under a separate arrangement).
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            6. Liability and Indemnification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You are solely responsible for the content you submit. If someone
            claims your content infringes their rights or causes harm, you agree
            to defend, indemnify, and hold us harmless from any resulting
            claims, costs, or damages.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We do not guarantee your content will achieve any specific
            viewership, ranking, or performance.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            7. Removal of Content
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to remove or disable access to your content at
            any time, for any reason — for example, if it’s found to violate
            these Terms or is no longer relevant, accurate, or appropriate.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            8. Changes to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms at any time. When we do, we’ll post the
            updated version on this page with a new effective date. Your
            continued use of the guest-posting feature after any changes means
            you accept the updated Terms.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-10 text-center border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-lg">
            Thank you for contributing to{" "}
            <strong className="text-blue-600">TodayAtUSA</strong> — where
            diverse voices make the news stronger.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
