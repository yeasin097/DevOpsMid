import React, { useState, useEffect } from "react";

const AverageRisksSection = () => {
  const data = [
    { value: 23, description: "Critical misconfigurations" },
    { value: 1400, description: "Sensitive files shared via anonymous links" },
    { value: 47, description: "3rd party apps with a high risk" },
  ];

  const [currentValues, setCurrentValues] = useState(data.map(() => 0));

  useEffect(() => {
    const intervals = data.map((item, index) => {
      return setInterval(() => {
        setCurrentValues((prev) => {
          const newValues = [...prev];
          if (newValues[index] < item.value) {
            newValues[index] += Math.ceil(item.value / 100); // Increment in steps
          } else {
            newValues[index] = item.value; // Ensure it stops at the target value
          }
          return newValues;
        });
      }, 20); // Speed of the count
    });

    return () => intervals.forEach((interval) => clearInterval(interval)); // Cleanup on unmount
  }, [data]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center w-2/3">
        <h2 className="text-2xl md:text-4xl text-gray-800">
          Average Risks Per Organization
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-6xl bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                {currentValues[index]}
              </p>
              <p className="text-gray-600 mt-4 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AverageRisksSection;
