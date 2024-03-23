'use client'
export default function Home() {
  const handleClick = () => {
    window.open("link", '_blank');
  };

  return (
   <div className={"home"}>
    <h1>Wisdomia</h1>
    <p>Platform in development!</p>
    <p className="smallToBig" style={{marginTop:'100px'}}>Everything big starts with a small step.</p>
    <p>Grab your access to the platform:</p>
    <button className={`${"customButton"}`} onClick={handleClick}>
      <strong>
        Buy Now
      </strong>
    </button>
   </div>
  );
}
