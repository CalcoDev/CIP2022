import React, { useEffect, useState } from "react";

import { useSpring, animated } from "@react-spring/web";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

export default function CompanyCarousel({ className }) {
  const { height, width } = useWindowDimensions();

  const [reset, setReset] = useState(true);
  const springProps = useSpring({
    // delay: ,
    reset: reset,
    config: { duration: 15000 }, // Control the speed like this
    from: {
      transform: `translateX(-${width * 0.7}px)`,
      // x: `0px`,
    },
    to: {
      transform: `translateX(${width * 0.7}px)"`,
      // x: `${width}px`,
    },
    loop: true,
    onStart: () => {
      setReset(false);
    },
  });

  const logos = [
    "https://images.ctfassets.net/aq13lwl6616q/6aeHd4PaFoGj1N8oc8WOW5/33be5c10d4a256a4af58c5eddf748e0b/Blizzard.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/1mVd7P5U0lmrAGVxKcAiqt/c48ced36204b0fdc87ed6842caee9fc4/Peloton.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/2MNy3BfV7XqyCc4eWT3B4/a5a6fbd60eadcb0f2585adfa1153f219/Salesforce.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/1uNxsEep1Dzhjcmbu64aFK/5016136cc0a9a58bcb617b97f8e6448f/Shopify.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/4if8jFodKrzttWEicJyaGN/be3a5dacd09d7dfb364a6ab6418c9f3b/Uber.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/5TYBtWzpoirPbddkeCJ19R/9bea5c8f29838f7cc334eeff99767871/Apple.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/5TVZdV6ju2VQjYFiZGu1FO/8e1545ed0a27ec05c1f4e9cccdcaad3d/-COMPANY_LOGO-_-_TESLA.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/45Zyr0MbLQlUvJTOUEi3lk/4457dc633723806898f6de2a228f0610/IBM.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/7N0dc2eTtF2IPMj4FTxdxZ/94cad1537e2707fb9b6fb4f23d392966/Google.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/60AgkU7oiSyfH2z5wes7V7/9e519d58b67e9a03de46cda0a1523115/-COMPANY_LOGO-_-_Meta.svg?w=160",
    "https://images.ctfassets.net/aq13lwl6616q/1l8TiU2BwSnVTZldgEllgM/783ab08a9d90799a9a1709050084ccd7/Amazon.svg?w=160",
  ];

  return (
    <div className={`${className} flex justify-evenly my-12`}>
      {logos.map((logo, idx) => (
        <animated.img
          className="mx-24"
          width="160px"
          style={springProps}
          src={logo}
          alt="company 1"
          key={idx}
        />
      ))}
    </div>
  );
}
