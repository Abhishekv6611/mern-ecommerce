import React from 'react'

const product = () => {
  return (
<section id='product'>
  <div className='flex px-4 mt-4 '>
  <div className='relative '>
      <img 
        className='w-full max-w-[900px] h-auto rounded-lg' 
        src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=pexels-igor-starkov-233202-1307698.jpg&fm=jpg"  
        alt="Hotel Machester" 
      />
      <div className='absolute bottom-4 left-4'>
      <h1 className=' text-white text-6xl font-bold py-8 '>Hotel Machester</h1>
      </div>
      
    </div>
    <div className='px-20 py-20'>
      <div className='flex flex-row items-start gap-6 j'>
      <h1 className='text-lg font-semibold'>Liked: <span className='text-green-500'>150</span></h1>
      <h1 className='text-lg font-semibold'>Unliked: <span className='text-red-500'>50</span></h1>
      </div>
      <p className='text-indigo-600 text-xl px-2 py-8'>Location</p>
      <div className='py-5'>
        <p>photos</p>
        <div className="container grid grid-cols-2 gap-4">
  <div className="flex flex-col items-center">
    <img src="https://static.vecteezy.com/system/resources/previews/026/372/382/non_2x/restaurant-owner-takes-a-picture-of-the-food-on-the-table-with-a-smartphone-to-post-on-a-website-online-food-delivery-ordering-service-influencer-review-social-media-share-marketing-interest-photo.jpg" alt="Chicken" className="w-[150px] h-auto" />
    <h2 className="">Chicken</h2>
  </div>
  <div className="flex flex-col items-center">
    <img src="https://static.vecteezy.com/system/resources/previews/026/372/382/non_2x/restaurant-owner-takes-a-picture-of-the-food-on-the-table-with-a-smartphone-to-post-on-a-website-online-food-delivery-ordering-service-influencer-review-social-media-share-marketing-interest-photo.jpg" alt="Chicken" className="w-[150px] h-auto" />
    <h2 className="">Chicken</h2>
  </div>
  <div className="flex flex-col items-center">
    <img src="https://static.vecteezy.com/system/resources/previews/026/372/382/non_2x/restaurant-owner-takes-a-picture-of-the-food-on-the-table-with-a-smartphone-to-post-on-a-website-online-food-delivery-ordering-service-influencer-review-social-media-share-marketing-interest-photo.jpg" alt="Chicken" className="w-[150px] h-auto" />
    <h2 className="">Chicken</h2>
  </div>
  <div className="flex flex-col items-center">
    <img src="https://static.vecteezy.com/system/resources/previews/026/372/382/non_2x/restaurant-owner-takes-a-picture-of-the-food-on-the-table-with-a-smartphone-to-post-on-a-website-online-food-delivery-ordering-service-influencer-review-social-media-share-marketing-interest-photo.jpg" alt="Chicken" className="w-[150px] h-auto" />
    <h2 className="">Chicken</h2>
  </div>
</div>

      </div>
     
    </div>
  </div>
</section>

  
  
  )
}

export default product
