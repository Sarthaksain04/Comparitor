import React from 'react';
import './Page1.css';
import Navbar from './Navbar';
import ai from '../assets/ai.png';
import { TextAnimate } from '@/Components/ui/text-animate';
// import { Cursor } from '@/Components/inverted-cursor';



const Page1 = () => {
  return (
    <>
      <Navbar />
      
      <div className="page1-container">
        <TextAnimate animation="fadeIn" by="line" as="p" className="intro-line">
          Hi, We&apos;re Comparitor
        </TextAnimate>        
        <TextAnimate animation="fadeIn" by="line" as="p"className="main-text">
          Your AI website team: Compare deals from Amazon, Flipkart, and Meesho in one smart place.
        </TextAnimate>

        <TextAnimate animation="fadeIn" by="line" as="p" className="main-text">
          Just search once, and our AI finds the best prices, reviews, and delivery options for you.</TextAnimate>
        <TextAnimate animation="fadeIn" by="line" as="p" className="get-started">Let's get started!</TextAnimate>
        <img src={ai} alt="carte" className="cart-image" />
      </div>
      
    </>
    
  );
};

export default Page1;
