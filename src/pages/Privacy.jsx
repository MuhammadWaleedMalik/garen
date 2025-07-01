import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, BookOpen, Link } from 'lucide-react';
import { WEBSITE } from '@/utils/websiteInfo';

const Privacy = () => {
  const featuresContent = [
    'Secure global donor and recipient data coordination',
    'Support tools for individuals, families, and transplant centers',
    'Educational resources on donation, consent, and ethical guidelines',
    'Transparent communication channels with your care teams',
    'Commitment to trust, dignity, and life-saving collaboration',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      {/* Hero */}
      <motion.section
        className="text-center px-6 pb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Your Privacy. Your Dignity.
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          We honor your generosity by protecting your information with the highest standards in privacy and care.
        </p>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {featuresContent.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white rounded-2xl p-6 shadow-lg flex items-start space-x-4"
          >
            <div className="p-3 bg-primary-1/10 rounded-lg">
              {idx === 0 && <Globe className="text-primary-1" size={24} />}
              {idx === 1 && <Link className="text-primary-1" size={24} />}
              {idx === 2 && <BookOpen className="text-primary-1" size={24} />}
              {idx >= 3 && <Shield className="text-primary-1" size={24} />}
            </div>
            <p className="text-gray-800 font-medium">{item}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Detailed Privacy */}
      <motion.section
        className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900">Our Commitment to Privacy</h2>
        <p className="text-gray-700">
          At {WEBSITE.NAME}, we collect and use personal and medical data to facilitate safe, ethical organ donation. This includes information about your health, preferences, contact details, and transplant status.
        </p>
        <p className="text-gray-700">
          We only share your data with authorized transplant teams or matching programs—and only with your clear consent. Every step follows national and international health data protection laws and ethical best practices.
        </p>
        <p className="text-gray-700">
          You have the right to review, correct, or remove your data at any time. We use encrypted systems, secure infrastructure, and regular audits to protect your information throughout the donation journey.
        </p>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        className="mt-16 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Have Questions or Privacy Requests?
        </h3>
        <p className="text-gray-700 mb-6 max-w-md mx-auto">
          Whether you're a donor, recipient, or family member—you can request access, corrections, or guidance at any time.
        </p>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> {WEBSITE.EMAIL}</p>
          <p><strong>Phone:</strong> {WEBSITE.PHONE}</p>
          <p><strong>Address:</strong> {WEBSITE.ADDRESS}</p>
        </div>
      </motion.section>

      {/* Footer Disclaimer */}
      <motion.section
        className="mt-16 text-center text-sm text-gray-500 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <p>
          We periodically review and update our privacy practices. Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
      </motion.section>
    </div>
  );
};

export default Privacy;
