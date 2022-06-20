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
                                    Shoes!
                                    <div class="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <div class="badge badge-outline">Fashion</div>
                                    <div class="badge badge-outline">Products</div>
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