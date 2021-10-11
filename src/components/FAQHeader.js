import React from "react";
import FAQ from "./FAQ";

const FAQHeader = () => {
  const [faqs, setfaqs] = React.useState([
    {
      number: 1,
      question: "What is Rebase?",
      answer:
        "The rebasing mechanism adjusts the token circulating supply periodically. Let’s say we have an elastic supply token that aims to achieve a value of 1 USD. If the price is below 1 USD, the rebase reduces the current supply, increasing the value of each token. This is known as a negative rebase. ",
      open: false,
    },
    {
      number: 2,
      question: "Why is my $FOMOBABY token balance reducing?",
      answer:
        "The rebasing mechanism adjusts the token circulating supply periodically. With each negative rebase the balance will go down along with total supply in the same ratio. Say you had 2 tokens at $1 each and there are 100 tokens in existence, then market cap is $100 and you own 2%. After rebase, there are 50 tokens and you own 1, but price is $2. You still own $2 worth of tokens, you still own 2%. If marketcap rises to $200 you have 2x your investment. ",
      open: false,
    },
    {
      number: 3,
      question: "What is happening with the chart?",
      answer:
        "Due to the nature of the protocol, the price of the coin rebases every 8 hours to the pegged price. If you are holding $FOMOBABY token in your wallet, you will notice them fluctuating after a rebase. The protocol is designed for token supply to change without the holders having to do anything. ",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section id="faq" className="faq pt-110 pb-80 section">
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
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </div>

        {/* <FAQ /> */}
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  );
};

export default FAQHeader;
