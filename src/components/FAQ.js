import React from "react";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div className="row faq-list">
      <div
        className={"faq-item " + (faq.open ? "faq-item open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        {/* <div className="item-title">{faq.question}</div> */}
        <div className="item-title">
          <div className="number">{faq.number}</div>
          <div className="text">{faq.question}</div>
          <div className="arrow"></div>
        </div>
        <div className="item-content">{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
