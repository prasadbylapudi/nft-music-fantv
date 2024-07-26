import React from 'react'
import GlobeImg from '../assets/globe.png';
import DotPattern from '../assets/dot-Pattern-footer.png'
import Card from './Card'
const Heropage = () => {
  return (
    <div className='bg-[#2a2a2b]  relative'>
       <div className=" inset-0 flex items-center justify-center top-10">
        <h1
          className="text-[32px] m-[50px] px-[110px] font-medium leading-[38.4px] tracking-[0.02em] text-center bg-clip-text text-transparent"
          style={{
            background: 'linear-gradient(90deg, #FFFFFF 0%, #999999 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          FanCloud CDN network revolutionizes video infrastructure with community-driven Innovation
        </h1>
      </div>

      <div className='flex items-center justify-center font-[400px] text-[16px] leading-[19.2px] text-[#D2D2D2] mt-2 mx-12 px-[200px]'>
        FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community- driven consumption
      </div>

      <div className='flex justify-center items-center'>
          <img
            src={GlobeImg}
            alt="Overlay"
            className="w-1/2 h-auto"
          />
      </div>
      <div className='cards relative'>
      <div className="flex justify-center space-x-4 p-8">
        <Card background="bg-[#6B61FF]" width="608px" height="237px">
        <div className="p-4 text-[#EDF0FF]">
          <h2 className="text-3xl font-medium">Content Nodes</h2>
          <p className="mt-5">Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN</p>
          <button type="button" class="text-[#0C091B] bg-gray-100 border-b-4 border-gray-200 hover:bg-gray-200 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-12 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 ml-[200px] mt-[60px]">
                 Deploy
        </button>
        </div>
      </Card>
      
      <Card background="bg-[#FE9BF3]" width="608px" height="237px">
        <div className="p-4 text-[#1E1E1E]">
          <h2 className="text-3xl font-medium">Orchestrators</h2>
          <p className="mt-5">Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance.</p>
          <button type="button" class="text-[#FFC4F8] bg-[#7A186F] border-[4px] border-pink-200  focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-8 py-[5px] text-center inline-flex items-center dark:focus:ring-gray-500 ml-[200px] mt-[10px] -rotate-12">
                 Coming Soon
        </button>
        </div>
      </Card>
      <Card background="bg-[#ADFFE4]" width="608px" height="237px">
        <div className="p-4 text-[#1E1E1E]">
          <h2 className="text-3xl font-medium">Validators</h2>
          <p className="mt-5">Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.</p>
          <button type="button" class="text-[#DDFFF4] bg-[#0A9B6B] border-[4px] border-green-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-8 py-[5px] text-center inline-flex items-center dark:focus:ring-gray-500 ml-[200px] mt-[25px] -rotate-12">
                 Coming soon
        </button>
        </div>
      </Card>
    </div>
      </div>
    </div>
  )
}

export default Heropage