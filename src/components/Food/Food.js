import React from 'react';
import useFood from '../../hook/useFood';

const Food = () => {

    let foods = useFood();


    return (
        <div>
            {foods.length}
        </div>
    );
};

export default Food;