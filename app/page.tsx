'use client';

import { motion } from 'framer-motion';

// ===============================
// PAYFAST CONFIG
// ===============================
const PAYFAST_MERCHANT_ID = '13816304';
const PAYFAST_MERCHANT_KEY = 'jve5d4lafqskt';

export default function MathTutoringLanding() {
  const whatsappLink =
    'https://wa.me/27822630913?text=Hi%20I%20would%20like%20to%20enquire%20about%20Grade%2012%20Math%20tutoring';

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 flex flex-col">
      
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        💬 WhatsApp
      </a>

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mt-16 mb-12 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4"
        >
          Math Tutoring
        </motion.h1>
        <p className="text-indigo-600 text-lg">
          CAPS • IEB • IB Cambridge • Group Classes • Rewrites • One-on-One
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2 px-4">
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

        {/* ONE-ON-ONE */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2 border-2 border-indigo-300">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">
            One-on-One (CAPS / IEB / IB)
          </h3>
          <p className="text-gray-600 mb-4">R250 per hour • No free trial</p>
          <PayFastButton
            amount="250.00"
            item="One-on-One Math Tutoring"
            label="Schedule & Pay R250"
          />
        </div>
      </div>

      {/* FOOTER — VERY VISIBLE */}
      <footer className="mt-20 bg-white border-t border-indigo-200">
        <div className="max-w-5xl mx-auto py-10 px-4 text-center">
          <p className="text-lg font-semibold mb-3">
            📧 Email:{' '}
            <a
              href="mailto:info@learnwithpatience.com"
              className="text-indigo-700 hover:underline"
            >
              info@learnwithpatience.com
            </a>
          </p>

          <p className="text-lg font-semibold mb-3">
            💬 WhatsApp:{' '}
            <a
              href="https://wa.me/27813454248"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              082 263 0913
            </a>
          </p>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Math Tutoring with Patience
          </p>
        </div>
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
    <div className="bg-white rounded-2xl shadow-lg p-6">
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

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
      >
        {label}
      </button>
    </form>
  );
}
