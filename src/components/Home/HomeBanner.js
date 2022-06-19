import React from "react";

const HomeBanner = () => {
  return (
    <div className="border m-2">
      <p className="text-3xl font-mono text-center -6"> Catagories </p>
      <div className="flex justify-around mt-10 mb-20">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center items-center h-full text-3xl font-bold">
              Daily Product
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
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
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center items-center h-full text-3xl font-bold">
              Books
            </h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
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
