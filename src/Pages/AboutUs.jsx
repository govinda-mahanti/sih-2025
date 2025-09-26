import React from "react";
/* import TeamSection from "./Team";
 */
const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen px-6 lg:px-16 py-12 pt-[64px]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-600 mb-6 mt-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-10 text-gray-700">
          At <span className="font-semibold text-blue-700">Sattava</span>, we
          revolutionize mental health support in educational institutions. Our
          mission is to create a comprehensive, technology-driven ecosystem
          where students can access personalized mental health care, overcome
          academic stress, and thrive in their educational journey with complete
          privacy and professional support.
        </p>

        {/* Vision Section */}
        <section className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            We integrate cutting-edge{" "}
            <span className="text-blue-600 font-medium">
              AI, VR, AR technologies
            </span>{" "}
            with advanced{" "}
            <span className="text-blue-600 font-medium">
              biometric sensors (blood pressure, heart rate, SpO₂ monitoring),
              emotion detection, and real-time mental health analytics
            </span>{" "}
            to understand each student's emotional and physical state and
            provide instant, personalized mental health interventions tailored
            to their academic and personal challenges.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our platform serves four key stakeholders in the educational
            ecosystem, providing{" "}
            <span className="font-semibold text-blue-700">
              comprehensive mental health solutions
            </span>{" "}
            for each:
          </p>

          {/* Four User Categories */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                👨‍🎓 Students
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Register and complete comprehensive mental health assessments
                  including trauma history
                </li>
                <li>
                  Access personalized dashboard with real-time mental health
                  statistics and progress tracking
                </li>
                <li>
                  Choose between{" "}
                  <span className="text-blue-600 font-medium">
                    manual data input
                  </span>{" "}
                  or{" "}
                  <span className="text-blue-600 font-medium">
                    biometric sensor analysis (BP, heart rate, SpO₂)
                  </span>{" "}
                  for more accurate monitoring of stress and emotional state
                </li>
                <li>
                  Multiple support options: AI counseling calls, AR character
                  interactions, VR therapy environments
                </li>
                <li>
                  Anonymous consultations with professional psychiatrists and
                  peer counselors
                </li>
                <li>
                  24/7 crisis helpline with AI-powered emotion detection and
                  immediate response
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
              <h3 className="text-xl font-semibold text-sky-700 mb-3">
                🏛️ Colleges & Institutions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Comprehensive admin dashboard with campus-wide mental health
                  analytics
                </li>
                <li>
                  Manage counseling resources including college clubs,
                  societies, and support groups
                </li>
                <li>
                  Schedule and coordinate yoga sessions, wellness programs, and
                  mental health activities
                </li>
                <li>
                  VR resource management with availability tracking and session
                  scheduling
                </li>
                <li>
                  Anonymous reporting system to monitor campus mental health
                  trends
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 rounded-lg p-6 border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">
                🤝 Volunteer Counselors
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Receive and manage counseling requests from students in their
                  institution
                </li>
                <li>
                  Location-based matching system considering hostel, gender, and
                  availability
                </li>
                <li>
                  Secure communication platform for peer-to-peer counseling
                  sessions
                </li>
                <li>
                  Training resources and guidelines for effective peer
                  counseling
                </li>
                <li>Progress tracking and session documentation tools</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                👨‍⚕️ Professional Doctors
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Anonymous consultation system protecting both student and
                  doctor privacy
                </li>
                <li>
                  Advanced request management with priority-based assignment
                </li>
                <li>Secure video calling and communication platforms</li>
                <li>
                  Access to student's anonymous mental health data and
                  assessment history
                </li>
                <li>Professional documentation and treatment planning tools</li>
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              🚀 Revolutionary Features
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>
                <span className="text-blue-600 font-medium">
                  Biometric-Enhanced VR Therapy:
                </span>{" "}
                Pre-session emotion sensing creates personalized virtual
                environments that adapt to the student's current mental state
                and emotional needs.
              </li>
              <li>
                <span className="text-blue-600 font-medium">
                  AI-Powered Crisis Detection:
                </span>{" "}
                Real-time monitoring and analysis of student interactions to
                identify mental health crises and trigger immediate intervention
                protocols.
              </li>
              <li>
                <span className="text-blue-600 font-medium">
                  Sensor-Based Emotional Analysis:
                </span>{" "}
                Continuous monitoring of vitals like{" "}
                <span className="font-medium">blood pressure, heart rate,</span>{" "}
                and <span className="font-medium">SpO₂ levels</span> provides
                accurate insights into stress, anxiety, and emotional wellness.
              </li>
              <li>
                <span className="text-blue-600 font-medium">
                  Smart Counselor Matching:
                </span>{" "}
                Intelligent algorithm matches students with appropriate
                counselors based on location, gender, specialization, and
                availability.
              </li>
              <li>
                <span className="text-blue-600 font-medium">
                  Complete Anonymity Protection:
                </span>{" "}
                ID-based system ensures complete privacy in sensitive
                consultations while maintaining professional care standards.
              </li>
              <li>
                <span className="text-blue-600 font-medium">
                  Comprehensive Analytics Dashboard:
                </span>{" "}
                Real-time campus mental health insights helping institutions
                make data-driven decisions for student welfare programs.
              </li>
            </ul>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-10">
          <p className="text-gray-700 leading-relaxed">
            We are a{" "}
            <span className="font-semibold text-blue-700">
              team of engineers
            </span>
            , united in our mission to transform student mental health support
            in educational institutions. Through{" "}
            <span className="text-blue-600 font-medium">
              advanced AI, immersive VR/AR experiences, and comprehensive data
              analytics
            </span>
            , we don't just address mental health challenges — we prevent them,
            support recovery, and empower students to achieve their full
            academic and personal potential.
          </p>
        </section>
        {/* <TeamSection />
         */}
        {/* Privacy & Security */}
        <section className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            🔒 Privacy & Security
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Student privacy is our highest priority. All mental health data is
            encrypted, consultations are completely anonymous, and our platform
            is fully HIPAA compliant. We believe that seeking help should never
            compromise a student's privacy or future opportunities.
          </p>
        </section>

        {/* Closing Statement */}
        <section className="mt-10 border-t border-blue-200 pt-6">
          <p className="text-lg text-center text-blue-700 italic">
            With Sattava, every educational institution becomes a sanctuary of
            mental wellness — where students can learn, grow, and thrive with
            the confidence that comprehensive mental health support is always
            within reach.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
