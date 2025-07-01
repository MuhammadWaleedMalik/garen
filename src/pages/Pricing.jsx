import React from 'react';
import { motion } from 'framer-motion';
import { Check, Popcorn, Clapperboard, Film, Star, Ticket, Calendar, Headphones, Download, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WEBSITE } from '@/utils/websiteInfo';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: 'Basic Plan',
      price: '$7.99/month',
      route: '/basic',
      description: 'Perfect for casual viewers who enjoy occasional movie nights.',
      features: [
        'HD streaming',
        'Access to 10,000+ titles',
        'Watch on 1 screen at a time',
        'Cancel anytime',
        'Limited new releases'
      ],
      highlight: false,
      accent: 'bg-blue-50',
      button: 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white',
      icon: Popcorn
    },
    {
      title: 'Premium Plan',
      price: '$12.99/month',
      route: '/pro',
      description: 'For movie enthusiasts who want the best experience.',
      features: [
        '4K Ultra HD streaming',
        'Access to 20,000+ titles',
        'Watch on 4 screens simultaneously',
        'Dolby Atmos sound',
        'All new releases',
        'Offline downloads'
      ],
      highlight: true,
      accent: 'bg-purple-100',
      button: 'text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white',
      icon: Clapperboard
    },
    {
      title: 'Family Plan',
      price: '$19.99/month',
      route: '/family',
      description: 'Share with family and friends for maximum value.',
      features: [
        'All Premium Plan features',
        'Watch on 6 screens simultaneously',
        'Personalized profiles (up to 10)',
        'Kids safety mode',
        'Family recommendations',
        'Priority customer support'
      ],
      highlight: false,
      accent: 'bg-blue-50',
      button: 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white',
      icon: Film
    },
  ];

  const perks = [
    {
      name: 'Early Access',
      description: 'Watch new releases 30 days early',
      icon: Star,
    },
    {
      name: 'Offline Viewing',
      description: 'Download movies to watch anywhere',
      icon: Download,
    },
    {
      name: 'Premium Support',
      description: '24/7 dedicated customer service',
      icon: Headphones,
    },
  ];

  return (
    <div className="bg-gray-900 mt-24 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Choose Your Movie Experience</h1>
        <p className="mt-4 text-lg text-gray-300">
          Unlimited entertainment with {WEBSITE.NAME}'s flexible streaming plans.
        </p>
      </motion.header>

      {/* Plans Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.title}
                variants={fadeInUp}
                transition={{ delay: 0.2 * i }}
                className={`rounded-2xl p-8 shadow-xl ${plan.accent} ${plan.highlight ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}
              >
                <div className="flex flex-col items-center mb-6">
                  <Icon className="text-purple-600 mb-4" size={36} />
                  <h2 className="text-2xl font-bold text-gray-900 text-center">{plan.title}</h2>
                  {plan.highlight && (
                    <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm mt-2">Most Popular</span>
                  )}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-4 text-center">{plan.price}</div>
                <p className="mb-6 text-gray-700 text-center">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-800">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => navigate(plan.route)}
                  className={`w-full py-3 px-4 text-md font-semibold rounded-lg border-2 ${plan.button} transition-colors hover:shadow-lg`}
                >
                  Start Watching
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Perks Section */}
      <section className="max-w-5xl mx-auto mt-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-10"
        >
          Premium Member Perks
        </motion.h2>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.name}
                variants={fadeInUp}
                transition={{ delay: 0.1 * i }}
                className="bg-gray-800 p-8 rounded-xl shadow-md text-center hover:bg-gray-700 transition-all"
              >
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white">{perk.name}</h3>
                <p className="mt-3 text-gray-300">{perk.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mt-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {[{
            q: 'Can I change my plan later?',
            a: 'Yes! You can upgrade or downgrade your plan at any time from your account settings.',
          },
          {
            q: 'Are there any contracts or commitments?',
            a: 'No, all plans are month-to-month with no long-term commitments. Cancel anytime.',
          },
          {
            q: 'Do you offer student discounts?',
            a: 'Yes! Students get 50% off the Premium Plan with a valid .edu email address.',
          },
          {
            q: 'How many devices can I use?',
            a: 'It depends on your plan. Basic allows 1 screen, Premium allows 4, and Family allows 6 simultaneous streams.',
          }].map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={{ delay: 0.1 * i }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h4 className="font-semibold text-white text-lg">{faq.q}</h4>
              <p className="mt-3 text-gray-300">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="text-center mt-16"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Ready to start streaming?</h3>
        <p className="text-gray-300 mb-6">Try {WEBSITE.NAME} free for 7 days. No credit card required.</p>
        <button
          onClick={() => navigate('/signup')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105"
        >
          Start Free Trial
        </button>
      </motion.div>
    </div>
  );
};

export default Pricing;