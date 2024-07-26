import React from 'react';
import BackgroundImg from '../assets/background-img.png';
import DesktopImg from '../assets/Desktop-62.png'
import OverlayImg from '../assets/overlay-img.png';
import Card from './Card';
const Home = () => {
   
  return (
    <div
      className="relative w-full h-[110vh] bg-cover bg-center sm:w-full md:w-full"
      style={{ backgroundImage: `url(${DesktopImg})` }}
    >
      <div className='absolute mt-4'>
      <div className="inset-0 flex justify-center">
        <h1 className="mt-3 text-5xl leading-[64px] font-bold text-center bg-gradient-to-r from-white via-[#6B61FF] to-white bg-clip-text text-transparent">
          EMPOWERING THE DIGITAL ERA:<br />
          DECENTRALIZING ENTERTAINMENT
        </h1>
      </div>
      <div className=' flex inset-0 justify-center   text-white text-[16px] mt-3'>
      Join the world’s first DePIN: Revolutionizing Content Streaming with faster, Safer and Cheaper Access
      </div>
      <div className="flex inset-0 justify-center mt-8 ">
        <button
          type="button"
          className="text-[#EDF0FF] bg-[#6C5FF5] focus:ring-4 focus:outline-none font-medium rounded-full text-[16px] px-6 py-2 text-center inline-flex items-center dark:focus:ring-gray-500"
        >
          Coming Soon 
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.04492C6.48 2.04492 2 6.52492 2 12.0449C2 17.5649 6.48 22.0449 12 22.0449C17.52 22.0449 22 17.5649 22 12.0449C22 6.52492 17.52 2.04492 12 2.04492ZM16.03 12.5749L13.03 15.5749C12.88 15.7249 12.69 15.7949 12.5 15.7949C12.31 15.7949 12.12 15.7249 11.97 15.5749C11.68 15.2849 11.68 14.8049 11.97 14.5149L13.69 12.7949H8.5C8.09 12.7949 7.75 12.4549 7.75 12.0449C7.75 11.6349 8.09 11.2949 8.5 11.2949H13.69L11.97 9.57492C11.68 9.28492 11.68 8.80492 11.97 8.51492C12.26 8.22492 12.74 8.22492 13.03 8.51492L16.03 11.5149C16.32 11.8049 16.32 12.2849 16.03 12.5749Z" fill="#EDF0FF"/>
</svg>
        </button>
      </div>

      <div className='flex justify-center items-center -mt-8'>
          <img
            src={OverlayImg}
            alt="Overlay"
            className="transform scale-75"
          />
        </div>
      
      <div className=' cards'>
        <div className="flex justify-center items-center  space-x-4">
            <Card background="bg-[#FFFFFF]" width="608px" height="160px">
                <div className="p-4 text-[#1E1E1E]">
                <h2 className="text-3xl font-medium leading-[32.14px]">No of Node Operators</h2>
                <p className="mt-5 text-[63px]">2,000</p>
                
                </div>
            </Card>
            
            <Card background="bg-[#FFFFFF]" width="608px" height="160px">
                <div className="p-4 text-[#1E1E1E]">
                <h2 className="text-3xl font-medium leading-[32.14px]">Data Transferred in TB <span className='text-sm'>(last 30 days)</span></h2>
                <p className="mt-5 text-[63px]">12,000</p>
                
                </div>
            </Card>
            
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
