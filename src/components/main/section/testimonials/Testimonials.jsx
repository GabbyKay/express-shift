import React from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    name: 'GabbyKay',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: '"Efficient and reliable logistics services. Their shipments always arrive on time, and the team goes above and beyond to ensure smooth operations. Highly recommended!.',
  },
  {
    name: 'Jane Smith',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    comment: 'Outstanding customer service and attention to detail. The logistics team takes care of every aspect, from warehousing to transportation, with utmost professionalism. They have become our trusted logistics partner.',
  },
  {
    name: 'Bob Johnson',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    comment: 'Partnering with this logistics company has been a game-changer for our business. Their seamless supply chain solutions have helped us streamline our operations and reduce costs.',
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      
      <br />
      <br />
      <h2>Client Testimonials</h2>
      <div className={styles.testimonialsList}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <img src={testimonial.photo} alt={testimonial.name} />
            <div className={styles.text}>
            <p className={styles.comment}>{testimonial.comment}</p>
            <p className={styles.name}>{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
