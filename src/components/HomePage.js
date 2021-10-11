import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import Metaverse from "./Metaverse";
import Token from "./Token";
import Process from "./Process";
import HowToBuy from "./HowToBuy";
import FAQHeader from "./FAQHeader";
import Roadmap from "./Roadmap";
import Donate from "./Donate";
import HomeImage from "../assets/Image2.png";
import { FaTelegram, FaInstagram, FaMedium, FaReddit } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Countdown from "react-countdown";
import ABI from './../abi.json'
const Moralis = require('moralis');
Moralis.initialize("ytH3woEzPKiNgQwkQAonknEFXsE4UtLEMimK0Bu9");
Moralis.serverURL = 'https://zvqbzpgdjj8d.moralishost.com:2053/server'

const bounceAnimation = keyframes`${pulse}`;

const BouncyDiv = styled.div`
  position: absolute;
  animation: 5s ${bounceAnimation} linear infinite;
  background-image: url(${HomeImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100%;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const CoverTop = styled.img`
  animation: 2.4s ${bounceAnimation} linear infinite;
  position: absolute;
  top: -36px;
  left: -50px;
  width: 116px;
  transform: scale(0.96);
  opacity: 0.8;
  pointer-events: none;
`;

const CoverBottom = styled.img`
  animation: 2.4s ${bounceAnimation} linear infinite;
  position: absolute;
  bottom: -40px;
  left: -116px;
  width: 150px;
  transform: scale(0.96);
  opacity: 0.8;
  pointer-events: none;
`;

const CoverRight = styled.img`
  animation: 2.4s ${bounceAnimation} linear infinite;
  position: absolute;
  top: 10px;
  right: -50px;
  width: 150px;
  transform: scale(0.96);
  opacity: 0.8;
  pointer-events: none;
`;

const CoverLeft = styled.img`
  animation: 2.4s ${bounceAnimation} linear infinite;
  position: absolute;
  bottom: -98px;
  right: -60px;
  width: 150px;
  transform: scale(0.96);
  opacity: 0.8;
  pointer-events: none;
