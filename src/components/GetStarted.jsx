import React, { useState } from "react";

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      step: "STEP 1",
      title: "Prepare Your Headset",
      desc: "Fully charge your headset and controllers. Power on the headset and connect to Wi-Fi. Complete the initial headset setup, including creating a Guardian boundary.",
      img: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=500&h=500&fit=crop&crop=center",
    },
    {
      step: "STEP 2",
      title: "Install Our App",
      desc: "Go to the VR app store on your headset. Search for our app by name and select 'Download' or 'Install'.",
      img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=500&fit=crop&crop=center",
    },
    {
      step: "STEP 3",
      title: "Launch and Begin",
      desc: "Open the app from your headset's library. Follow any simple on-screen instructions to get started.",
      img: "https://images.unsplash.com/photo-1626379953822-baec19c16c4b?w=500&h=500&fit=crop&crop=center",
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            VR Experience Setup
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to get started with your VR journey
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    index <= currentStep
                      ? "bg-yellow-500 border-yellow-500"
                      : "bg-gray-700 border-gray-600"
                  }`}
                >
                  {index < currentStep ? (
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  ) : (
                    <span
                      className={`${
                        index === currentStep ? "text-black" : "text-gray-400"
                      } font-bold`}
                    >
                      {index + 1}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 ${
                    index < currentStep
                      ? "bg-yellow-500"
                      : index === currentStep
                      ? "bg-yellow-400"
                      : "bg-gray-700"
                  } ${index === 0 ? "rounded-l-full" : ""} ${
                    index === steps.length - 1 ? "rounded-r-full" : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Step Info */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="mb-6">
                <span className="inline-block bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm mb-4">
                  {steps[currentStep].step}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {steps[currentStep].title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {steps[currentStep].desc}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={prevStep}
                  className="flex items-center justify-center px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  Previous
                </button>
                <button
                  onClick={nextStep}
                  className="flex items-center justify-center px-5 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg transition-colors"
                >
                  Next
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Step Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-500 rounded-2xl opacity-20 blur-lg"></div>
                <img
                  src={steps[currentStep].img}
                  alt={steps[currentStep].title}
                  className="relative w-full max-w-md h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Step Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentStep ? "bg-yellow-500 w-8" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Need help? Contact our support team at support@vrexperience.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
