import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const website = {
  name: "CineVerse",
  slogan: "Your Ultimate Movie Resource",
  description: "Discover in-depth articles about your favorite movies"
};

const ArticleCard = ({ movie }) => (
  <div className="article-card shadow-md rounded-lg overflow-hidden bg-white">
    <div className="article-image">
      <img
        src={`${imgUrl}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[300px] object-cover"
      />
    </div>
    <div className="article-content p-4">
      <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
      <div className="text-sm text-gray-500 mb-2">
        <span className="mr-4">⭐ {movie.vote_average}</span>
        <span>📅 {movie.release_date}</span>
      </div>
      <p className="text-gray-700 text-sm line-clamp-3 mb-4">{movie.overview}</p>
      <Link
        to={`/article/${movie.id}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Read Full Article
      </Link>
    </div>
  </div>
);

const Latest = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data: { results } } = await axios.get(
          `${url}/movie/popular?api_key=${apiKey}&page=${currentPage}`
        );
        setArticles(prev => [...prev, ...results]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="article-page bg-gray-50 min-h-screen py-10 px-4">
      {/* Headings */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Latest Movies</h1>
        <h2 className="text-xl text-gray-600">{website.slogan}</h2>
        <p className="text-gray-500 mt-2">{website.description}</p>
      </header>

      {/* Movie Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {articles.map((movie) => (
          <ArticleCard key={movie.id} movie={movie} />
        ))}
      </main>

      {/* Load More */}
      <div className="text-center mt-10">
        {loading ? (
          <div className="text-gray-500">Loading more articles...</div>
        ) : (
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Load More Articles
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 mt-16 text-sm">
        © {new Date().getFullYear()} {website.name} — All movie data provided by TMDB
      </footer>
    </div>
  );
};

export default Latest;