`;
const HomePage = () => {


  const [pri, setPri] = useState(0)
  const [prinum, setPrinum] = useState(0)
  const [supply, setSupply] = useState(0)
  const [marketcap, setMarketcap] = useState(0)


  try {
    useEffect(() => {
      getPrice();
      getCsupply();
    }, [])
    async function getPrice() {
      request('GET', "https://api.pancakeswap.info/api/v2/tokens/0x82D6E409438E9c2eAEd8ceec4Bd95918cbd17c87")
        .then((r1) => {
          var x1 = JSON.parse(r1.target.responseText);
          let val = Number(x1.data.price).toFixed(13)
          setPri(val)
        }).catch(err => {
          console.log(err);
        })


      function request(method, url) {
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.onload = resolve;
          xhr.onerror = reject;
          xhr.send();
        });
      }

    }

    async function getCsupply() {
      // fetch(
      //   "https://api.bscscan.com/api?module=account&action=state&contractaddress=0x82d6e409438e9c2eaed8ceec4bd95918cbd17c87&address=0x000000000000000000000000000000000000dEaD&tag=latest&apikey=ADDAD8PZK7VYIEJ93GIABHS6WIXBG8UCT4"
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     let burned = data.result / 10 ** 18;
      //     let c_supply = Number(data.result);
      //     Math.round(c_supply / 10 ** 18).toLocaleString('en-US');
      //     Math.round(burned).toLocaleString('en-US');
      //     console.log(c_supply)

      //   });
      const web3 = await Moralis.enable();
      const contract = new web3.eth.Contract(ABI, '0x82d6e409438e9c2eaed8ceec4bd95918cbd17c87');
      const result = await contract.methods.totalSupply().call();
      let csup = Math.round(result / 10 ** 9)
      setSupply(csup)
      let marketcap = (pri * supply)
      console.log(pri, csup, marketcap)

      setMarketcap(Number(marketcap).toFixed(2))
      // }
    }

    var apikey = { key: 'ADDAD8PZK7VYIEJ93GIABHS6WIXBG8UCT4' }

  }
  
  catch (err) {
    // pass 
  }
  return (
    <div className="wrapper">
      <div className="home -page-view">
        <div className="common-cover"></div>
        <section className="banner">
          <div className="banner-main d-flex banner-bg align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="banner-content">
                    <h1 className="mb-2">$FOMOBABY Rebase Token</h1>
                    <p className="mb-60">
                      <span>
                        FOMO BABY is a deflationary rebasing token with an
                        automated liquidity feature, Staking options, NFT’s
                        &amp; Lottery Draws.
                      </span>
                      <br />
                      <span>
                        Our rebasing feature is mathematically structured to
                        increase the price which will cause the charts to
                        constantly stay green.
                      </span>
                      <br />
                    </p>

                    <div className="banner-button">
                      <a
                        target="_blank"
                        href="https://pancakeswap.finance"
                        className="btn btn-main btn-radius"
                        rel="noopener noreferrer"
                      >
                        BUY NOW
                      </a>
                      <a
                        href="https://poocoin.app/tokens/0x82d6e409438e9c2eaed8ceec4bd95918cbd17c87"
                        target="_blank"
                        className="btn btn-solid-border text-uppercase btn-radius"
                      >
                        &nbsp;&nbsp;CHART&nbsp;&nbsp;
                      </a>
                      <div className="banner-socials footer-socials">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://t.me/fomobabytelegram"
                        >
                          <FaTelegram size={34} fill="#29B6F6" />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/fomobabybsc"
                        >
                          <AiFillTwitterCircle size={34} fill="#03A9F4" />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/p/CUYIJiCIjYQ/"
                        >
                          <FaInstagram size={34} fill="#F55376" />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://fomobabycoin.medium.com/fomo-baby-token-launch-58f9a465240f"
                        >
                          <FaMedium size={34} fill="#000" />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.reddit.com/r/FOMOBABY/"
                        >
                          <FaReddit size={34} fill="#e12d39" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="d-none d-xl-block">
                    <div className="banner-cover">
                      <BouncyDiv></BouncyDiv>
                      <CoverTop src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633355245/FOMOBABY/Rebase1_hs0otu.png" />
                      <CoverBottom src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633352719/FOMOBABY/Nft_2_e5dbvn.png" />
                      <CoverRight src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633355232/FOMOBABY/Staking1_xfkxfs.png" />
                      <CoverLeft src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633355258/FOMOBABY/Lottery1_xyeigm.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="counter">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-8">
                  <div
                    data-wow-delay="0s"
                    className="counter-item mb-30 wow slideInUp"
                  >
                    <div className="counter-content">
                      <h3>{supply}</h3>
                      <p>Circulating Supply</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-2 col-lg-6">
                  <div
                    data-wow-delay="0s"
                    className="counter-item mb-30 wow slideInUp"
                  >
                    <div className="counter-content">
                      <h3>#####</h3>
                      <p>Holders</p>
                    </div>
                  </div>
                </div> */}
                <div className="col-xl-4 col-lg-8">
                  <div
                    data-wow-delay="0s"
                    className="counter-item mb-30 wow slideInUp"
                  >
                    <div className="counter-content">
                      <h3>$ {pri}</h3>
                      <p>CURRENT PRICE</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-8">
                  <div
                    data-wow-delay="0s"
                    className="counter-item mb-30 wow slideInUp"
                  >
                    <div className="counter-content">
                      <h3>$ { parseFloat(pri)*parseInt(supply)}</h3>
                      <p>Market Cap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Metaverse />
        <Token />
        <Process />
        <HowToBuy />
        <FAQHeader />
        <Roadmap />
        <Donate />
        <div className="mask-aside show-mask"></div>
      </div>
    </div>
  );
};

export default HomePage;
