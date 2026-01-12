'use client';

import { motion } from 'framer-motion';

// ===============================
// PAYFAST CONFIG
// ===============================
const PAYFAST_MERCHANT_ID = '13816304';
const PAYFAST_MERCHANT_KEY = 'jve5d4lafqskt';

export default function MathTutoringLanding() {
  const whatsappLink =
    'https://wa.me/27813454248?text=Hi%20I%20would%20like%20to%20enquire%20about%20Grade%2012%20Math%20tutoring';

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 to-blue-100">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        💬 WhatsApp
      </a>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-indigo-700 mb-4"
        >
          Math Tutoring with Patience
        </motion.h1>
        <p className="text-indigo-600">
          CAPS • IEB • IB Cambridge • Group Classes • Rewrites • One-on-One
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto mb-12 bg-white/90 rounded-2xl shadow-lg p-8 text-gray-700">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">About My Math Tutoring</h2>
        <p className="mb-4">
          I specialise in <strong>Mathematics tutoring from high school through to university level</strong>. While this website currently focuses on <strong>Grade 12</strong> classes, I support learners across multiple levels, and <strong>more classes will be added</strong> over time.
        </p>
        <p className="mb-4">
          My teaching approach is centred on <strong>deep understanding</strong>, not memorisation. I work across CAPS, IEB, IB Cambridge, and higher-level mathematics, making sure students understand the reasoning behind every step.
        </p>
        <p className="mb-4">
          My <strong>group sessions</strong> are highly interactive and intentionally kept small — never more than <strong>10 students</strong>. This allows for more time for questions, discussion, and individual attention. I actively engage with each student and make sure everyone is comfortable before moving on.
        </p>
        <p className="mb-4">
          For <strong>one-on-one lessons</strong>, learners from <strong>any grade level</strong> are welcome to book. These sessions are fully personalised and tailored to the learner’s specific needs, whether school-level or university-level mathematics.
        </p>
        <p className="mb-4">
          I am an <strong>Industrial Engineer</strong> and am in the process of completing my <strong>Bachelor of Science degree</strong>. My academic background allows me to teach mathematics with both strong theoretical understanding and real-world problem-solving insight.
        </p>
        <p className="mb-4">
          I have a genuine heart for mathematics. I love working with numbers more than anything, and seeing my students grow in confidence, improve their results, and begin to excel is a joy that is truly <strong>indescribable</strong>.
        </p>
        <p>
          Whether in group classes or one-on-one sessions, my lessons are supportive, focused, and designed to help learners feel confident, capable, and well-prepared at every stage of their academic journey.
        </p>
      </div>

      {/* Choose curriculum */}
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-700">Choose your curriculum</h2>
      </div>

      {/* Cards */}
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
        <Card
          title="Grade 12 CAPS Rewrite (Group)"
          desc="First group class FREE (once per learner)"
          price="R400 monthly • 4 classes"
          zoom="https://scheduler.zoom.us/patience-mokwena/re-grade-12-caps"
          item="Grade 12 CAPS Rewrite Monthly Package"
        />

        <Card
          title="Grade 12 IEB Rewrite (Group)"
          desc="First group class FREE (once per learner)"
          price="R400 monthly • 4 classes"
          zoom="https://scheduler.zoom.us/patience-mokwena/math-12th-grade-rewriteieb"
          item="Grade 12 IEB Rewrite Monthly Package"
        />

        <Card
          title="Grade 12 CAPS Full Year"
          desc="Full syllabus support"
          price="R400 monthly • 4 classes"
          zoom="https://scheduler.zoom.us/patience-mokwena/grade-12-caps"
          item="Grade 12 CAPS Full Year Monthly Package"
        />

        <Card
          title="Grade 12 IEB Full Year"
          desc="Full syllabus support"
          price="R400 monthly • 4 classes"
          zoom="https://scheduler.zoom.us/patience-mokwena/grade-12-math-ieb"
          item="Grade 12 IEB Full Year Monthly Package"
        />

        <Card
          title="Grade 12 IB Cambridge (Group)"
          desc="International syllabus"
          price="R400 monthly • 4 classes"
          zoom="https://scheduler.zoom.us/patience-mokwena/grade-12-class-ibcam"
          item="Grade 12 IB Cambridge Monthly Package"
        />

        {/* One-on-One */}
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:col-span-2 border-2 border-indigo-300">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">
            One-on-One Tutoring (All Grades)
          </h3>
          <p className="text-gray-600 mb-4">R250 per hour • No free trial</p>
          <PayFastButton
            amount="250.00"
            item="One-on-One Math Tutoring"
            label="Schedule & Pay R250"
          />
        </div>
      </div>

      {/* Pricing Explained */}
      <div className="max-w-5xl mx-auto mt-16 bg-white/90 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          How Pricing Works
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3">
          <li>
            <strong>Group classes</strong> are billed monthly (R400 = 4 live Zoom
            classes).
          </li>
          <li>
            <strong>First group class is FREE</strong> for new learners (once only).
          </li>
          <li>
            <strong>Full Year & Rewrite</strong> packages cover structured
            exam-focused content.
          </li>
          <li>
            <strong>One-on-One lessons</strong> are R250 per hour and require
            payment before booking.
          </li>
          <li>
            All lessons are <strong>live on Zoom</strong> and supported with
            guided practice.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8 text-center text-gray-800 border border-indigo-100">
        <p className="mb-3 text-lg font-medium">
          📧 Email:{' '}
          <a
            href="mailto:info@learnwithpatience.com"
            className="text-indigo-700 hover:underline"
          >
            info@learnwithpatience.com
          </a>
        </p>
        <p className="mb-3 text-lg font-medium">
          💬 WhatsApp:{' '}
          <a
            href="https://wa.me/27813454248"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            081 345 4248
          </a>
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Math Tutoring with Patience
        </p>
      </footer>
    </main>
  );
}

function Card({
  title,
  desc,
  price,
  zoom,
  item,
}: {
  title: string;
  desc: string;
  price: string;
  zoom: string;
  item: string;
}) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{desc}</p>
      <p className="text-sm text-gray-500 mb-4">{price}</p>

      <button
        className="w-full mb-3 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
        onClick={() => window.open(zoom, '_blank')}
      >
        Book Free Trial Class
      </button>

      <PayFastButton
        amount="400.00"
        item={item}
        label="Schedule & Pay R400 (Monthly)"
      />
    </div>
  );
}

function PayFastButton({
  amount,
  item,
  label,
}: {
  amount: string;
  item: string;
  label: string;
}) {
  return (
    <form
      method="POST"
      action="https://www.payfast.co.za/eng/process"
      target="_top"
    >
      <input type="hidden" name="merchant_id" value={PAYFAST_MERCHANT_ID} />
      <input type="hidden" name="merchant_key" value={PAYFAST_MERCHANT_KEY} />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="item_name" value={item} />

      {/* Redirects */}
      <input
        type="hidden"
        name="return_url"
        value="https://www.learnwithpatience.com/thank-you"
      />
      <input
        type="hidden"
        name="cancel_url"
        value="https://www.learnwithpatience.com"
      />

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
      >
        {label}
      </button>
    </form>
  );
}
