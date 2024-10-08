import React from 'react'
import chef1 from "../assets/chef1.jpeg"
import chef2 from "../assets/chef2.png"
import chef3 from "../assets/chef3.jpg"


const Chefs = () => {
  return (
    <section id="menu" className="max-padd-container py-16">
      {/* title */}
      <div className="py-10 max-w-[622px] pb-20 mx-auto text-center">
        <h3 className="h3 uppercase ">Our Farmers</h3>
        <p>
          See how our farmers are doing!
        </p>
      </div>
      {/* container */}
      <div className="max-padd-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10">
        <div>
            <img src={chef1} alt="" className='object-contain aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
        </div>
        <div className='mt-14'>
            <img src={chef3} alt="" className='object-contain aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
        </div>
        <div className='mt-28'>
            <img src={chef2} alt="" className='object-contain aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
        </div>
      </div>
    </section>
  )
}

export default Chefs