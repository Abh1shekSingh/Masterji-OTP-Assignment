import { closestCorners, DndContext } from "@dnd-kit/core"
import "./DND.css"
import Column from "../../components/Column"
import { useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"

const DNDCards = () => {

  const [courses, setCourses] = useState([
    {id:1, title:"Interview Prep with JavaScript 2.0", price:"$8999", type:"Course", thumbnail:"image"},
    {id:2, title:"Interview Prep with JavaScript 2.0", price:"$8999", type:"Course", thumbnail:"image"},
    {id:3, title:"Interview Prep with JavaScript 2.0", price:"$8999", type:"Course", thumbnail:"image"},
    {id:4, title:"Interview Prep with JavaScript 2.0", price:"$8999", type:"Course", thumbnail:"image"},
  ])

  const getPosition = (id) => {
    return courses.findIndex((course) => course.id === id);
  }

  const handleDragEnd = (e) => {
    const {active , over} = e;
    
    if(active.id === over.id) return ;

    setCourses((course) => {
      const originalPos = getPosition(active.id);
      const newPos = getPosition(over.id);
      return arrayMove(course, originalPos, newPos)
    })
  }

  return (
    <section className="DND-container">
      <h1>Chai Aur Code</h1>
      <div className="DND-Wrapper">
        <div>
          <h2>Manage Bundles</h2>
          <p>Change orders of the product based on priority</p>
        </div>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <Column courses = {courses} />
        </DndContext>
      </div>
    </section>
  )
}

export default DNDCards