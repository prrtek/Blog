import React from "react";

function Hero() {
  return (
    <>
      <div className='flex mb-5'>
        <img
          src='https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-535059003.jpg?w=1390&crop=1'
          className='w-1/2 object-cover mr-8 rounded-lg'
        />
        <div>
          <h2 className='text-xl mb-3'>
            Amazon and SpaceX are quietly trying to demolish national labor law
          </h2>
          <p className='mb-1'>
            <span className='mr-1 text-red-500'>Prateek</span>
            <date className='text-green-700'>17-Feb-2024</date>
          </p>
          <p>
            Amazon alleged in a legal filing published Friday morning that the
            National Labor Relations Board (NLRB) is unconstitutional. SpaceX
            and Trader Joe’s — companies that, like Amazon, have repeatedly
            faced labor law violations from the federal agency — have recently
            made similar attacks that threaten national worker protections.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
