'use client'

import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    return;
    window.open("link", '_blank');
  };

  return (
   <div className={"home"}>
    <h1>Wisdomia</h1>
    <p>Platform in development!</p>
    <p className="smallToBig" style={{marginTop:'100px'}}>Everything big starts with a small step.</p>
    <p style={{padding:'1rem'}}>Get the tokens now and reserve your spot for the future!</p>
    <button style={{cursor:'not-allowed'}} className={`${"customButton"}`} onClick={handleClick}>
        Buy Now
    </button>
    <Image style={{padding:'2rem'}} src={'/token.png'} width={200} height={200} alt="token-wisdomia" />
   </div>
  );
}
