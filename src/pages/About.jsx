import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Users, Star, Award } from 'lucide-react';
import { WEBSITE } from '@/utils/websiteInfo';

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Our Mission',
      icon: Film,
      content: `${WEBSITE.NAME} is dedicated to bringing the magic of cinema to every screen, offering a vast library of movies that inspire, entertain, and connect audiences worldwide. Our mission is to deliver exceptional streaming experiences with a passion for storytelling.`,
    },
    {
      title: 'Our Team',
      icon: Users,
      content: `Our team comprises film enthusiasts, tech innovators, and customer advocates working tirelessly to curate content and enhance your viewing experience. With diverse expertise, we strive to make ${WEBSITE.NAME} a leader in movie streaming.`,
    },
    {
      title: 'Our Achievements',
      icon: Star,
      content: `Since our launch, ${WEBSITE.NAME} has grown to serve millions of users, earning accolades for innovative features and a robust content library. We continue to push boundaries in the entertainment industry.`,
    },
    {
      title: 'Our Vision',
      icon: Award,
      content: `We aim to redefine movie streaming by integrating cutting-edge technology and exclusive content, ensuring ${WEBSITE.NAME} remains a trusted platform for cinephiles everywhere.`,
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="min-h-screen mt-24  bg-gray-100 text-gray-900 font-sans flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-white shadow-lg p-6 lg:h-screen lg:sticky lg:top-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">About Us</h2>
        <nav className="space-y-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.title}
                onClick={() => toggleSection(index)}
                className={`w-full text-left p-3 rounded-lg flex items-center gap-3 text-gray-700 hover:bg-gray-100 transition-colors ${activeSection === index ? 'bg-blue-50 text-blue-600' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={20} />
                <span>{section.title}</span>
              </motion.button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
            Discover the story behind ${WEBSITE.NAME} and our commitment to movie entertainment.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="space-y-6"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex items-center gap-3 font-semibold text-gray-800 mb-2"
                >
                  <Icon size={24} className="text-blue-600" />
                  <span>{section.title}</span>
                  <span className="ml-auto text-gray-500">
                    {activeSection === index ? '−' : '+'}
                  </span>
                </button>
                {activeSection === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 mt-4 text-sm"
                  >
                    {section.content}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Our Commitment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-600">
            At ${WEBSITE.NAME}, we are committed to providing a seamless movie-watching experience, fostering a community of film lovers, and supporting the film industry. Join us on this cinematic journey!
          </p>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="w-full bg-gray-800 text-white p-6 mt-auto"
      >
        <p className="text-center text-sm">
          About Us page last updated: {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })} at 12:41 AM PKT
        </p>
      </motion.footer>
    </div>
  );
};

export default About;