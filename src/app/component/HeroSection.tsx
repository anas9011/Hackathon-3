 const HeroSection = () => {
      return (
        <section className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side */}
          <div className=" w-[1440px] h-[500px] top-[60px] left-[80px] bg-[#2A254B] text-white p-10 flex flex-col justify-center">
            <h2 className="w-[565px] h-[90px] text-4xl font-bold mb-6 ">The furniture brand for the future, with timeless designs</h2>
            <button className="w-[170px] h-[56px] bg-[#F9F9F926] hover:bg-gray-600 text-white  py-3 px-6">
              View Collection
            </button>
            <p className=" w-[602px] h-[81px] top-[443px] left-[60px] p-100  mt-20 text-sm">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>
          {/* Right Side */}
          <div className="w-[520px] h-[584px]  flex items-center justify-center relative">
            <img 
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg"// Replace with your chair image URL
              alt="Chair"
              className="w-3/4 object-cover"
          />
            <span className="absolute top-4 right-4  rounded-full p-2"></span>
    
              
                
      
    
    
          </div>
        </section>
     );
    };
    
    
       export default HeroSection;


  
  











































   