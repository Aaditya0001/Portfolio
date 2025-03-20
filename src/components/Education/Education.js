import uniqid from 'uniqid'
import { education}  from '../../portfolio'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

      <div className='education__grid'>
        {education.map((edu) => (
          <div key={uniqid()} className='education__card'>
            <h3 className='education__institution'>{edu.institution}</h3>
            <p className='education__degree'>{edu.degree}</p>
            <p className='education__date'>{edu.date}</p>
            <p className='education__gpa'>{edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
