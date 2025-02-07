import React from "react";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "The Poplar suede sofa",
      price: "£980",
      image: "https://s3-alpha-sig.figma.com/img/5633/5375/b19dc98ccde98dc5e1e2fb1bd0dc3b72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDsqFDbfHP8bEBcjpLyyAoNhQqpBjO~5cTTTpiB4h3qkN15NK5cVfzxqV33rUJmlzTgJHo9weC4ns7BcrFO3SthViDnkr5IWMatO1pHrI-6e-GggQuvyo~-7fqNozISASFM4I5LhPKkzGx4xEQVeoYPtDdvoSKfuK-fByciKbf-rhMz5JsWQmiaeRbH2GVNkEKZfZoDpaKTZ3b4r5zvt5FuXOUBUbSMUyI37gjNz8Bw5I2zk2jTcj0xKpupbhCvJzXICRshOEQpK0H69RdY0wkVzQAEP69JZwBXuKJErRjVHDZufxSyS429se1HVKxJlBoOirSuUZh9ZTpPN1FaC1w__", // Replace with actual sofa image URL
    },
    {
      id: 2,
      name: "The Dandy chair",
      price: "£250",
      image: "https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhnF7CVBIKnx72pcnWcgTZkBXLK8I5yTzBajN4VPzDRNTiWV64VGxSPmBLOUIZqldUSwNWgNcEyjLp2jdI8DN2SDJL-N-WdBF7oBMgFfETEjJ3HJTnRn9tN9jeYexyPQkbNy0p0tLRqZ4noUNaYTz0fn~Mg90FmpM4b11BZ8Vluf1GjC7qleuC6Cg6FU54lOqXCd5qOHb~po3O0MukS8eY6dEtuFq7auYO7Xo1dJSSbmx-wxVL90cfduJO~VNT2u-tNROVAt4VS7Q60jz1wsWwedH4VL9ZFhKP7d48aGzh9VS4DvfTo3WtPh4vgsFvVkrLTAeG4AuVLonsDDahlsIg__", // Replace with actual chair image URL
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "£250",
      image: "https://s3-alpha-sig.figma.com/img/78e7/5abe/f99fff09807c6e277a683cd469bb041d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax6TivDfk~ayU7m5AJ31poHlQDIeQ~2H5OtfPWgIOZ9JJ5QAmBUGXPJvZRVXFJQTDwWkm2YNdl9sbnKjWUToheZSVMh4D7CN6f9uswpiZDLaJqFcscPSCgtw0YtQNG5oOF-7hUadxbQaaVt-mVBHCuxk~kANL9eeVDiKWi0lM7Iu6rziE06IWZflpVBz2Q2g958eTxHY08hLIipU6T8BiCX9ZqtlEUKcJlZB066xh0tWx1a3nAvqq4AZc6KuyzBKbAtKBHPDfttOxmMdrkNqzqAMLvM5qWDuU0GeCfgEOL15a4NgwiD1biTEwCoxIN6enuTvKWTna1BV0nYCIH~fDg__", // Replace with actual chair image URL
    },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-16 lg:px-32">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
        Our popular products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-700">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm">{product.price}</p>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-[#F9F9F9] text-[#2A254B] text-sm font-medium rounded-lg shadow-md  transition">
          View collection
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;
