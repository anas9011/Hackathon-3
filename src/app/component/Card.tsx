import React from "react";


const CardPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
      {/* Left Section */}
      <div className="w-[720] h-[603px] py-20 max-w-lg">
        <h1 className="w-[514px] h-[225px] top-[72px] left-[84px] gap-[25px] md:text-4xl  text-[#2A254B] mb-4">
          From a studio in London to a global brand with over 400 outlets
        </h1>
        <p className="w-[450px] h-[100px] text-[#505977] mb-6">
          When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
        </p>
        <p className="w-[450px] h-[100px] text-[#505977] mb-6">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        
        <button className="px-6 py-3 bg-[#F9F9F9] text-[#2A254B] rounded-md ">
          Get in touch
        </button>
      </div>

      {/* Right Section */}
      <div className="w-[720px] h-[603px] left-[720px] mt-6 md:mt-0">
        <img
          src="banner_bg.jpg"
          alt="Furniture design"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default CardPage;
