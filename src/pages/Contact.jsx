import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { WEBSITE } from '@/utils/websiteInfo';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen mt-24 bg-gray-100 text-gray-900 font-sans flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-white shadow-lg p-6 lg:h-screen lg:sticky lg:top-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <nav className="space-y-4">
          <motion.a
            href="#contact-info"
            className="w-full text-left p-3 rounded-lg flex items-center gap-3 text-gray-700 hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={20} />
            <span>Contact Information</span>
          </motion.a>
          <motion.a
            href="#support-form"
            className="w-full text-left p-3 rounded-lg flex items-center gap-3 text-gray-700 hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={20} />
            <span>Support Form</span>
          </motion.a>
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
          <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
            Get in touch with ${WEBSITE.NAME} for support, feedback, or inquiries about our movie streaming services.
          </p>
        </motion.header>

        {/* Contact Information */}
        <motion.section
          id="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-6 mb-12"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail size={20} className="text-green-600" />
              <span><strong>Email:</strong> {WEBSITE.EMAIL}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone size={20} className="text-green-600" />
              <span><strong>Phone:</strong> {WEBSITE.PHONE}</span>
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={20} className="text-green-600" />
              <span><strong>Address:</strong> {WEBSITE.ADDRESS}</span>
            </p>
          </div>
        </motion.section>

        {/* Support Form */}
        <motion.section
          id="support-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
          {isSubmitted ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center py-4"
            >
              Thank you! Your message has been sent. We’ll get back to you soon.
            </motion.p>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
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
          Contact Us page last updated: {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })} at 12:23 AM PKT
        </p>
      </motion.footer>
    </div>
  );
};

export default ContactUs;