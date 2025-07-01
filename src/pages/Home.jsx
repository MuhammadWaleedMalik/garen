import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const website = {
    name: "GracenoteX",
    slogan: "Your Ultimate Movie Discovery Platform",
    description: "CineVerse connects movie lovers with their next favorite film through AI-powered recommendations and comprehensive metadata.",
    features: [
      "Personalized recommendations",
      "Detailed movie metadata",
      "Trending and upcoming releases",
      "Expert reviews and ratings"
    ]
  };

  const slides = [
    {
      title: "Discover Your Next Favorite Movie",
      description: "AI-powered recommendations tailored to your unique taste in films.",
      buttonText: "Explore Movies",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Stay Updated With Latest Releases",
      description: "Comprehensive database of new and upcoming movies across all genres.",
      buttonText: "View New Releases",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Deep Dive Into Movie Details",
      description: "Cast information, director insights, ratings, and behind-the-scenes content.",
      buttonText: "Learn More",
      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const genres = [
    "Action", "Adventure", "Animation", "Comedy", "Crime", 
    "Documentary", "Drama", "Fantasy", "Horror", "Mystery",
    "Romance", "Sci-Fi", "Thriller", "Western"
  ];

  const trendingMovies = [
    {
      title: "Dune: Part Two",
      year: 2024,
      rating: 8.7,
      genre: ["Sci-Fi", "Adventure"],
      image: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "The Batman",
      year: 2022,
      rating: 7.9,
      genre: ["Action", "Crime", "Drama"],
      image: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Everything Everywhere All at Once",
      year: 2022,
      rating: 8.0,
      genre: ["Action", "Adventure", "Comedy"],
      image: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg"
    }
  ];

  const trustedPartners = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png",
    "https://gracenote.com/wp-content/uploads/2024/02/12.svg" ,
    "https://gracenote.com/wp-content/uploads/2024/02/5.svg" ,
    "https://gracenote.com/wp-content/uploads/2024/02/20.svg" ,   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      
      {/* Hero Slider - Fixed with proper sizing */}
      <section id="home" className="relative mb-24 bg-gray-900 text-white overflow-hidden h-[600px]">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-300 mb-6">{slide.description}</p>
                  <Link to={"/about"} className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300 z-20"
        >
          ‹
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300 z-20"
        >
          ›
        </button>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${index === currentSlide ? 'bg-red-600 w-6' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </section>

      {/* Trending Movies */}
      <section id="movies" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Movies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingMovies.map((movie, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{movie.title} ({movie.year})</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{movie.rating}/10</span>
                    <span className="ml-4 text-sm text-gray-600">{movie.genre.join(", ")}</span>
                  </div>
                  <button className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300">
                        {website.name} 
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres */}
      <section id="genres" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Updates  on Each Genre</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
            {genres.map((genre, index) => (
              <button
                key={index}
                className="bg-white py-3 px-4 rounded-lg shadow-sm hover:bg-red-600 hover:text-white transition duration-300 text-center"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedPartners.map((partner, index) => (
              <img 
                key={index}
                src={partner} 
                alt={`Partner ${index + 1}`}
                className="h-12 object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About {website.name}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{website.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                {website.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center md:justify-start">
                    <span className="text-red-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
              <p className="mb-4">Sign up to get personalized movie recommendations and stay updated with the latest releases.</p>
              <Link  to={"signup"} className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default Home;