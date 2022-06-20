import React from 'react';
import useMembership from '../../hook/useMembership';

const Membership = () => {
    let membership = useMembership();
    return (
        <div>
            {membership?.length}
        </div>
    );
};

export default Membership;