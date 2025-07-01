import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const featureCards = [
  {
    id: 1,
    title: 'Discover All Latest Movies',
    description: `Want to know the latest movies? 
See what's trending across genres. 
Find the hottest box office hits. 
Explore hidden cinematic gems. 
Stay ahead with upcoming releases. 
Catch what critics and fans love. 
Never miss out on movie night favorites. 
Watch what everyone’s talking about. 
Discover trailers, ratings, and more. 
Get ready to experience cinema like never before.`,
    image: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
    route: '/latest-movies',
    stats: [
      { label: 'IMDb Rating', value: '8.0' },
      { label: 'Year Released', value: '2006' }
    ]
  },
  {
    id: 2,
    title: "Ask Us Anything About Movies",
    description: `Ask us anything about movies —
from plot twists that left you speechless,
to hidden details you might've missed,
from actor filmographies and career highs,
to upcoming releases you're excited for,
from genre recommendations tailored to your taste,
to decoding complex endings that need explaining,
from award winners and critics’ picks,
to cult classics and underrated gems,
we're here to fuel your curiosity and love for cinema.`,
    image: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
    route: '/faq',
    stats: [
      { label: 'IMDb Rating', value: '7.3' },
      { label: 'Year Released', value: '2013' }
    ]
  },
  {
    id: 3,
    title: 'The Trial of the Chicago 7',
    description: `We will suggest you a movie — 
Based on your mood and interests. 
Tailored to your favorite genres. 
Matching your past favorites. 
Including trending and top-rated picks. 
Curated just for you. 
Helping you escape into great stories. 
Whether you want action or a tearjerker. 
We’ll recommend the perfect film. 
Your next favorite movie is just a click away.`,
    image: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg",
    route: '/suggested-movie',
    stats: [
      { label: 'IMDb Rating', value: '7.8' },
      { label: 'Year Released', value: '2020' }
    ]
  }
];


  const filteredFeatures = featureCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore Inspiring Films
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover movies that move your heart, inspire your mind, and stay with you forever
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <Link to={feature.route} className="text-2xl font-bold text-white hover:underline">
                        {feature.title}
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8 flex flex-col">
                    <div className="flex-1">
                      <Link to={feature.route} className="text-gray-700 text-lg leading-relaxed mb-6 hover:text-blue-600">
                        <p>{feature.description}</p>
                      </Link>

                      <div className="flex flex-wrap gap-4 mb-8">
                        {feature.stats.map((stat, i) => (
                          <div key={i} className="bg-gray-50 px-4 py-3 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Link
                        to={feature.route}
                        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors group"
                      >
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-xl shadow-sm"
            >
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No matching movies found</h3>
              <p className="text-gray-600 mb-6">Try searching for a different title or theme</p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Reset Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Want More Recommendations?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get personalized movie suggestions or browse our full collection
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link to="/faq">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors shadow-md"
                >
                  Visit FAQ
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
