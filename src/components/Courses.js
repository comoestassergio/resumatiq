import React, { useState } from "react"
import CoursesForm from "./CoursesForm"
import CoursesCard from "./CoursesCard"

const Courses = ( {userData, setUserData, setEducationDone, setPersonalDone} ) => {
    const [isClicked, setIsClicked] = useState(false)
    const [courses, setCourses] = useState([])

    const handleClick = () => {
        setIsClicked(true)
    }

    const handleContinue = () => {
        setUserData({
            ...userData,
            courses
        })
        changePage()
    }

    const changePage = () => {
        setEducationDone(true)
        setPersonalDone(false)
    }

    if (isClicked){
        return (
            <div className="flex justify-center items-center min-h-screen bg-base-300">
                <CoursesForm courses={courses} setCourses={setCourses} setIsClicked={setIsClicked} isClicked={isClicked}/>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-300 gap-2">
            <ul className="flex flex-col gap-2 mb-4">
                {courses.map(el => (
                    <CoursesCard 
                        key={el.id} 
                        platform={el.platform} 
                        course={el.course} 
                        startYear={el.startYear} 
                        gradYear={el.graduationYear} 
                        courses={courses} 
                        setCourses={setCourses}
                        card={el}
                    />
                ))}
            </ul>
            <button onClick={handleClick} className="btn w-60">Add courses</button>
            {courses.length > 0 && 
                <button onClick={handleContinue} className="btn btn-primary w-60">Continue</button>
            }
        </div>    
    )
}

export default Courses