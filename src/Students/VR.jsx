import React, { useState } from 'react';
import { Eye, CheckCircle } from 'lucide-react';

export default function VR() {
  const [isChecked, setIsChecked] = useState(false);

  const handleBack = () => {
    console.log('Back button clicked');
    // Add your back navigation logic here
  };

  const handleOpen = () => {
    console.log('Open button clicked');
    // Add your open logic here
  };

  return (
    <div className="min-h-full bg-black/15 flex items-center justify-center p-4 absolute top-300 left-0 w-full z-50">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-lg w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Eye className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">VR Setup Instructions</h1>
        </div>

        {/* Instructions Content */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Getting Started with VR
          </h2>
          
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center justify-center">1</span>
              <span className="text-gray-700">Put on the VR headset and adjust the straps for a comfortable fit</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center justify-center">2</span>
              <span className="text-gray-700">Hold the controllers in both hands with your index fingers on the triggers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center justify-center">3</span>
              <span className="text-gray-700">Look around to calibrate your view and ensure proper tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center justify-center">4</span>
              <span className="text-gray-700">Use trigger buttons to interact with objects and menus in the virtual environment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center justify-center">5</span>
              <span className="text-gray-700">Press the menu button to access settings and return to home screen</span>
            </li>
          </ol>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg mb-6">
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
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300 hover:border-blue-400'
              }`}
            >
              {isChecked && <CheckCircle className="w-3 h-3 text-white" />}
            </label>
          </div>
          <label htmlFor="instructions-read" className="text-gray-700 cursor-pointer select-none">
            I have read and understood the VR instructions
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
            onClick={handleOpen}
            className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
}