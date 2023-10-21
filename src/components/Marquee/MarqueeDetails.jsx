import Marquee from "react-fast-marquee";

const MarqueeDetails = () => {
  return (
    <div>
      <Marquee className="h-16 bg-white my-8" pauseOnHover>
        <span className="mx-12 text-2xl font-medium">
        LIMITED STOCK 
        </span>
        <span className="mx-12 text-2xl font-medium">
        HURRY UP! 
        </span>
        <span className="mx-12 text-2xl font-medium">
        MONEY GUARANTEE 
        </span>
        <span className="mx-12 text-2xl font-medium">
        FREE DELIVERY 
        </span>
        <span className="mx-12 text-2xl font-medium">
        ONLINE SUPPORT
        </span>
        <span className="mx-12 text-2xl font-medium">
        SECURE PAYMENT 
        </span>
        <span className="mx-12 text-2xl font-medium">
        UP TO 50% OFF SALE!
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeDetails;
