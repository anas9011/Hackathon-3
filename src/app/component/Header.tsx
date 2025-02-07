import React from "react";

const Header = () => {
  return (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 "><h1 className="w-[65px] h-[30px] top-[20px] left-[687px] text-[#22202E] p-2 ">Avion</h1>
    <header className=" p-6 bg-white flex">
      
        <ul className="hidden md:flex gap-6 text-gray-700">
          {["Plant Plot", "Ceramics", "Tables", "Chairs", "Crockery", "Cutlery"].map((item) => (
            <li key={item} className="hover:text-black cursor-pointer">{item}</li>
          ))}
        </ul>
   

      <button className="md:hidden text-gray-700" >☰ </button>
    </header>
    </div>
  );
};

export default Header;
