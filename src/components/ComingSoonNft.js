import React from "react";
import Image1 from "../assets/Image6.jpg";

const ComingSoonNft = () => {
  return (
    <div className="wrapper">
      <div className="home -page-view">
        {/* <div className="coming-cover"></div> */}
        <section className="coming-banner">
          <img src={Image1} alt="Coming Soon" width={400} height={400} />

          <h1>Coming Soon!!</h1>
        </section>
      </div>
    </div>
  );
};

export default ComingSoonNft;
