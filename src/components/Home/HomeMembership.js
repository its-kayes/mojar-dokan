import React from 'react';

const HomeMembership = () => {
    return (
        <div className='my-20 p-4'>
            <div class="hero h-screen" style={{backgroundImage: "url(/membership_cards.png)"}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-3xl font-bold">Get Free VIP Membership</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Claim Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMembership;