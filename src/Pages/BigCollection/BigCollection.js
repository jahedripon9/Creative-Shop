import React from 'react';
const BigCollection = () => {
  return (
    <div className='container mx-auto px-4 my-20'>
      <section class="text-gray-600 body-font sm:mx-20 mx-10 ">
                <div class="container px-5 py-8 mx-auto border border-dashed  border-red-500 my-8">
          <div class="flex flex-col ">
            <div class="  py-2 mb-2">
              <h1 class="text-center  text-gray-900 font-bold title-font text-4xl  sm:mb-0 ">Big Collection</h1>
            </div>
            <div class="h-1 bg-gray-200 rounded overflow-hidden mb-5">
              <div class="w-96 h-full bg-red-500 mx-auto"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-4 md:w-52 sm:mb-0 mb-6 mx-auto">
              <div class="rounded-lg h-50 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full border border-dashed border-red-500 rounded-full" src="https://i.ibb.co/MCX7HxP/IMG-6282-2-02-1.png" />
              </div>
            </div>
            <div class="p-4 md:w-52 sm:mb-0 mb-6 mx-auto">
              <div class="rounded-lg h-50 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full border border-dashed border-red-500 rounded-full" src="https://i.ibb.co/MCX7HxP/IMG-6282-2-02-1.png" />
              </div>
            </div>
            <div class="p-4 md:w-52 sm:mb-0 mb-6 mx-auto">
              <div class="rounded-lg h-50 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full border border-dashed border-red-500 rounded-full" src="https://i.ibb.co/p4dxTGM/IMG-6267-1-02-1.png" />
              </div>
            </div>
            <div class="p-4 md:w-52 sm:mb-0 mb-6 mx-auto">
              <div class="rounded-lg h-50 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full border border-dashed border-red-500 rounded-full" src="https://i.ibb.co/3MztP57/IMG-6278-2-02-1.png" />
              </div>
            </div>
          </div>
          <button className='rounded-full border border-dashed border-red-600 py-2 px-4 hover:bg-red-500 hover:text-white hover:font-bold'>Chose your Toy</button>
        </div>
      </section>
    </div>
  );
};

export default BigCollection;