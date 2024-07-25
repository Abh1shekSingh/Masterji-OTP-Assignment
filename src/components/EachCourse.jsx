import "../pages/Course-List/DND.css"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
const EachCourse = ({id, title}) => {

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='courseDetails'>
        <div>
            {title}
        </div>
    </div>
  )
}

export default EachCourse