import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#003153]">
      <footer className="bg-black/50 text-white px-6 py-10 md:py-16 lg:px-20 title-font">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">
          {/* Logo and Title */}
          <aside className="flex flex-col items-center md:items-start space-y-4 w-full md:w-1/4">
            <img
              src="https://i.ibb.co/mCgkskv7/Chat-GPT-Image-Jun-14-2025-05-52-56-PM.png"
              alt="ChronoRelic Logo"
              className="w-60 lg:w-80 h-auto object-contain"
            />
           
          </aside>

          {/* Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full md:w-3/4">
            {/* Explore */}
            <nav>
              <h6 className="text-xl font-semibold text-[#F8DE7E] mb-3">Explore</h6>
              <ul className="space-y-2">
                <li><a className="hover:underline">All Artifacts</a></li>
                <li><a className="hover:underline">Add New Artifact</a></li>
                <li><a className="hover:underline">Timeline of Civilizations</a></li>
                <li><a className="hover:underline">Curator's Insight</a></li>
              </ul>
            </nav>

            {/* Community */}
            <nav>
              <h6 className="text-xl font-semibold text-[#F8DE7E] mb-3">Community</h6>
              <ul className="space-y-2">
                <li><a className="hover:underline">About Us</a></li>
                <li><a className="hover:underline">Contact</a></li>
                <li><a className="hover:underline">Contributors</a></li>
                <li><a className="hover:underline">Press</a></li>
              </ul>
            </nav>

            {/* Legal */}
            <nav>
              <h6 className="text-xl font-semibold text-[#F8DE7E] mb-3">Legal</h6>
              <ul className="space-y-2">
                <li><a className="hover:underline">Terms of Service</a></li>
                <li><a className="hover:underline">Privacy Policy</a></li>
                <li><a className="hover:underline">Cookie Policy</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
