import React from 'react';

const HeroSection = () => {
  return (
    <div className='container mx-auto px-4'>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex sm:px-16 px-8 py-10 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <p>New Collection</p>
      <h1 class="title-font sm:text-7xl text-3xl mb-4 font-medium text-gray-900">Knitted Toys</h1>
      <p class="mb-8 leading-relaxed">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. </p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Chose a Toy!</button>
        
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/s3BYWkh/Hero-Image-Spot.png"/>
    </div>
    
  </div> <hr className='underline decoration-dashed' /> 
</section>
    </div>
  );
};

export default HeroSection;