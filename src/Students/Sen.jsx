import React, { useState, useEffect } from 'react';
import { Activity, CheckCircle, Heart, Thermometer, Zap } from 'lucide-react';

export default function SensorInstructions() {
  const [isChecked, setIsChecked] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [sensorData, setSensorData] = useState({
    heartRate: 0,
    bloodPressure: { systolic: 0, diastolic: 0 },
    temperature: 0
  });
  const [progress, setProgress] = useState(0);

  // Animate data fetching when showing chart
  useEffect(() => {
    if (showChart) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            // Generate realistic health data
            setSensorData({
              heartRate: Math.floor(Math.random() * 20) + 70, // 70-90 BPM
              bloodPressure: {
                systolic: Math.floor(Math.random() * 20) + 110, // 110-130
                diastolic: Math.floor(Math.random() * 15) + 70   // 70-85
              },
              temperature: (Math.random() * 2 + 97).toFixed(1) // 97-99°F
            });
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [showChart]);

  const handleBack = () => {
    setShowChart(false);
    setProgress(0);
    setSensorData({
      heartRate: 0,
      bloodPressure: { systolic: 0, diastolic: 0 },
      temperature: 0
    });
  };

  const handleStart = () => {
    if (isChecked) {
      setShowChart(true);
      setProgress(0);
    }
  };

  if (showChart) {
    return (
      <div className="min-h-full bg-black/15 flex items-center justify-center p-4 absolute top-0 left-0 w-full z-50">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-lg w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Activity className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Reading Sensor Data</h1>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Fetching data from sensors...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Sensor Data Display */}
          <div className="space-y-4 mb-8">
            {/* Heart Rate */}
            <div className="bg-red-50 rounded-lg p-4 border border-red-100">
              <div className="flex items-center gap-3 mb-2">
                <Heart className={`w-5 h-5 text-red-500 ${progress > 30 ? 'animate-pulse' : ''}`} />
                <span className="font-semibold text-gray-700">Heart Rate</span>
              </div>
              <div className="text-2xl font-bold text-red-600">
                {progress > 30 ? `${sensorData.heartRate} BPM` : '--'}
              </div>
            </div>

            {/* Blood Pressure */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <Zap className={`w-5 h-5 text-blue-500 ${progress > 60 ? 'animate-bounce' : ''}`} />
                <span className="font-semibold text-gray-700">Blood Pressure</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {progress > 60 ? `${sensorData.bloodPressure.systolic}/${sensorData.bloodPressure.diastolic}` : '--/--'}
              </div>
            </div>

            {/* Temperature */}
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
              <div className="flex items-center gap-3 mb-2">
                <Thermometer className={`w-5 h-5 text-orange-500 ${progress > 90 ? 'animate-pulse' : ''}`} />
                <span className="font-semibold text-gray-700">Temperature</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">
                {progress > 90 ? `${sensorData.temperature}°F` : '--'}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="text-center mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              progress === 100 
                ? 'bg-green-100 text-green-700' 
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                progress === 100 ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'
              }`}></div>
              {progress === 100 ? 'Data Collection Complete' : 'Collecting Data...'}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Back to Setup
            </button>
            {progress === 100 && (
              <button className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                Save Results
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-black/15 flex items-center justify-center p-4 absolute top-0 left-0 w-full z-50">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-lg w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Activity className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Health Sensor Setup</h1>
        </div>

        {/* Instructions Content */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Sensor Placement Instructions
          </h2>
          
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm font-medium flex items-center justify-center">1</span>
              <span className="text-gray-700">Place the pulse sensor on your index finger securely but comfortably</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm font-medium flex items-center justify-center">2</span>
              <span className="text-gray-700">Wrap the blood pressure cuff around your upper arm, 1-2 inches above your elbow</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm font-medium flex items-center justify-center">3</span>
              <span className="text-gray-700">Position the temperature sensor under your tongue or on your forehead</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm font-medium flex items-center justify-center">4</span>
              <span className="text-gray-700">Sit comfortably and remain still during the measurement process</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full text-sm font-medium flex items-center justify-center">5</span>
              <span className="text-gray-700">Breathe normally and avoid talking while sensors collect data</span>
            </li>
          </ol>
        </div>

        {/* Safety Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <div className="w-5 h-5 text-yellow-600 mt-0.5">⚠️</div>
            <div>
              <h3 className="text-sm font-semibold text-yellow-800 mb-1">Important Safety Note</h3>
              <p className="text-sm text-yellow-700">Ensure all sensors are clean and properly calibrated before use. If you experience any discomfort, stop the measurement immediately.</p>
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg mb-6">
          <div className="relative">
            <input
              type="checkbox"
              id="instructions-read"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="sr-only"
            />
            <label
              htmlFor="instructions-read"
              className={`flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer transition-colors ${
                isChecked
                  ? 'bg-green-500 border-green-500'
                  : 'bg-white border-gray-300 hover:border-green-400'
              }`}
            >
              {isChecked && <CheckCircle className="w-3 h-3 text-white" />}
            </label>
          </div>
          <label htmlFor="instructions-read" className="text-gray-700 cursor-pointer select-none">
            I have read the instructions and properly positioned all sensors
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleBack}
            className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Back
          </button>
          <button
            onClick={handleStart}
            disabled={!isChecked}
            className={`flex-1 px-6 py-3 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isChecked
                ? 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Start Measurement
          </button>
        </div>
      </div>
    </div>
  );
}