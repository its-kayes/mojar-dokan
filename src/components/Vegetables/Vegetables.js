import React from 'react';
import useVegetables from '../../hook/useVegetables';

const Vegetables = () => {
    let vegetables = useVegetables();
    return (
        <div>
            {
                vegetables?.length
            }
        </div>
    );
};

export default Vegetables;