import React from 'react'


const TopRated = () => {
  return (
    <section id='toprated' className='p-2 mt-9 ml-5 '>
        <div className='flex  flex-col'>       
            <div className='h-full w-[50%] transition-transform transform group-hover:scale-105 '>
                <img className='w-full h-full object-cover rounded-lg' src="https://tableo.com/wp-content/uploads/Restaurant-Stock-Images-e1699951587809.webp" alt="" />
            </div>
            <div className='flex w-[50%] justify-center gap-20'>
            </div>
            
        </div>
    </section>
  )
}

export default TopRated
