import React from "react";

const EmailSection = () => {
  return (
    <div className="w-[1440] h-[481px] flex items-center justify-center min-h-screen bg-[#F9F9F9]">
      <div className="w-[1240px] h-[264px] top-[52px] left-[93px] gap-[16px] bg-[#FFFFFF] py-12 px-8 rounded-lg shadow-lg  max-w-xl text-center">
        <h1 className="text-2xl font-semibold text-[#2A254B] mb-4">
          Join the club and get the benefits
        </h1>
        <p className="text-[#2A254B] mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>
        <form className="flex justify-center items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#2A254B] text-white font-medium  focus:outline-none"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSection;































// const EmailSection = () => {
//   return (
//     <section className="w-[1440] h-[481px] py-12 bg-[#F9F9F9]">
//     <div className="w-[1273px] h-[364px] top-[52px] left-[93px] gap-[16px] flex flex-col items-center bg-[#FFFFFF] py-10  container mx-auto text-center justify-center ">
//         <div className='w-[571px] h-[114px] top-[68px] left-[351px] gap-[16px]'>
//       <h2 className="text-2xl md:text-3xl font-semibold text-[#2A254B]">
//       Join the club and get the benefits
//       </h2>
//       <p className='w-[425px] h-[30px] text-[#2A254B] py-5 '>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//       </div>
            
//     <div   className="flex flex-col items-center text-center space-y-4">
            
          
           
            
           
//           </div>
//            </div>    
//          </div>
          
//           </section>
//   )
// }


//w-[1273px] h-[364px] top-[52px] left-[93px] gap-[16px] bg-[#FFFFFF] p-8 shadow-lg max-w-md  text-center

























