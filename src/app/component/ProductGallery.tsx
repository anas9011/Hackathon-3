import React from "react";

const products = [
  {
    name: "The Dandy Chair",
    price: "£250",
    image: "https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhnF7CVBIKnx72pcnWcgTZkBXLK8I5yTzBajN4VPzDRNTiWV64VGxSPmBLOUIZqldUSwNWgNcEyjLp2jdI8DN2SDJL-N-WdBF7oBMgFfETEjJ3HJTnRn9tN9jeYexyPQkbNy0p0tLRqZ4noUNaYTz0fn~Mg90FmpM4b11BZ8Vluf1GjC7qleuC6Cg6FU54lOqXCd5qOHb~po3O0MukS8eY6dEtuFq7auYO7Xo1dJSSbmx-wxVL90cfduJO~VNT2u-tNROVAt4VS7Q60jz1wsWwedH4VL9ZFhKP7d48aGzh9VS4DvfTo3WtPh4vgsFvVkrLTAeG4AuVLonsDDahlsIg__", // Replace with actual image URL
  },
  {
    name: "Rustic Vase Set",
    price: "£155",
    image: "https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5~kAr5sCKgyS~pH00Vdud6EC-Ccl6Xv2cv4DyM-kMXMT-ynCU7D0L4Raz-DEqTN0ICtFRilmLy1L-nEplq6fjVB44oGYw-iEx11YjL6q~Hrf7imqAQ4Zzk-QyQ917mHTId25Pis3xGKaumsszcO1g3H5pk9y~kDxa6UjwQoM2nFsNKKvvOzg~3zyn8xHfBQ8cUlFOAsxFVhl4jrXcY~M5WdfVgK2drwL~ck4TvSTNDeVsiTZGJOcv8Qom~OzAkWcASAZAwJ5AuKAt2ZFn5i8iWncMqZ9s6P70W6cQjwKibe-VazED~ysr1JLSjV9h7qEwuEjgLK6a6lGafihA2now__", // Replace with actual image URL
  },
  {
    name: "The Silky Vase",
    price: "£125",
    image: "https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WhrmQkDOMkEVKaU3LLut6ygI-62V0QlxBSrku2lkiE8AOSVeXPEXKnsfmE3-rDG62omBX2tduXGhieDyKgYaS5~QNu9Q3ESkLeGo97tQsfVwjpcMICpQS8JcLKeiGya-BNbvdrrsStw7pBKmPIRug7z9fU4ago1mC5Jwdt9jNZn71BDegU2-R~w7gdCoP0Ynl6b2SGmbMYpX6iVtcQ6Cbiza-0Eq8RuXNTG37VxeD81Tn~Caum6JPEuZMciBwlf~oD2tDoljCh6AtWleQNPYvuXs30YhQs-ZKL9dTgisyR6hpQhNEQQ7VIh3g2NnRUw3rRykNfsjQdj7W3voSnJc9w__", // Replace with actual image URL
  },
  {
    name: "The Lucy Lamp",
    price: "£399",
    image: "https://s3-alpha-sig.figma.com/img/4747/f0e8/ffbabae5de21ee1b8c8ca6e83dd10f51?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQ6p-zgcQRHhrfVKOCfT2UGq4msA55Par4G-Zoc~XkFnVYCr8xZ2lS1STP~WdO~SkbttbRckM5Qd-bDS2dZrx1hcmONmV7yEgMVZL1P8FYbBBErLP5-qlsknpdIR3MKoYBlcu9-b9~EVwyvIvFjDRqbJfmeE9bEI22isk3P6pfapABTVDm6UGkxq6KYLZ7j1SzMTUP-x8WPtAPUNfvBILlIFJJl8vH2cwpaAnTYXeKd0j4u5~W-k99Qr4fvrpXZP91wq3FmtqgZkFaC15~UVu-KmjFdwQo~HSnko~m2oOZE2AhqDbhEecQW-e7FU-wLArOEQkQ~oy2BgKeobDI2M0g__", // Replace with actual image URL
  },
];

const ProductGallery = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          New Ceramics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 bg-[#F9F9F9] text-[#2A254B] rounded-lg  transition">
          View Collection
        </button>

      </div>
    </section>

 



  );
};

export default ProductGallery;



   

  
