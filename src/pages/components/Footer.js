import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex justify-center">
      <footer className="w-4/5 bg-gray-50 p-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Information */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-gray-800">
              INFO@TOKOMNI.IO
            </h3>
            <address className="not-italic text-sm text-gray-600">
              7 Menahem Begin Rd., Palestine
              <br />
              244 5th Avenue, New York, N.Y. 10001, USA
            </address>
          </div>

          {/* Platform Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              PLATFORM
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Overview</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Use Cases Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              USE CASES
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>SaaS Misconfiguration Management</li>
              <li>Shadow SaaS Management</li>
              <li>Third-Party and SaaS-to-SaaS Security</li>
              <li>Generative AI Security</li>
              <li>Identity Posture Management</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              RESOURCES
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Blog</li>
              <li>Collateral</li>
              <li>News</li>
              <li>Podcasts</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              COMPANY
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>About us</li>
              <li>Management & Board</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex gap-4 mt-8">
          <Image
            src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/cert-1-hvr.png" // Replace with actual path
            alt="ISO Certification"
            width={60}
            height={60}
          />
          <Image
            src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/cert-2-hvr.png" // Replace with actual path
            alt="SOC 2 Certification"
            width={60}
            height={60}
          />
        </div>
      </footer>
    </div>
  );
}
