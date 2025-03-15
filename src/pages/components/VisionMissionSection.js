import React, { useState } from "react";

const VisionMissionSection = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="w-full flex justify-center">
      <section className=" py-16 px-4 w-4/5">
        <div className="container mx-auto flex items-center justify-between">
          {/* Text Content (Left Side) */}
          <div className="w-3/6 text-left">
            <p className="text-3xl text-gray-600 mb-4">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Suridata’s
              </span>{" "}
              vision is to help organizations by creating a security perimeter
              for SaaS applications.
            </p>
          </div>

          {/* Tab Buttons (Right Side) */}
          <div className="w-2/6 flex flex-col items-center justify-start space-y-4">
            <button className="w-1/2 px-4 py-2 rounded-lg text-sm md:text-lg font-semibold bg-white text-red-500 border border-red-500">
              VISION
            </button>
            <button className="w-1/2 px-4 py-2 rounded-lg text-sm md:text-lg font-semibold bg-red-500 text-white">
              MISSION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMissionSection;
