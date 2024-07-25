/* eslint-disable react/prop-types */
import "../pages/Course-List/DND.css"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { MdDragIndicator } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const EachCourse = ({id, title, price, type, thumbnail}) => {

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='courseDetails'>
        <div className="individualCourseDetails">
            <div className="course-title-container">
                <MdDragIndicator />
                <img src={thumbnail} alt="courses-thumbnail" width={100} />
                <h3>{title}</h3>
            </div>
            <div className="course-price-container">
                <p>{price}</p>
                <p className="course-type">{type}</p>
                <CiMenuKebab />
            </div>
        </div>
    </div>
  )
}

export default EachCourse