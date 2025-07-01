import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MovieSuggestion = () => {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sample movie database - in a real app, this would come from an API
  const movieDatabase = [
    { title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8, reason: "Mind-bending plot about dreams within dreams" },
    { title: "The Shawshank Redemption", genre: "Drama", year: 1994, rating: 9.3, reason: "Powerful story of hope and friendship" },
    { title: "Parasite", genre: "Thriller", year: 2019, rating: 8.6, reason: "Brilliant social commentary with dark humor" },
    { title: "Spirited Away", genre: "Animation", year: 2001, rating: 8.6, reason: "Magical journey through a spirit world" },
    { title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0, reason: "Iconic superhero film with deep themes" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        if (!prompt.trim()) {
          throw new Error(t('suggestions.emptyPromptError'));
        }
        
        // Simple matching logic - in a real app, this would use AI/ML
        const matchedMovies = movieDatabase.filter(movie =>
          movie.genre.toLowerCase().includes(prompt.toLowerCase()) ||
          movie.title.toLowerCase().includes(prompt.toLowerCase()) ||
          movie.reason.toLowerCase().includes(prompt.toLowerCase())
        );
        
        if (matchedMovies.length === 0) {
          throw new Error(t('suggestions.noResultsError'));
        }
        
        setSuggestions(matchedMovies);
      } catch (err) {
        setError(err.message);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24 bg-gray-50 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-3 flex items-center justify-center">
           {t('suggestions.title')}
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          {t('suggestions.description')}
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
            {t('suggestions.tipTitle')}
          </h3>
          <p className="text-gray-700">
            {t('suggestions.tipText')}
          </p>
          <ul className="mt-2 space-y-1 text-left text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              "{t('suggestions.example1')}"
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              "{t('suggestions.example2')}"
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              "{t('suggestions.example3')}"
            </li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">            </div>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={t('suggestions.placeholder')}
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-70 flex items-center justify-center"
          >
            {isLoading ? (
              <>{t('suggestions.searching')}...</>
            ) : (
              <>{t('suggestions.findMovies')} </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
            {t('suggestions.resultsTitle')}
          </h3>
          
          {suggestions.map((movie, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="h-32 w-24 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-400">
                    
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{movie.title} ({movie.year})</h4>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-gray-700">{movie.rating}/10</span>
                    <span className="ml-4 px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full">
                      {movie.genre}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium">{t('suggestions.whyWeRecommend')}:</span> {movie.reason}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-3">{t('suggestions.howItWorksTitle')}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-indigo-600 mb-2 text-2xl">1</div>
            <h4 className="font-medium mb-2">{t('suggestions.step1Title')}</h4>
            <p className="text-gray-600 text-sm">{t('suggestions.step1Text')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-indigo-600 mb-2 text-2xl">2</div>
            <h4 className="font-medium mb-2">{t('suggestions.step2Title')}</h4>
            <p className="text-gray-600 text-sm">{t('suggestions.step2Text')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-indigo-600 mb-2 text-2xl">3</div>
            <h4 className="font-medium mb-2">{t('suggestions.step3Title')}</h4>
            <p className="text-gray-600 text-sm">{t('suggestions.step3Text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSuggestion;