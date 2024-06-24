import { FaStart, FaStartHalfAlt, FaRegStar } from 'react-icon/fa'
import { FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
        <span>
            { value >= 1 ? <FaStart /> : value >= 0.5 ? <FaStarHalfAlt /> :
            <FaRegStar /> }
        </span>
        <span>
            { value >= 2 ? <FaStart /> : value >= 1.5 ? <FaStarHalfAlt /> :
            <FaRegStar /> }
        </span>
        <span>
            { value >= 3 ? <FaStart /> : value >= 2.5 ? <FaStarHalfAlt /> :
            <FaRegStar /> }
        </span>
        <span>
            { value >= 4 ? <FaStart /> : value >= 3.5 ? <FaStarHalfAlt /> :
            <FaRegStar /> }
        </span>
        <span>
            { value >= 5 ? <FaStart /> : value >= 4.5 ? <FaStarHalfAlt /> :
            <FaRegStar /> }
        </span>
        <span className="rating-text">{ text && text }</span>
    </div>
  )
}

export default Rating
