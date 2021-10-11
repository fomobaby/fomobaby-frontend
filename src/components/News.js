import React from "react";

const News = () => {
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
                      className="wow flipInX"
                      style={{ marginBottom: "30px" }}
                    >
                      $FOMOBABY in NEWS
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row partners-list wow fadeInUp">
                <div class="col-xl-3 col-lg-3">
                  <a
                    href="https://finance.yahoo.com/news/fomo-baby-defi-token-revolutionary-102900795.html#"
                    target="_blank"
                    class="partners-item"
                  >
                    <img src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633289527/FOMOBABY/YahooFinanceLogo_tfqib8.png" />
                  </a>
                </div>

                <div class="col-xl-3 col-lg-3">
                  <a
                    href="https://news.yahoo.com/news/fomo-baby-defi-token-revolutionary-102900795.html#"
                    target="_blank"
                    class="partners-item"
                  >
                    <img src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633354950/FOMOBABY/yahoo-news-logo_i9uj2p.png" />
                  </a>
                </div>

                <div class="col-xl-3 col-lg-3">
                  <a
                    href="https://www.bloomberg.com/press-releases/2021-10-04/fomo-baby-a-new-defi-token-with-a-revolutionary-concept-of-price-elastic-tokens"
                    target="_blank"
                    class="partners-item"
                  >
                    <img src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633354950/FOMOBABY/2560px-Bloomberg_logo.svg_vhzl0h.png" />
                  </a>
                </div>

                <div class="col-xl-3 col-lg-3">
                  <a
                    href="https://www.streetinsider.com/PRNewswire/Fomo+Baby%3A+A+New+DeFi+Token+With+A+Revolutionary+Concept+of+Price-Elastic+Tokens/19015731.html"
                    target="_blank"
                    class="partners-item"
                  >
                    <img src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633354950/FOMOBABY/company_logo_street_insider_fqbmv8.png" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
