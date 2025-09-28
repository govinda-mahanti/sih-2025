import React, { useState } from "react";
import m1 from "../Music/m1.mp3"
// --- Audio Therapy Data (Using Native HTML <audio> with Placeholder URLs) ---
// NOTE: In a real-world application, replace these placeholder URLs 
// with actual MP3 file paths hosted on your server or a public domain service.
const audioTherapyData = [
  {
    id: 1,
    title: "Fresh Focus",
    audioUrl: m1
  },
  {
    id: 2,
    title: "Natural Vibes",
    audioUrl: m1, // PLACEHOLDER MP3
  },
  {
    id: 3,
    title: "Ambient Forest with Rain Sounds",
    audioUrl: m1, // PLACEHOLDER MP3
  },
  {
    id: 4,
    title: "Zen Garden Harp and Water Flow",
    audioUrl: m1, // PLACEHOLDER MP3
  },
  {
    id: 5,
    title: "Tibetan Singing Bowls Sound Bath",
    audioUrl: m1, // PLACEHOLDER MP3
  },
  {
    id: 6,
    title: "432 Hz Music for Grounding",
    audioUrl: m1, // PLACEHOLDER MP3
  },
];
const INITIAL_VISIBLE_AUDIOS = 4;

const AudioTherapy = () => {
  const [showAll, setShowAll] = useState(false);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  // CSS for animations is injected via a <style> tag since @keyframes can't be inlined.
  const animationCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-animation {
      animation: fadeIn 0.5s ease-out forwards;
    }

    /* Custom style to adjust the audio player's appearance */
    .custom-audio-player {
        width: 100%;
        min-height: 40px; 
    }
  `;

  // Inline style objects for elements.
  const styles = {
    pageContainer: {
      fontFamily: "'Inter', sans-serif",
    },
  };

  const data = audioTherapyData;
  const initialVisible = INITIAL_VISIBLE_AUDIOS;

  return (
    <div
      style={styles.pageContainer}
      className="bg-gray-50 text-gray-800 pt-[64px]"
    >
      <style>{animationCSS}</style>

      {/* Header Section - Gold/Amber Theme for Sound/Healing */}
      <header className="bg-gradient-to-b from-amber-100 to-white text-gray-800 text-center py-12 md:py-20 border-b border-amber-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-amber-700">
            Auditory Wellness & Sound Therapy
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Listen to healing frequencies and ambient soundscapes for focus,
            meditation, and deep relaxation.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* FIX: Changed to grid-cols-1 to ensure only one item per row on all screen sizes */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {data.map((item, index) => {
            const isInitiallyHidden = index >= initialVisible;

            const animationClass =
              isInitiallyHidden && showAll ? "fade-in-animation" : "";
            const hiddenClass = isInitiallyHidden && !showAll ? "hidden" : "";
            const animationStyle =
              isInitiallyHidden && showAll
                ? {
                    animationDelay: `${(index - initialVisible) * 100}ms`,
                  }
                : {};

            return (
              <div
                key={item.id}
                // Removed overflow-hidden class as it interfered with potential audio player styles in some browsers
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl ring-1 ring-gray-200 hover:ring-amber-300 ${animationClass} ${hiddenClass}`}
                style={animationStyle}
              >
                <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4">
                  
                  {/* Music Icon and Title */}
                  <div className="flex items-center space-x-3 flex-shrink-0 w-full lg:w-1/2  sm:w-auto">
                    {/* Music Icon */}
                    <span className="text-2xl text-amber-500 flex-shrink-0">
                      🎶
                    </span>
                    {/* Title */}
                    <h2 className="text-lg font-bold text-amber-800 truncate">
                      {item.title}
                    </h2>
                  </div>

                  {/* Audio Player (Controller) */}
                  <div className="flex-grow min-w-0 lg:w-1/2">
                    <audio 
                        controls 
                        src={item.audioUrl} 
                        className="custom-audio-player"
                        preload="metadata" 
                        title={`Audio Player for ${item.title}`}
                    >
                        Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Discover More Healing Frequencies
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AudioTherapy;