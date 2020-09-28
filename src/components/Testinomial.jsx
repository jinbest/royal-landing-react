import React from 'react'
import Testi1 from '../img/testimonial/1.jpg'
import Testi2 from '../img/testimonial/2.jpg'
import Testi3 from '../img/testimonial/3.jpg'
import Section from './Section'

const TestinomialItem = ({ testi: { comment, avatar, name, post } }) => {
  return (
    <div className='testi-item'>
      <div className='testi-comment'>
        <p>
          <i className='fas fa-quote-left'></i>
          {comment}
          <i className='fas fa-quote-right'></i>
        </p>

        <ul className='stars list-unstyled'>
          <li>
            <i className='fas fa-star'></i>
          </li>
          <li>
            <i className='fas fa-star'></i>
          </li>
          <li>
            <i className='fas fa-star'></i>
          </li>
          <li>
            <i className='fas fa-star-half-alt'></i>
          </li>
          <li>
            <i className='far fa-star'></i>
          </li>
        </ul>
      </div>

      <div className='client-info'>
        <img src={avatar} alt='testinomial' />
        <h5>{name}</h5>
        <p>{post}</p>
      </div>
    </div>
  )
}

export { TestinomialItem }

export default function Testinomial() {
  const testiItems = [
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: Testi1,
      name: 'Soshiv Upreti',
      post: 'CEO Webshala',
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: Testi2,
      name: 'Pine Apple',
      post: 'CEO Webshala',
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: Testi3,
      name: 'Rakesh Singh',
      post: 'CEO Webshala',
    },
  ]
  return (
    <Section
      title='Testimonial'
      subtitle='Our Satisfied Customer Feedback'
      className='testinomial-section'
      id='testinomial'
    >
      <div className='row'>
        <div className='owl-carousel' id='testinomial-carousel'>
          {testiItems.map((testi, index) => (
            <div className='col-lg-12' key={index}>
              <TestinomialItem testi={testi} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
