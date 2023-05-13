import React, { useState } from "react";

import "../index.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is an NFT?",
      answer:
        "An NFT, or Non-Fungible Token, is a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content. Unlike cryptocurrencies such as Bitcoin, NFTs cannot be exchanged on a like-for-like basis as each NFT holds distinct characteristics and value.",
    },
    {
      question: "What makes our NFT special?",
      answer:
        "Our NFTs are special because they are carefully curated and created by renowned artists in the industry. Each NFT is a unique and exclusive piece of art, music, or collectible that holds both artistic value and potential investment opportunities.",
    },
    {
      question: "Who's the team behind our NFT?",
      answer:
        "Our NFTs are created by a team of talented artists, designers, and developers who are passionate about the digital art world. They bring their expertise and creativity to deliver exceptional NFTs that resonate with collectors and enthusiasts.",
    },
    {
      question: "When does minting begin?",
      answer:
        "Minting for our NFT collection begins on 23/4/2023. Stay tuned for the official announcement and details on how to participate in the minting process.",
    },
    {
      question: "Who can mint one?",
      answer:
        "Anyone who meets the specified criteria can mint our NFTs. Generally, the minting process is open to the public and accessible to individuals who hold a compatible cryptocurrency wallet and follow the outlined instructions during the minting period.",
    },
  ];

  return (
    <div className="FAQContainer">
      {faqs.map((faq, index) => (
        <div className="FAQItem" key={index}>
          <div
            className={`FAQQuestion ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleOpen(index)}
          >
            <section>
              {faq.question}

              <p>+</p>
            </section>
          </div>
          <div
            className={`FAQAnswer ${openIndex === index ? "open" : "closed"}`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
