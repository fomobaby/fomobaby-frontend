import React from "react";
import { FaTelegram, FaInstagram, FaMedium, FaReddit } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Community = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCopied1, setIsCopied1] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);
  const [isCopied3, setIsCopied3] = useState(false);
  const [isCopied4, setIsCopied4] = useState(false);

  const telegramUrl = `https://t.me/fomobabytelegram`;

  const twitterUrl = `https://twitter.com/fomobabybsc`;

  const instagramUrl = `https://www.instagram.com/p/CUYIJiCIjYQ/`;

  const mediumUrl = `https://fomobabycoin.medium.com/fomo-baby-token-launch-58f9a465240f`;

  const redditUrl = `https://www.reddit.com/r/FOMOBABY/`;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const onCopyText1 = () => {
    setIsCopied1(true);
    setTimeout(() => {
      setIsCopied1(false);
    }, 1000);
  };

  const onCopyText2 = () => {
    setIsCopied2(true);
    setTimeout(() => {
      setIsCopied2(false);
    }, 1000);
  };

  const onCopyText3 = () => {
    setIsCopied3(true);
    setTimeout(() => {
      setIsCopied3(false);
    }, 1000);
  };

  const onCopyText4 = () => {
    setIsCopied4(true);
    setTimeout(() => {
      setIsCopied4(false);
    }, 1000);
  };

  return (
    <div className="wrapper">
      <div className="home">
        <div className="pc-inner-widget index-page-view">
          <section
            id="community_main"
            className="community-main pt-80 pb-50 section"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <div className="section-heading text-center mb-70">
                    <h2
                      data-wow-duration="1s"
                      data-wow-delay=".1s"
                      className="wow flipInX mb-15"
                    >
                      $FOMOBABY Official Channels
                    </h2>
                    <p>Join to Follow $FOMOBABY Latest News!</p>
                  </div>
                </div>
              </div>

              <div
                className="row community-main-list wow fadeInUp"
                style={{ justifyContent: "center" }}
              >
                <div className="col-xl-4 col-lg-4">
                  <div className="community-main-title">
                    <FaTelegram
                      size={34}
                      fill="#ffffff"
                      style={{ marginRight: 16 }}
                    />{" "}
                    Telegram
                  </div>
                </div>

                <div className="col-xl-8 col-lg-8">
                  <div className="community-main-content">
                    <a
                      target="_blank"
                      href="https://t.me/fomobabytelegram"
                      className="link-text"
                    >
                      {telegramUrl}
                    </a>
                    <CopyToClipboard text={telegramUrl} onCopy={onCopyText}>
                      <a className="copy-btn">
                        {isCopied ? "Copied!" : "Copy"}
                      </a>
                    </CopyToClipboard>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <div className="community-main-title">
                    <AiFillTwitterCircle
                      size={34}
                      fill="#ffffff"
                      style={{ marginRight: 16 }}
                    />{" "}
                    Twitter
                  </div>
                </div>

                <div className="col-xl-8 col-lg-8">
                  <div className="community-main-content">
                    <a
                      target="_blank"
                      href="https://twitter.com/fomobabybsc"
                      className="link-text"
                    >
                      {twitterUrl}
                    </a>
                    <CopyToClipboard text={twitterUrl} onCopy={onCopyText1}>
                      <a className="copy-btn">
                        {isCopied1 ? "Copied!" : "Copy"}
                      </a>
                    </CopyToClipboard>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <div className="community-main-title">
                    <FaMedium
                      size={34}
                      fill="#ffffff"
                      style={{ marginRight: 16 }}
                    />{" "}
                    Medium
                  </div>
                </div>

                <div className="col-xl-8 col-lg-8">
                  <div className="community-main-content">
                    <a
                      target="_blank"
                      href="https://fomobabycoin.medium.com/fomo-baby-token-launch-58f9a465240f"
                      className="link-text"
                    >
                      {mediumUrl}
                    </a>
                    <CopyToClipboard text={mediumUrl} onCopy={onCopyText2}>
                      <a className="copy-btn">
                        {isCopied2 ? "Copied!" : "Copy"}
                      </a>
                    </CopyToClipboard>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <div className="community-main-title">
                    <FaInstagram
                      size={34}
                      fill="#ffffff"
                      style={{ marginRight: 16 }}
                    />{" "}
                    Instagram
                  </div>
                </div>

                <div className="col-xl-8 col-lg-8">
                  <div className="community-main-content">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/p/CUYIJiCIjYQ/"
                      className="link-text"
                    >
                      {instagramUrl}
                    </a>
                    <CopyToClipboard text={instagramUrl} onCopy={onCopyText3}>
                      <a className="copy-btn">
                        {isCopied3 ? "Copied!" : "Copy"}
                      </a>
                    </CopyToClipboard>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <div className="community-main-title">
                    <FaReddit
                      size={34}
                      fill="#ffffff"
                      style={{ marginRight: 16 }}
                    />{" "}
                    Reddit
                  </div>
                </div>

                <div className="col-xl-8 col-lg-8">
                  <div className="community-main-content">
                    <a
                      target="_blank"
                      href="https://www.reddit.com/r/FOMOBABY/"
                      className="link-text"
                    >
                      {redditUrl}
                    </a>
                    <CopyToClipboard text={redditUrl} onCopy={onCopyText4}>
                      <a className="copy-btn">
                        {isCopied4 ? "Copied!" : "Copy"}
                      </a>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="community_tg"
            className="community-tg pt-80 pb-50 section"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <div className="section-heading text-center mb-70">
                    <h2
                      data-wow-duration="1s"
                      data-wow-delay=".1s"
                      className="wow flipInX mb-15"
                    >
                      Multilingual Telegram Community
                    </h2>
                    <p>Join Our Global Communities</p>
                  </div>
                </div>
              </div>

              <div className="row community-tg-list wow fadeInUp">
                <div className="col-xl-4 col-lg-4">
                  <a
                    target="_blank"
                    href="https://t.me/fomobabytelegram"
                    className="community-tg-item"
                  >
                    <img
                      src="data:image/png;base64,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"
                      className="lang-icon"
                    />
                    <div className="tg-info">
                      <div className="lang-title">Global Group</div>
                      <div className="tg-url">https://t.me/fomobabytelegram</div>
                    </div>
                  </a>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <a
                    target="_blank"
                    href="https://t.me/fomobabyidn"
                    className="community-tg-item"
                  >
                    <img
                      src="data:image/png;base64,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"
                      className="lang-icon"
                    />
                    <div className="tg-info">
                      <div className="lang-title">Indonesian Group</div>
                      <div className="tg-url">https://t.me/fomobabyidn</div>
                    </div>
                  </a>
                </div>

                {/* <div className="col-xl-4 col-lg-4">
                  <a
                    target="_blank"
                    href="https://t.me/yooshi_official"
                    className="community-tg-item"
                  >
                    <img
                      src="data:image/png;base64,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"
                      className="lang-icon"
                    />
                    <div className="tg-info">
                      <div className="lang-title">Global Group</div>
                      <div className="tg-url">https://t.me/yooshi_official</div>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Community;
