import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__grid'>
        {experience.map((job) => (
          <div key={uniqid()} className='experience__card'>
            <h3 className='experience__company'>{job.company}</h3>
            <p className='experience__date'>{job.date}</p>
            <p className='experience__location'>{job.location}</p>
            <p className='experience__description'>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
