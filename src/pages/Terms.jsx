import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Scale, Clock, AlertCircle } from 'lucide-react';
import { WEBSITE } from '@/utils/websiteInfo';

const Terms = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: Book,
      content: `By accessing or using ${WEBSITE.NAME}, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services. These terms may be updated periodically, and continued use constitutes acceptance of the revised terms.`,
    },
    {
      title: 'Service Usage',
      icon: Scale,
      content: `You may use ${WEBSITE.NAME} for personal, non-commercial entertainment purposes only. Unauthorized distribution, reproduction, or modification of content is prohibited. We reserve the right to terminate access for misuse.`,
    },
    {
      title: 'Subscription and Billing',
      icon: Clock,
      content: `Subscriptions are billed monthly or annually based on your chosen plan. Payments are non-refundable except as required by law. Pricing is subject to change with prior notice via email or on our website.`,
    },
    {
      title: 'Content Guidelines',
      icon: AlertCircle,
      content: `Content on ${WEBSITE.NAME} is provided for your enjoyment. We are not liable for user-generated content or third-party links. Report violations by contacting ${WEBSITE.EMAIL}.`,
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="min-h-screen mt-24 bg-gray-100 text-gray-900 font-sans flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-white shadow-lg p-6 lg:h-screen lg:sticky lg:top-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Terms of Service</h2>
        <nav className="space-y-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.title}
                onClick={() => toggleSection(index)}
                className={`w-full text-left p-3 rounded-lg flex items-center gap-3 text-gray-700 hover:bg-gray-100 transition-colors ${activeSection === index ? 'bg-green-50 text-green-600' : ''}`}
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
          <h1 className="text-4xl font-extrabold text-gray-900">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
            Review the rules and policies for using ${WEBSITE.NAME} movie streaming services.
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
                  <Icon size={24} className="text-green-600" />
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

        {/* Legal Notice */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal Notice</h2>
          <p className="text-gray-600">
            These terms are governed by the laws of [Your Country]. Disputes will be resolved through arbitration. For further legal assistance, contact ${WEBSITE.EMAIL}.
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
          Terms of Service last updated: {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })} at 12:21 AM PKT
        </p>
      </motion.footer>
    </div>
  );
};

export default Terms;