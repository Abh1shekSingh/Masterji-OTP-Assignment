import { closestCorners, DndContext } from "@dnd-kit/core"
import "./DND.css"
import Column from "../../components/Column"
import { useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"
import  image1  from "../../assets/js Course.png"
import  image2  from "../../assets/aptitudecourse.png"
import  image3  from "../../assets/SimpleInterest.png"
import  image4  from "../../assets/TImeandwork.png"
import  image5  from "../../assets/js Course.png"

const DNDCards = () => {

  const [courses, setCourses] = useState([
    {id:1, title:"Interview Prep with JavaScript 2.0", price:"$8999", type:"Course", thumbnail:`${image1}`},
    {id:2, title:"Aptitude - Averages, Mixtures & Allegations", price:"Free", type:"Mock Test", thumbnail:`${image2}`},
    {id:3, title:"Aptitude - Simple & Compound Interest", price:"Free", type:"Mock Test", thumbnail:`${image3}`},
    {id:4, title:"Aptitude - Time & Work", price:"Free", type:"Mock Test", thumbnail:`${image4}`},
    {id:5, title:"NextJS Full Stack Development", price:"Free", type:"Mock Test", thumbnail:`${image5}`},
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