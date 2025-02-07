// FooterComponent.jsx
import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Menu</h4>
          <ul className="space-y-2">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Our company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div>
          <h4 className=" font-bold text-lg mb-4">Join our mailing list</h4>
          <form className="w-[400px] h-[56px] flex items-center space-x-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full py-2 px-4 bg-[#FFFFFF26] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button 
              type="submit"
              className="w-[118px] h-[56px] py-2 px-2 bg-[#FFFFFF] text-[#2A254B] font-semibold hover:bg-gray-100"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;










































































// const Footer = () => {
//   return (
//     <footer className="w-[1440px] h-[380px] bg-[#2A254B] text-white py-10">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Menu Section */}
//           <div className="w-[108px] h-[175px] top-[58px] left-[82px] gap-[12px]">
//             <h2 className="font-semibold text-lg mb-4">Menu</h2>
//             <ul className="space-y-2">
//               <li>New arrivals</li>
//               <li>Best sellers</li>
//               <li>Recently viewed</li>
//               <li>Popular this week</li>
//               <li>All products</li>
//             </ul>
//           </div>

//           {/* Categories Section */}
//           <div className="w-[55px] h-[19px] ">
//             <h2 className="font-semibold text-lg mb-4">Categories</h2>
//             <ul className="space-y-2">
//               <li>Crockery</li>
//               <li>Furniture</li>
//               <li>Homeware</li>
//               <li>Plant pots</li>
//               <li>Chairs</li>
//             </ul>
//           </div>

//           {/* Our Company Section */}
//           <div className="w-[90px] h-[175px] top-[58px] left-[516px] gap-[12px]">
//             <h2 className="font-semibold text-lg mb-4">Our company</h2>
//             <ul className="space-y-2">
//               <li>About us</li>
//               <li>Vacancies</li>
//               <li>Contact us</li>
//               <li>Privacy</li>
//               <li>Returns policy</li>
//             </ul>
//           </div>

//           {/* Mailing List Section */}
//           <div className="w-[509px] h-[56px]">
//             <h2 className="font-semibold text-lg mb-4">Join our mailing list</h2>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="your@email.com"
//                 className="flex-grow px-4 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-white text-indigo-900 font-medium rounded-r-md hover:bg-gray-100"
//               >
//                 Sign up
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Divider */}
//         <div className="mt-10 border-t border-gray-700 py-20 pt-6  flex justify-end">
          
           
            
//           </div>
//         </div>
      
//     </footer>
//   );
// };

// export default Footer;





























