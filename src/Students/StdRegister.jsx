import React, { useState } from "react";

const PastInfoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    hasTrauma: "",
    traumaDetails: "",
    traumaYear: "",
    traumaImpact: "",
    hadAccident: "",
    accidentDetails: "",
    accidentYear: "",
    hasMedicalConditions: "",
    medicalConditions: "",
    currentMedications: "",
    allergies: "",
    hasPreviousCounseling: "",
    previousCounselingDetails: "",
    familyMentalHealth: "",
    specificConcerns: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.hasTrauma) newErrors.hasTrauma = "Select Yes or No";
    if (formData.hasTrauma === "yes" && !formData.traumaDetails.trim())
      newErrors.traumaDetails = "Please enter trauma details";
    if (formData.hasTrauma === "yes" && !formData.traumaYear)
      newErrors.traumaYear = "Please enter year of trauma";
    if (!formData.hadAccident) newErrors.hadAccident = "Select Yes or No";
    if (formData.hadAccident === "yes" && !formData.accidentDetails.trim())
      newErrors.accidentDetails = "Please enter accident details";
    if (formData.hadAccident === "yes" && !formData.accidentYear)
      newErrors.accidentYear = "Please enter year of accident";
    if (!formData.hasMedicalConditions)
      newErrors.hasMedicalConditions = "Select Yes or No";
    if (
      formData.hasMedicalConditions === "yes" &&
      !formData.medicalConditions.trim()
    )
      newErrors.medicalConditions = "Please specify medical conditions";
    if (!formData.hasPreviousCounseling)
      newErrors.hasPreviousCounseling = "Select Yes or No";
    // Add validations for other fields as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Past Mental Health & Incident Information
      </h2>

      {/* Trauma */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Have you experienced serious trauma or incidents?
        </label>
        <select
          name="hasTrauma"
          value={formData.hasTrauma}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            errors.hasTrauma ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select</option>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
        {errors.hasTrauma && (
          <p className="text-red-600 text-sm mt-1">{errors.hasTrauma}</p>
        )}
      </div>

      {formData.hasTrauma === "yes" && (
        <>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">
              Details about the trauma
            </label>
            <textarea
              name="traumaDetails"
              value={formData.traumaDetails}
              onChange={handleChange}
              rows="3"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.traumaDetails ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Briefly describe the trauma"
            />
            {errors.traumaDetails && (
              <p className="text-red-600 text-sm mt-1">
                {errors.traumaDetails}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">
              Year of trauma
            </label>
            <input
              type="number"
              name="traumaYear"
              value={formData.traumaYear}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.traumaYear ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., 2019"
              min="1900"
              max="2025"
            />
            {errors.traumaYear && (
              <p className="text-red-600 text-sm mt-1">{errors.traumaYear}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">
              How has it impacted you?
            </label>
            <textarea
              name="traumaImpact"
              value={formData.traumaImpact}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Describe impact (optional)"
            />
          </div>
        </>
      )}

      {/* Accident */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Have you had any major accident or injury?
        </label>
        <select
          name="hadAccident"
          value={formData.hadAccident}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            errors.hadAccident ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select</option>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
        {errors.hadAccident && (
          <p className="text-red-600 text-sm mt-1">{errors.hadAccident}</p>
        )}
      </div>

      {formData.hadAccident === "yes" && (
        <>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">
              Accident details
            </label>
            <textarea
              name="accidentDetails"
              value={formData.accidentDetails}
              onChange={handleChange}
              rows="3"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.accidentDetails ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Briefly describe the accident"
            />
            {errors.accidentDetails && (
              <p className="text-red-600 text-sm mt-1">
                {errors.accidentDetails}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">
              Year of accident
            </label>
            <input
              type="number"
              name="accidentYear"
              value={formData.accidentYear}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.accidentYear ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., 2020"
              min="1900"
              max="2025"
            />
            {errors.accidentYear && (
              <p className="text-red-600 text-sm mt-1">{errors.accidentYear}</p>
            )}
          </div>
        </>
      )}

      {/* Medical History */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Any diagnosed medical conditions?
        </label>
        <select
          name="hasMedicalConditions"
          value={formData.hasMedicalConditions}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            errors.hasMedicalConditions ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select</option>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
        {errors.hasMedicalConditions && (
          <p className="text-red-600 text-sm mt-1">
            {errors.hasMedicalConditions}
          </p>
        )}
      </div>

      {formData.hasMedicalConditions === "yes" && (
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Medical condition details
          </label>
          <input
            type="text"
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              errors.medicalConditions ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="List your medical conditions"
          />
          {errors.medicalConditions && (
            <p className="text-red-600 text-sm mt-1">
              {errors.medicalConditions}
            </p>
          )}
        </div>
      )}

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Current medications (if any)
        </label>
        <input
          type="text"
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="List any medications"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Allergies (if any)
        </label>
        <input
          type="text"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="List any allergies"
        />
      </div>

      {/* Previous Counseling */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Have you received mental health counseling before?
        </label>
        <select
          name="hasPreviousCounseling"
          value={formData.hasPreviousCounseling}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
        >
          <option value="">Select</option>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {formData.hasPreviousCounseling === "yes" && (
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Counseling details
          </label>
          <textarea
            name="previousCounselingDetails"
            value={formData.previousCounselingDetails}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Briefly describe your counseling experience"
          />
        </div>
      )}

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Family history of mental health conditions (if any)
        </label>
        <textarea
          name="familyMentalHealth"
          value={formData.familyMentalHealth}
          onChange={handleChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Describe if applicable"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">
          Other specific mental health concerns
        </label>
        <textarea
          name="specificConcerns"
          value={formData.specificConcerns}
          onChange={handleChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Any additional concerns?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition"
      >
        Submit Past Info
      </button>
    </form>
  );
};

export default PastInfoForm;
