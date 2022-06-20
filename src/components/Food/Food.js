import React from 'react';
import useFood from '../../hook/useFood';
import Loading from '../Shared/Loading';

const Food = () => {

    let foods = useFood();

    if (!foods.length) {
        return <Loading> </Loading>
    }

    return (
        <div className='my-20'>

            <div className='grid grid-cols-5 gap-5'>
                {
                    foods.map(food => <div >
                        <div class="card w-72 bg-base-100 shadow-xl">
                            <figure><img className='w-52 h-52' src={food.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    {food.name}!
                                    <div class="badge badge-secondary"> {food.price} tk / {food.size} p</div>
                                </h2>
                                {/* <i>{food.description}</i> */}
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, maiores. </p>
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

export default Food;