import { useState, useEffect } from "react";
// Added missing Lucide icons: X, Check, BookOpen
import { Star, Heart, X, Check, BookOpen, Clock } from "lucide-react";

export default function EmotionCheckin() {
  // Global variables provided by the Canvas environment for Firebase integration
  // NOTE: We don't need Firebase for this simple single-user app, but if it were
  // a real-world app, we'd initialize it here to store check-in data.
  const firebaseConfig =
    typeof __firebase_config !== "undefined"
      ? JSON.parse(__firebase_config)
      : null;

  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [hoveredEmotion, setHoveredEmotion] = useState(null);
  const [showDeepCheckin, setShowDeepCheckin] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // New state for confirmation message
  const [checkinData, setCheckinData] = useState({
    // Initial state for deep check-in form
    sleep: 3,
    focus: 3,
    connected: "no",
    grateful: "",
    timestamp: null,
  });

  // Added colors to enable dynamic styling based on the selected mood
  const emotions = [
    { id: "happy", emoji: "😄", label: "Happy", color: "text-green-500" },
    { id: "content", emoji: "😊", label: "Content", color: "text-lime-500" },
    { id: "neutral", emoji: "😐", label: "Neutral", color: "text-gray-500" },
    { id: "tired", emoji: "😴", label: "Tired", color: "text-indigo-500" },
    { id: "sad", emoji: "🥺", label: "Sad", color: "text-blue-500" },
    { id: "crying", emoji: "😭", label: "Crying", color: "text-cyan-500" },
    { id: "angry", emoji: "😡", label: "Angry", color: "text-red-600" },
    { id: "worried", emoji: "😰", label: "Worried", color: "text-orange-500" },
  ];

  const handleEmojiClick = (emotion) => {
    // Clear confirmation on new selection
    setShowConfirmation(false);
    setSelectedEmotion(emotion.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckinData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for submitting the deep check-in - Replaced alert() with state change
  const handleSubmitCheckin = () => {
    const finalData = {
      ...checkinData,
      emotion: selectedEmotion,
      timestamp: new Date().toISOString(),
    };

    // In a real application, you would save this data to a database (e.g., Firestore)
    console.log("Logged Check-in Data:", finalData);

    // Show confirmation message
    setShowDeepCheckin(false);
    setShowConfirmation(true);

    // Reset state after a brief moment (e.g., 5 seconds)
    setTimeout(() => {
      setSelectedEmotion(null);
      setCheckinData({
        sleep: 3,
        focus: 3,
        connected: "no",
        grateful: "",
        timestamp: null,
      });
      setShowConfirmation(false);
    }, 5000);
  };

  const selectedEmotionObject = emotions.find((e) => e.id === selectedEmotion);
  // Dynamic color calculation based on selection, defaulting to a strong purple
  const defaultColorClass = "text-purple-600";
  const defaultBgColorClass = "bg-purple-600";

  const selectedColorClass = selectedEmotionObject?.color || defaultColorClass;

  // Use a reliable color class for background elements
  const selectedBgColorClass = selectedColorClass.replace("text-", "bg-");
  const selectedBgLightClass = selectedColorClass
    .replace("-500", "-100")
    .replace("-600", "-100");
  const selectedAccentClass = selectedColorClass.replace("text-", "accent-");

  const DeepCheckinModal = () => (
    // Responsive Modal Wrapper: max-h-screen and overflow-y-auto ensure scrolling on small screens.
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center py-4 z-50 transition-opacity duration-300 backdrop-blur-sm max-h-screen overflow-y-scroll">
      {/* Modal Content: my-8 guarantees vertical spacing on small screens */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform scale-100 transition-all duration-300 my-8">
        {/* Modal Header using dynamic color - Added items-center for vertical alignment */}
        <header
          className={`flex justify-between items-center p-5 ${selectedBgColorClass} rounded-t-3xl`}
        >
          <div className="flex items-center">
            <h2 className="text-xl font-extrabold text-white">
              Daily Reflection
            </h2>
            <span
              className="ml-3 text-2xl"
              role="img"
              aria-label="Selected mood"
            >
              {selectedEmotionObject?.emoji}
            </span>
          </div>
          <button
            onClick={() => setShowDeepCheckin(false)}
            className="p-1 rounded-full text-white hover:bg-white/30 transition-colors"
            aria-label="Close reflection form"
          >
            <X size={24} />
          </button>
        </header>

        <div className="p-6 space-y-8">
          <div className="space-y-6">
            {/* Question 1: Sleep */}
            <div>
              <label
                htmlFor="sleep"
                className="block text-sm font-semibold text-gray-700 mb-3 flex items-center"
              >
                <Clock size={16} className={`mr-2 ${selectedColorClass}`} /> 1.
                How well did you sleep? ({checkinData.sleep}/5)
              </label>
              <input
                type="range"
                id="sleep"
                name="sleep"
                min="1"
                max="5"
                value={checkinData.sleep}
                onChange={handleInputChange}
                // Dynamic accent color for the range slider
                className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${selectedAccentClass} transition-colors`}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Awful</span>
                <span>Perfect</span>
              </div>
            </div>

            {/* Question 2: Focus */}
            <div>
              <label
                htmlFor="focus"
                className="block text-sm font-semibold text-gray-700 mb-3 flex items-center"
              >
                <Star size={16} className={`mr-2 ${selectedColorClass}`} /> 2.
                How focused were you today? ({checkinData.focus}/5)
              </label>
              <input
                type="range"
                id="focus"
                name="focus"
                min="1"
                max="5"
                value={checkinData.focus}
                onChange={handleInputChange}
                className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${selectedAccentClass} transition-colors`}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Distracted</span>
                <span>Laser Sharp</span>
              </div>
            </div>

            {/* Question 3: Connection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Heart size={16} className={`mr-2 ${selectedColorClass}`} /> 3.
                Have you connected with someone today?
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() =>
                    handleInputChange({
                      target: { name: "connected", value: "yes" },
                    })
                  }
                  className={`px-6 py-2 rounded-xl font-semibold transition-all duration-150 transform hover:scale-[1.03] ${
                    checkinData.connected === "yes"
                      ? "bg-green-500 text-white shadow-lg shadow-green-200"
                      : "bg-gray-200 text-gray-700 hover:bg-green-100"
                  }`}
                >
                  Yes!
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleInputChange({
                      target: { name: "connected", value: "no" },
                    })
                  }
                  className={`px-6 py-2 rounded-xl font-semibold transition-all duration-150 transform hover:scale-[1.03] ${
                    checkinData.connected === "no"
                      ? "bg-red-500 text-white shadow-lg shadow-red-200"
                      : "bg-gray-200 text-gray-700 hover:bg-red-100"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Question 4: Gratitude */}
            <div>
              <label
                htmlFor="grateful"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                4. What is one thing you are grateful for today? (Optional)
              </label>
              <textarea
                id="grateful"
                name="grateful"
                rows="3"
                value={checkinData.grateful}
                onChange={handleInputChange}
                placeholder="E.g., The warm sun, a kind word from a friend, or a good meal."
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition duration-150 shadow-inner"
              ></textarea>
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="space-y-3 pt-4">
            <button
              onClick={handleSubmitCheckin}
              // Submit button uses dynamic color
              className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-xl shadow-xl text-white ${selectedBgColorClass} hover:opacity-90 transition-transform duration-150 transform hover:scale-[1.01]`}
            >
              <Check size={20} className="mr-3" /> Log Reflection
            </button>
            <button
              onClick={() => {
                console.log("User requested to view mental health resources.");
                setShowDeepCheckin(false);
              }}
              className={`w-full flex items-center justify-center px-6 py-2 border border-2 ${selectedColorClass} text-base font-medium rounded-xl ${selectedColorClass} bg-white hover:${selectedBgLightClass} transition-colors`}
            >
              <BookOpen size={20} className="mr-3" /> View Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Use a useEffect to clear the confirmation message after 5 seconds
  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 font-sans">
      {/* Main Content Container: Added responsive vertical padding (py-10, sm:py-20) */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 sm:py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-700 mb-4 tracking-tight">
            How are you{" "}
            <span className="font-semibold text-purple-600">
              feeling today?
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Tap an emoji below that best reflects your current mood.
          </p>
        </div>

        {/* Confirmation Message (Replaces alert) */}
        {showConfirmation && (
          <div
            className={`fixed top-0 left-1/2 -translate-x-1/2 mt-4 max-w-md w-full p-4 rounded-xl shadow-2xl bg-white border-l-4 border-green-500 transition-all duration-300 animate-in fade-in slide-in-from-top-4 z-50`}
          >
            <div className="flex items-center">
              <Check size={24} className="text-green-500 mr-3" />
              <p className="font-semibold text-gray-700">Reflection Logged!</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Your mood and reflection have been successfully saved.
            </p>
          </div>
        )}

        {/* Emoji Selection Grid: Good responsiveness from 4 cols to 8 cols */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-5 max-w-4xl mb-12">
          {emotions.map((emotion) => (
            <div key={emotion.id} className="flex flex-col items-center group">
              <button
                onClick={() => handleEmojiClick(emotion)}
                onMouseEnter={() => setHoveredEmotion(emotion.id)}
                onMouseLeave={() => setHoveredEmotion(null)}
                // Emoji button size remains large enough for touch targets
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl
                  bg-white shadow-md
                  transform transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-4 focus:ring-opacity-50
                  ${
                    selectedEmotion === emotion.id
                      ? `shadow-xl scale-110 ring-4 ${selectedColorClass
                          .replace("text-", "ring-")
                          .replace("500", "400")}`
                      : "hover:shadow-lg"
                  }
                `}
              >
                <span>{emotion.emoji}</span>
              </button>

              {/* Label appears on hover or selection */}
              {(hoveredEmotion === emotion.id ||
                selectedEmotion === emotion.id) && (
                <span
                  className={`mt-2 text-xs md:text-sm font-semibold text-gray-700 transition-opacity duration-300 animate-in fade-in`}
                >
                  {emotion.label}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Action/Selected Emotion Display: Uses flex-col on mobile, flex-row on sm+ */}
        {selectedEmotion && (
          <div className="mb-8 p-6 bg-white rounded-xl shadow-xl border-t-4 border-purple-500 transition-all duration-300 w-full max-w-lg flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-500 font-medium text-sm">You selected:</p>
              <p className="text-xl font-bold text-gray-700 capitalize flex items-center justify-center sm:justify-start">
                {selectedEmotionObject?.emoji}
                <span className={`ml-2 ${selectedColorClass}`}>
                  {selectedEmotionObject?.label}
                </span>
              </p>
            </div>

            {/* Button to open the deep check-in modal - Increased size for better touch target */}
            <button
              onClick={() => setShowDeepCheckin(true)}
              className={`flex items-center px-6 py-3 text-base font-semibold rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
            >
              <Star size={18} className="mr-2" /> Log Reflection
            </button>
          </div>
        )}
      </div>

      {/* Deep Check-in Modal */}
      {showDeepCheckin && <DeepCheckinModal />}
    </div>
  );
}
