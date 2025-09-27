import React, { useState } from "react";

// --- Relaxation & Nature Video Data ---
// These videos are chosen for their pure ambient/nature/relaxation focus.
const natureRelaxationData = [
  {
    id: 1,
    title: "Deep Forest Sounds & Meditation Music",
    videoId: "RzVvThhjAKw", // Video: Calming music with deep forest visuals
    description:
      "Immerse yourself in the sounds of a vibrant forest. This track features deep, resonant music blended with natural forest ambiance, perfect for **deep work, concentration, or a grounding meditation** session. Let the forest bring you back to balance.",
  },
  {
    id: 2,
    title: "Ocean Waves for Sleep and Stress Relief",
    videoId: "QR3lp0ptpy8", // Video: Gentle ocean waves on a beach
    description:
      "The rhythmic, unchanging sound of the ocean is a powerful tool for relaxation. It helps to **mask distracting noises**, encouraging your brain to enter a peaceful, meditative state. Ideal for unwinding before bed or during a stressful afternoon.",
  },
  {
    id: 3,
    title: "Relaxing Rain and Thunderstorm Ambience",
    videoId: "qoRGc5LxUaE", // Video: Heavy rain on a window/nature setting
    description:
      "Experience the cozy comfort of a gentle but steady thunderstorm. The natural white noise frequency of rain helps to **calm an overactive mind**, reduce anxiety, and promote a sense of security and restfulness. A perfect backdrop for reading or napping.",
  },
  {
    id: 4,
    title: "Soothing Flute Music and Mountain Stream",
    videoId: "VKSEG8Xr-RQ", // Video: Gentle stream with ambient flute music
    description:
      "Connect with the tranquility of a flowing stream and soft instrumental music. The combination helps to slow your breathing and lower your heart rate, providing an effective escape for **instantaneous stress reduction** and clarity.",
  },
  {
    id: 5,
    title: "Peaceful Japanese Garden (4K)",
    videoId: "cbeBX4U7O4Q", // Video: Beautiful, still visuals of a Zen garden
    description:
      "A visually stunning and deeply calming journey through a traditional Zen garden. The subtle sounds and minimalist aesthetics promote **mindfulness and quiet introspection**, allowing the mind to detach from daily chaos.",
  },
  {
    id: 6,
    title: "Northern Lights Calming Aurora Borealis",
    videoId: "miqbNFmbN2Q", // Video: Time-lapse Northern Lights with soft music
    description:
      "Gaze upon the majestic, silent dance of the Aurora Borealis. This visual meditation with ambient, non-intrusive music is designed to **inspire wonder and profound calmness**, making everyday troubles feel distant and small.",
  },
  {
    id: 7,
    title: "Crackling Fireplace and Cozy Sounds",
    videoId: "g6Ye4xwXyAw", // Video: Close-up of a burning fireplace
    description:
      "The warm, steady glow and the natural crackle of a fire create a primal sense of **comfort and safety**. This simple, hypnotic ambiance is highly therapeutic for reducing loneliness and promoting a state of deep, sustained relaxation.",
  },
  {
    id: 8,
    title: "Ambient Space Music for Deep Sleep",
    videoId: "B5unCXpegAw", // Video: Cosmic/galaxy visuals with slow, ethereal music
    description:
      "Drift away with deep, low-frequency soundscapes designed to facilitate sleep and meditation. The ethereal tones help **quiet 'monkey mind' chatter** and guide you toward Delta brain waves for restorative rest.",
  },
];
const INITIAL_VISIBLE_VIDEOS = 6; // Start with fewer for a cleaner look

const NatureRelaxation = () => {
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
  `;

  // Inline style objects for elements, removing the need for an external CSS file.
  const styles = {
    pageContainer: {
      fontFamily: "'Inter', sans-serif",
    },
    videoContainer: {
      position: "relative",
      paddingBottom: "56.25%", // 16:9 Aspect Ratio
      height: 0,
      overflow: "hidden",
    },
    videoIframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  };

  // Determine which data set to use
  const data = natureRelaxationData;
  const initialVisible = INITIAL_VISIBLE_VIDEOS;

  return (
    <div
      style={styles.pageContainer}
      className="bg-gray-50 text-gray-800 pt-[64px]"
    >
      <style>{animationCSS}</style>

      {/* Header Section - Changed to a Blue/Teal Theme for Water/Sky */}
      <header className="bg-gradient-to-b from-teal-100 to-white text-gray-800 text-center py-12 md:py-20 border-b border-teal-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-teal-700">
            Pure Relaxation & Nature Soundscapes
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Find your calm. Immerse yourself in the tranquility of nature for
            meditation, stress relief, and deep sleep.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {data.map((item, index) => {
            const isInitiallyHidden = index >= initialVisible;

            const animationClass =
              isInitiallyHidden && showAll ? "fade-in-animation" : "";
            const hiddenClass = isInitiallyHidden && !showAll ? "hidden" : "";
            const animationStyle =
              isInitiallyHidden && showAll
                ? {
                    animationDelay: `${
                      (index - initialVisible) * 100
                    }ms`,
                  }
                : {};

            return (
              <div
                key={item.id}
                className={`bg-white rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl ring-1 ring-gray-200 hover:ring-teal-300 ${animationClass} ${hiddenClass}`}
                style={animationStyle}
              >
                <div style={styles.videoContainer}>
                  <iframe
                    style={styles.videoIframe}
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-teal-700">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
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
              className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Load More Soundscapes
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default NatureRelaxation;