import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor quis asperiores quae. A, vitae!</p>

            </div>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ml-4 mb-9">
                        <img src={review.img} alt='' />
                    </div>
                    <div className='ml-5'>
                        <h4 className="text-xl">{review.name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;