import React from 'react'
import './works.css'
import CALCULATOR from '../../assets/calc.jpg'
import Demo1 from '../../assets/demo-1.jpg'
import Demo2 from '../../assets/demo-2.jpg'
import Demo3 from '../../assets/demo-3.jpg'
import Demo4 from '../../assets/demo-4.jpg'

const data = [
  {
    id: 1,
    image: CALCULATOR,
    title: 'This Is Calculator',
    github: 'http://github.com',
    launch: 'http://google.com',
  },
  {
    id: 2,
    image: Demo1,
    title: 'Demo',
    github: 'http://github.com',
    launch: 'http://google.com',
  },
{
    id: 3,
    image: Demo2,
    title: 'Demo',
    github: 'http://github.com',
    launch: 'http://google.com',
  },
  {
    id: 4,
    image: Demo3,
    title: 'Demo',
    github: 'http://github.com',
    launch: 'http://google.com',
  },
  {
    id: 5,
    image: Demo4,
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
          data.map(({id, image, title, github, launch}) =>{
            return(
              <article className='works_item'>
              <div key= {id} className='works_item-img'>
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