import Image from "next/image";
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MessageCircle, Star, Globe, GraduationCap, User } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = React.useState<string | null>(null);
  const [hours, setHours] = React.useState(0);

  // Load saved data
  React.useEffect(() => {
    const savedUser = localStorage.getItem('studentName');
    const savedHours = localStorage.getItem('hours');
    if (savedUser) setUser(savedUser);
    if (savedHours) setHours(Number(savedHours));
  }, []);

  // Save hours
  React.useEffect(() => {
    localStorage.setItem('hours', String(hours));
  }, [hours]);

  const login = () => {
    const name = prompt('Enter your name');
    if (name) {
      localStorage.setItem('studentName', name);
      setUser(name);
    }
  };

  const navigate = (url: string, newTab = false) => {
    if (newTab) window.open(url, '_blank');
    else window.location.href = url;
  };

  const links = {
    // Make sure these IDs exist on your homepage (app/page.tsx)
    // Example: <section id="about">...</section>
    about: '/#about',
    courses: '/#courses',
    reviews: '/#reviews',

    // External links
    schedule: 'https://scheduler.zoom.us/patience-mokwena/math-lessons',
    contact: 'https://wa.me/27813454248',
    website: 'https://www.learnwithpatience.com'
  };

  const Card = ({ title, desc, icon: Icon, action }: any) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={action}
      className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition flex items-start gap-4"
    >
      <Icon className="text-indigo-600" size={28} />
      <div>
        <h3 className="text-xl font-semibold text-indigo-700 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </motion.div>
  );

  return (<div className="text-center mb-6">
  <Image
    src="/logo LWP.png"
    alt="Learn with Patience Logo"
    width={180}
    height={180}
    className="mx-auto mb-4"
  />

  <h1 className="text-4xl font-bold text-indigo-700">
    Math Tutoring with Patience
  </h1>
</div>
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            Student Dashboard
          </h1>
          {!user ? (
            <button
              onClick={login}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          ) : (
            <p className="text-gray-700">Welcome, {user} 👋</p>
          )}
        </div>

        {/* Hours Tracker */}
        {user && (
          <div className="bg-white rounded-xl p-6 shadow mb-8 text-center">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              Your Hours
            </h2>
            <p className="text-3xl font-bold mb-4">{hours} hrs</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setHours(hours + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                +1 Hour
              </button>
              <button
                onClick={() => setHours(Math.max(0, hours - 1))}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                -1 Hour
              </button>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          <Card title="About" desc="Learn approach" icon={BookOpen} action={() => navigate(links.about)} />

          <Card title="Schedule" desc="Book session" icon={Calendar} action={() => navigate(links.schedule, true)} />

          <Card title="Contact" desc="WhatsApp" icon={MessageCircle} action={() => navigate(links.contact, true)} />

          <Card title="Courses" desc="View classes" icon={GraduationCap} action={() => navigate(links.courses)} />

          <Card title="Reviews" desc="Leave review" icon={Star} action={() => navigate(links.reviews)} />

          <Card title="Website" desc="Main site" icon={Globe} action={() => navigate(links.website, true)} />

        </div>

        {/* Premium Section */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
            🚀 Premium Learning Experience
          </h2>
          <p className="text-gray-600">
            Structured lessons • Small groups • Personal attention • Real results
          </p>
        </div>

      </div>
    </main>
  );
}
