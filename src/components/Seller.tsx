// BecomeSeller.tsx
import React from "react";

const BecomeSeller: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Start Selling on ShopEase Today!
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Reach millions of customers, grow your business, and get paid securely
          — all from one easy-to-use platform.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition">
          Get Started
        </button>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Sell With Us?
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Wide Reach", desc: "Access a huge online customer base." },
            { title: "Fast Payments", desc: "Get your earnings directly in your bank." },
            { title: "Easy Setup", desc: "Create your store in minutes." },
            { title: "Logistics Support", desc: "We handle shipping and returns." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-100 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: "1", title: "Register", desc: "Fill out the seller sign-up form." },
            { step: "2", title: "List Products", desc: "Add product images, descriptions, and prices." },
            { step: "3", title: "Start Selling", desc: "Your products go live for millions of buyers." },
            { step: "4", title: "Get Paid", desc: "Track orders and receive secure payments." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="text-blue-600 font-bold text-2xl mb-2">{item.step}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">What You’ll Need</h2>
        <ul className="max-w-lg mx-auto list-disc list-inside text-gray-700 space-y-2">
          <li>GST / Tax Information (if applicable)</li>
          <li>Bank Account Details</li>
          <li>Valid ID Verification</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-100 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div>
            <p className="font-semibold">How much does it cost to sell?</p>
            <p className="text-sm text-gray-600">
              There are no upfront costs — you only pay a small fee per sale.
            </p>
          </div>
          <div>
            <p className="font-semibold">When do I get paid?</p>
            <p className="text-sm text-gray-600">
              Payments are processed securely every 7 days.
            </p>
          </div>
          <div>
            <p className="font-semibold">Who handles shipping?</p>
            <p className="text-sm text-gray-600">
              We take care of delivery and returns, so you can focus on selling.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p className="text-gray-700 mb-4">
          Contact our Seller Support Team — we’re here 24/7.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default BecomeSeller;
