import React from 'react';
import useMembership from '../../hook/useMembership';
import Loading from '../Shared/Loading';

const Membership = () => {
    let memberships = useMembership();

    if(! memberships.length) {
        return <Loading> </Loading>
    }

    return (
        <div className=' items-center flex flex-col-reverse my-40 '>
            {/* {membership?.length} */}

            {/* <div>
                <div class="card lg:card-side bg-base-100 w-3/4 shadow-xl">
                    <figure><img className='w-3/4' src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {
                memberships.map(membership => <div className='w-2/4 h-96 items-center'>

                    <figure><img className='w-full h-80' src={membership.img} alt="Album" /></figure>

                    <div>
                        <h2 class="card-title">{membership.name}</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Membership;