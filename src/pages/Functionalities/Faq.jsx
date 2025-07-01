import React, { useState } from 'react';

const MovieQuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === '') return;

    // Simulated backend submission
    console.log('User Question:', question);
    setSubmitted(true);
    setQuestion('');
  };

  return (
    <div className="max-w-2xl mt-24  mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Ask Us Anything About Movies
      </h2>

      {/* Helpful Info Sections */}
      <div className="mb-6 space-y-4 text-sm text-gray-700">
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          💡 <strong>Looking for Recommendations?</strong><br />
          Tell us what genres you like or movies you've enjoyed, and we’ll suggest something new.
        </div>
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          🧠 <strong>Confused by a Plot?</strong><br />
          Ask us to explain confusing storylines, twist endings, or character motives.
        </div>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          🎬 <strong>Need Movie Facts?</strong><br />
          Want to know about an actor’s filmography, awards, or upcoming releases? Just ask!
        </div>
      </div>

      {/* Question Form */}
      {submitted ? (
        <div className="text-green-600 text-center font-medium">
          ✅ Thank you! We’ve received your question.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            placeholder="Type your movie question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Question
          </button>
        </form>
      )}
    </div>
  );
};

export default MovieQuestionForm;
