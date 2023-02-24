// Write your code here//
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  //   console.log(courseDetails)

  return (
    <div className="course-container">
      <div className="course-title-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p className="course-item">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
