import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../components/Shared/Loading';

const useMembership = () => {
    
    let {data: membership, isLoading} = useQuery('membership', ()=> fetch('membership.json').then(res => res.json()));

    if(isLoading) {
        return <Loading></Loading>
    }

    return membership;
};

export default useMembership;