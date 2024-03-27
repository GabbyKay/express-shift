import React, { useState } from 'react';
import styles from './FAQPage.module.css';
import Head from '../../header/head/Head';

const FAQPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqData = [
    {
      question: 'What is your shipping process?',
      answer: 'Our shipping process involves careful packaging, efficient transportation, and timely delivery. We work with trusted carriers to ensure your goods reach their destination safely and on time.',
    },
    {
      question: 'How can I track my shipment?',
      answer: 'Once your shipment is processed, we provide you with a unique tracking number. You can use this number to track your shipment through our website or directly with the carrier.',
    },
    {
      question: 'What if my package gets lost or damaged?',
      answer: 'In the rare event of lost or damaged packages, we have comprehensive insurance coverage. Please contact our customer support immediately, and we will assist you in resolving the issue.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping services. Whether you need to ship within the same continent or across oceans, we have the expertise and network to handle your international logistics needs.',
    },
  ];

  return (
    <div>
        {/* <Head/> */}
        <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              expandedIndex === index ? styles.expanded : ''
            }`}
          >
            <div
              className={styles.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <span className={styles.toggleIcon}>
                {expandedIndex === index ? '-' : '+'}
              </span>
            </div>
            {expandedIndex === index && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQPage;
