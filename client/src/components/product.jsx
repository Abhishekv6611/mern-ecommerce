import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const Product = () => {
  return (
    <section id='product'>
      <div className='flex flex-col lg:flex-row px-4 mt-4'>
        <div className='relative w-full lg:w-auto'>
          <img 
            className='w-full max-w-[900px] h-auto rounded-lg' 
            src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=pexels-igor-starkov-233202-1307698.jpg&fm=jpg"  
            alt="Hotel Machester" 
          />
          <div className='absolute bottom-4 left-4'>
            <h1 className='text-white text-3xl lg:text-6xl font-bold py-2 lg:py-8'>Hotel Machester</h1>
          </div>
        </div>
        <div className='px-4 py-4 lg:px-20 lg:py-20'>
          <div className='flex   sm:flex-row items-start gap-2 lg:gap-6'>
            <h1 className='text-lg font-semibold '>Liked: <span className='text-green-500'>150</span></h1>
            <h1 className='text-lg font-semibold'>Unliked: <span className='text-red-500'>50</span></h1>
          </div>
          <p className='text-indigo-600 text-xl  py-4 lg:py-8'>
            <span className='flex items-center'><FaLocationDot /> Location</span>
          </p>
          <div className='py-5'>
            <p>Photos</p>
            <div className="container grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/026/372/382/non_2x/restaurant-owner-takes-a-picture-of-the-food-on-the-table-with-a-smartphone-to-post-on-a-website-online-food-delivery-ordering-service-influencer-review-social-media-share-marketing-interest-photo.jpg" 
                  alt="Chicken" 
                  className="w-[150px] h-auto" 
                />
                <h2>Chicken</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
