import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p> An e-commerce website is an online platform that facilitates the buying and selling of products or service
            over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their 
            product, interact with customers, and conduct transaction without the need for a phsical presence 
            e-commerce website have good immense popularity due to their convenience accessibility, and global they offer.
        </p>
        <p>
            E-commerce website typically display product or services along with detailed descriptions, images,prices and
            any available variations (e.g. sizes, colors) . Eash product usually has its own dedicated pages with relevant
            information.
        </p>
      </div>
    </div>

  )
}

export default DescriptionBox
