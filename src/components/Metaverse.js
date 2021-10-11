import React from "react";

const Metaverse = () => {
  return (
    <section className="pt-40 section service-2">
      <div className="s-shape1"></div>
      <div className="s-shape2"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="section-heading text-center mb-140 text-center">
              <span
                data-wow-delay="0s"
                className="text-primary text-uppercase mb-10 d-inline-block wow slideInUp"
              >
                FOMOBABY UTILITES
              </span>
              <h2 data-wow-delay=".1s" className="wow flipInX">
                FOMOBABY's ECOSYSTEM
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div
              data-wow-delay=".4s"
              className="bg-white text-center service-item2 mb-80 wow pulse"
            >
              <div className="icon-box2">
                <img src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633284797/FOMOBABY/lottery_logo_be8l6o.png" />
              </div>
              <h3>LOTTERY</h3>
              <p>
              Lottery tickets will be available for purchase on our website. $20000 worth or pots will be used for lottery draws. 3 winners with 1st Prize $10000 2nd Prize $7000 3rd Prize $3000 will be chosen automatically by our Lottery contract. To participate in the Lottery one needs to hold 0.25 BNB worth $FOMOBABY. 2% From every transaction will be allocated into the lottery pool.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              data-wow-delay=".4s"
              className="bg-white text-center service-item2 mb-80 wow pulse"
            >
              <div className="icon-box2">
                <img src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633284797/FOMOBABY/NFT_logo_ws0int.png" />
              </div>
              <h3>NFT MARKETPLACE</h3>
              <p>
              Buy/Sell NFTs &amp; Collectibles on our marketplace platform. We will launch our unique FOMO BABY NFT 3D Art models with different features and accessories.
              We will also have a unique design NFT series for FOMO MON which will be different FOMO NFT MONSTER CHARACTERS.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              data-wow-delay=".4s"
              className="bg-white text-center service-item2 mb-80 wow pulse"
            >
              <div className="icon-box2">
                <img src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633284797/FOMOBABY/stake_logo_xwyrk2.png" />
              </div>
              <h3>STAKING</h3>
              <p>
              Our staking options will allow you to stake FOMOBABY with 3 Different Staking Pools with rewards in three different coins on BSC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metaverse;
