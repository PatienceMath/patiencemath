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

      {/* One-on-One Packages (moved to top) */}
      <div className="max-w-5xl mx-auto mb-10 bg-white/90 rounded-2xl shadow-lg p-8 border-2 border-indigo-300">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-3">One-on-One Tutoring (All Grades)</h3>
        <p className="text-gray-600 mb-6">Flexible options — book per hour or choose a monthly package</p>

        {/* 1 Hour */}
        <div className="mb-5">
          <p className="font-medium text-indigo-700 mb-2">1 Hour Session — R250</p>
          <button
            className="w-full mb-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
            onClick={() => window.open('https://scheduler.zoom.us/patience-mokwena/math-lessons', '_blank')}
          >
            Schedule 1 Hour
          </button>
          <PayFastButton amount="250.00" item="One-on-One 1 Hour" label="Pay R250" />
        </div>

        {/* 4 Hours */}
        <div className="mb-5">
          <p className="font-medium text-indigo-700 mb-2">4 Hours Monthly Package — R1000 (1 lesson per week)</p>
          <button
            className="w-full mb-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
            onClick={() => window.open('https://scheduler.zoom.us/patience-mokwena/math-lessons', '_blank')}
          >
            Schedule (4 Hours)
          </button>
          <PayFastButton amount="1000.00" item="One-on-One 4 Hour Package" label="Pay R1000" />
        </div>

        {/* 8 Hours */}
        <div className="mb-5">
          <p className="font-medium text-indigo-700 mb-2">8 Hours Monthly Package — R1900 (2 lessons per week)</p>
          <button
            className="w-full mb-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
            onClick={() => window.open('https://scheduler.zoom.us/patience-mokwena/math-lessons', '_blank')}
          >
            Schedule (8 Hours)
          </button>
          <PayFastButton amount="1900.00" item="One-on-One 8 Hour Package" label="Pay R1900" />
        </div>

        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
          onClick={() => window.open('https://wa.me/27813454248', '_blank')}
        >
          Chat on WhatsApp
        </button>
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

      {/* Reviews Section */}
      <div className="max-w-5xl mx-auto mt-16 bg-white/90 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Student Reviews</h2>

        {/* Sample Reviews */}
        <div className="space-y-4 mb-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">“Patience explains Maths in a way that actually makes sense. My marks improved a lot!”</p>
            <p className="text-sm text-gray-500 mt-2">– Student</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">“The small group classes really helped me ask questions and understand better.”</p>
            <p className="text-sm text-gray-500 mt-2">– Grade 12 Learner</p>
          </div>
        </div>

        {/* Leave a Review */}
        <div>
          <p className="font-medium text-indigo-700 mb-2">Leave a Review</p>

          {/* Star Rating */}
          <div className="flex mb-3">
            {[1,2,3,4,5].map((star) => (
              <span key={star} className="text-2xl cursor-pointer text-yellow-400">
                ★
              </span>
            ))}
          </div>

          <textarea
            placeholder="Write your review here..."
            className="w-full p-3 border rounded-md mb-3"
          />

          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md"
            onClick={() => alert('Thank you for your feedback! ⭐')}
          >
            Submit Review
          </button>
        </div>
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
REVIEWS COMPONENT (UPGRADED)
    : '0';

  return (
    <div className="max-w-5xl mx-auto mt-16 bg-white/90 rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Student Reviews</h2>

      {/* Google Reviews Link */}
      <div className="mb-6">
        <button
          onClick={() => window.open('https://g.page/r/YOUR-GOOGLE-REVIEW-LINK', '_blank')}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Leave a Google Review ⭐
        </button>
      </div>

      <p className="mb-4 text-lg">
        ⭐ Average Rating: <span className="font-bold">{average}</span> ({reviews.length} reviews)
      </p>

      {/* Stars */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Text */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        className="w-full p-3 border rounded-md mb-3"
      />

      <button
        onClick={submitReview}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md mb-6"
      >
        Submit Review
      </button>

      {/* Display Reviews */}
      <div className="space-y-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg">
            <div className="text-yellow-400 mb-1">
              {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
            </div>
            <p className="text-gray-700">{r.text}</p>
          </div>
        ))}
      </div>

      {/* NOTE FOR FUTURE DATABASE */}
      <p className="text-xs text-gray-400 mt-6">
        *Reviews currently saved per device. Can be upgraded to a live database (Firebase/Supabase).
      </p>
    </div>
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
        className="bg-green-500 text-white px-4 py-2 rounded">
      >
        {label}
      </button>
    </form>
  );
}

