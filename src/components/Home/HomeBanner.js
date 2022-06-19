import React from "react";

const HomeBanner = () => {
  return (
    <div className="border m-2 p-8">
      <p className="text-4xl font-mono text-center -6 text-gray-600 font-bold">
        {" "}
        Catagories{" "}
      </p>
      <div className="flex justify-around mt-10 mb-20">
        <div className="card w-96 h-full bg-base-100 shadow-xl image-full">
          <figure>
            <img src="vegetables.jpg" alt="Vegetables" />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center items-center h-full text-3xl font-bold">
              Fresh Vegetables
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="necessaryitems.jpg" alt="Necessary" />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center items-center h-full text-3xl font-bold">
              Necessary Product
            </h2>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="books.jpg" alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center items-center h-full text-3xl font-bold">
              Books
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="newspapers-image.jpg" alt="NewsPapers" />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center items-center h-full text-3xl font-bold">
              News Papers
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
