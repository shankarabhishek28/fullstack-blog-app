import React from "react";

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto mt-28 px-6 py-16">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-gray-100">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
          About <span className="text-blue-600">Us</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
          Welcome to <span className="text-blue-600">TodayAtUSA</span>
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-600 leading-relaxed text-lg mb-10 text-center">
          We’re here to bring you stories that matter — from breaking news to
          everyday moments that shape life in America. Our team is passionate
          about making the news simple, clear, and engaging so you can stay
          informed without feeling overwhelmed.
        </p>

        {/* What Drives Us */}
        <section className="space-y-4 mb-10">
          <h3 className="text-2xl font-semibold text-gray-800">
            What Drives Us
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            <li>
              <span className="font-semibold text-blue-600">
                Truth & Accuracy:
              </span>{" "}
              because facts matter.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                Diverse Perspectives:
              </span>{" "}
              Whether it’s politics, culture, business, or lifestyle, we aim to
              reflect the many voices and experiences that make up America.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                Engagement & Community:
              </span>{" "}
              We want to hear from you. Your views, feedback, and stories help
              shape what we cover.
            </li>
          </ul>
        </section>

        {/* Our Mission */}
        <section className="space-y-4 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to inform and inspire. We cover national content as
            well as local events, giving readers both a broad and personal look
            at what’s happening now. Whether you’re a student, professional, or
            curious citizen, <strong>TodayAtUSA</strong> is here to keep you
            connected, equipped, and engaged.
          </p>
        </section>

        {/* Outro */}
        <div className="mt-10 text-center border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-lg">
            Thanks for stopping by — we’re glad to be part of your daily scroll!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
