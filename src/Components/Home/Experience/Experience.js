import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const faq = [
  {
    question: "Build A Simple Cryptocurrency Blockchain In",
    answer:
      "But must explain to you how this mistaken idea denouncing pleasure and praising pain",
  },
  {
    question: "Design Mobile Apps For One-Hand",
    answer:
      "But must explain to you how this mistaken idea denouncing pleasure and praising pain",
  },
  {
    question: "People Hate Your Brand Mascot",
    answer:
      "But must explain to you how this mistaken idea denouncing pleasure and praising pain",
  },
  {
    question: "Spotlight On Our SmashingConf Speakers",
    answer:
      "But must explain to you how this mistaken idea denouncing pleasure and praising pain",
  },
  {
    question: "Build A Simple Cryptocurrency Blockchain In",
    answer:
      "But must explain to you how this mistaken idea denouncing pleasure and praising pain",
  },
];

const Experience = () => {
    return (
      <section className="experience mt-5 mb-5 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="heading-text">
                <h5 style={{ color: "#ED1C24" }}>Why Choose Us</h5>
                <h1
                  className="mobile-font-size"
                  style={{
                    fontSize: "3rem",
                    color: "rgb(11, 33, 84)",
                    marginBottom: "2rem",
                  }}
                >
                  We’re More Experience Car Servicing
                </h1>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born will give
                </p>
                <button className="btn-style">Need Any Questions</button>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="accordian">
                <Accordion allowZeroExpanded>
                  {faq.map((item) => (
                    <AccordionItem key={item.id}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {item.question}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>{item.answer}</AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Experience;