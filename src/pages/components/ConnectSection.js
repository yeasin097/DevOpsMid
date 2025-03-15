import Image from "next/image";
import SideBar from "./SideBar";
import React from "react";


const ConnectSection = () => {
 
  return (
    <div className="flex justify-center w-f gap-20">
      {/* Bar content */}
      <SideBar/>
      <section className="bg-gray-50 py-16 w-4/5">
        {/* First Section */}
        <div id="section1" className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">Connect</h2>
                <p className="text-gray-600">
                  Once connected, Suridata's first mission is discovery:
                  identifying automatically which SaaS platforms are part of
                  your ecosystem and might have an effect on your security
                  posture. Within minutes, Suridata connects to your SaaS
                  applications and is up and running, using out-of-the-box
                  policies to seek out the vulnerabilities hidden underneath
                  your SaaS operations. This seamless onboarding helps you to
                  map out your SaaS Stack and Security Posture easily.
                </p>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="/pc.png"
              alt="Laptop Connect"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Section */}
        <div id="section2" className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Identify Security Risks
              </h2>
              <p className="text-gray-600">
                Security risks and threats can be buried deep, obscured by
                misconfigurations, access management rules, version changes, and
                even outdated privileges. Suridata digs through the layers to
                map out the interconnections, interdependencies, overlaps and
                oversights to identify where threats can be lying in wait.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="/pc.png"
              alt="Laptop Connect"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
        {/* Third Section */}
        <div id="section3" className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Prioritize Risks​
              </h2>
              <p className="text-gray-600">
                Once all SaaS security risks have been identified, the next
                challenge is deciding where the efforts should be focused. You
                should evaluate which risks have more impact on business
                continuity vs. those that are easier to exploit. Suridata
                studies your SaaS environment to become your SaaS expert, saving
                precious time and effort. The result is a comprehensive,
                prioritized list of actions that guides you to focus on the most
                critical issues that threaten the foundations of your SaaS
                environment.​
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-3.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
        {/* Forth Section */}
        <div id="section4" className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Evaluate Remediation Effect​​
              </h2>
              <p className="text-gray-600">
                Tackling security risks can jeopardize your business operations
                by creating errors, failures or User Experience issues. Suridata
                is able to see through the darkness underneath a complex SaaS
                application and provide analysis about the potential impact of
                each remediation effort. This allows you to resolve the risks
                without disrupting your employees day-to-day work routine. ​
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-4.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
        {/* Fifth Section */}
        <div id="section5" className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Guide and Remediate​​
              </h2>
              <p className="text-gray-600">
                The process of mitigating security risks involves multiple,
                parallel efforts from various departments and stakeholders to
                strengthen your SaaS environment. This requires coordination and
                constant monitoring. ​Suridata provides guidance on how to
                remediate, allowing you to create and run workflows that assist
                your team. Risks are organized into clusters, so alerts can be
                managed to make sure that only the most critical items are
                communicated within the pack in order to generate an
                instantaneous reaction.​
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-5.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectSection;
