/* eslint-disable react/prop-types */
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable"
import EachCourse from "./EachCourse"

const Column = ({courses}) => {
  return (
    <div>
        <SortableContext items = {courses} strategy={verticalListSortingStrategy}>
            {
                courses.map((course) => (
                    <EachCourse id = {course.id} key={course.id} title = {course.title}  thumbnail={course.thumbnail} price = {course.price} type = {course.type} />
                ))
            }
        </SortableContext>
    </div>
  )
}

export default Column