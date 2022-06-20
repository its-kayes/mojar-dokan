import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

let p = <div className="text-red-700 font-bold font-mono text-lg"> 5 % OFF TO ALL PRODUCT </div>

const HomeBanner = () => {

  let navigate = useNavigate();

  let freshFood = (event) => {
    navigate('/food');
    toast.error(p);
    
  }
  let freshVegetables = (event) => {
    navigate('/vegetables');
    toast.error(p);
    
  }

  return (
    <div className="border m-2 p-8">
      <p className="text-4xl font-mono text-center -6 text-gray-600 font-bold">
        {" "}
        Catagories{" "}
      </p>
      <div className="flex justify-around mt-10 mb-20">
        <div onClick={freshFood} className="card w-96 h-full bg-base-100 shadow-xl image-full">
          <figure>
            <img src="fruits.webp" alt="Vegetables" />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center items-center h-full text-3xl font-bold">
              Fruits
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
        <div onClick={freshVegetables} className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="vegetables.jpg" alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="flex justify-center items-center h-full text-3xl font-bold">
              Vegetables
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
