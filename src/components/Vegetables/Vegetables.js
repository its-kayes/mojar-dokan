import React from 'react';
import useVegetables from '../../hook/useVegetables';
import Loading from '../Shared/Loading';

const Vegetables = () => {
    let vegetables = useVegetables();

    if (!vegetables.length) {
        return <Loading> </Loading>
    }
    return (
        <div className='my-20'>

        <div className='grid grid-cols-5 gap-5'>
            {
                vegetables.map(vegetable => <div >
                    <div class="card w-72 bg-base-100 shadow-xl">
                        <figure><img className='w-52 h-52' src={vegetable.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {vegetable.name}!
                                <div class="badge badge-secondary"> {vegetable.price} tk / {vegetable.size} kg</div>
                            </h2>
                            <i>{vegetable.description}</i>
                            <div class="card-actions justify-center font-bold pt-3 ">
                                {/* <div class="badge badge-outline">Fashion</div> */}
                                <button class="badge badge-outline py-4 px-5 hover:bg-red-700 hover:text-white"> <i class="fa-solid fa-cart-shopping pr-3"></i>
                                    Add to bag
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>



    </div>
    );
};

export default Vegetables;