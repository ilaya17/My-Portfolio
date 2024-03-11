import React from 'react';
import './works.css';
import CALCULATOR from '../../assets/calc.jpg';
import SMS from '../../assets/Student Management.jpeg';
import Demo2 from '../../assets/demo-2.jpg';

const data = [
  {
    id: 1,
    image: CALCULATOR,
    title: 'This Is Calculator',
    github: 'https://github.com/ilaya17/day-15',
    launch: 'https://resonant-zabaione-4bdaa3.netlify.app/',
  },
  {
    id: 2,
    image: SMS,
    title: 'Student Details Management',
    github: 'https://github.com/ilaya17/crud-app',
    launch: 'https://rad-gumption-1ec19e.netlify.app/',
  },
  {
    id: 3,
    image: Demo2,
    title: 'Demo',
    github: 'http://github.com',
    launch: 'http://google.com',
  }
]

const works = () => {
  return (
    <section id='works'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className='container works_container'>
        {
          data.map(({ id, image, title, github, launch }) => {
            return (
              <article className='works_item'>
                <div key={id} className='works_item-img'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='works_item-buttons'>
                  <a href={github} className='btn'>Github</a>
                  <a href={launch} target='_blank' className='btn btn-primary'>Launch</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default works