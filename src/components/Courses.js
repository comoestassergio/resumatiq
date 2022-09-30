import React, { useState } from "react"
import CoursesForm from "./CoursesForm"
import CoursesCard from "./CoursesCard"

const Courses = ( {userData, setUserData, educationDone, setEducationDone, coursesDone, setCoursesDone} ) => {
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
        setEducationDone(!educationDone)
        setCoursesDone(!coursesDone)
    }

    if (isClicked){
        return (
            <div className="flex justify-center items-center min-h-screen bg-base-300">
                <CoursesForm courses={courses} setCourses={setCourses} setIsClicked={setIsClicked} isClicked={isClicked}/>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-300 gap-2 py-8">
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
            {courses.length < 1 &&
                <button onClick={handleContinue} className="btn btn-ghost w-60">Skip</button>
            }
            {courses.length > 0 && 
                <button onClick={handleContinue} className={`btn w-60 ${userData.education.length > 1 && courses.length > 3 ? 'btn-disabled' : 'btn-primary'}`}>Continue</button>
            }
            {userData.education.length > 1 && courses.length > 3 && 
                <p className="py-1 px-2 max-w-sm text-center border-2 border-red-200 text-red-400 rounded-lg bg-base-100 md:max-w-md">With two education entries you can only add no more than three courses, otherwise they won't fit into final resume</p>
            }
            {userData.education.length > 2 && courses.length > 2 && 
                <p className="py-1 px-2 max-w-sm text-center border-2 border-red-200 text-red-400 rounded-lg bg-base-100 md:max-w-md">With three education entries you can only add no more than two courses, otherwise they won't fit into final resume</p>
            }
            {userData.education.length < 2 && courses.length > 4 && 
                <p className="py-1 px-2 max-w-sm text-center border-2 border-red-200 text-red-400 rounded-lg bg-base-100 md:max-w-md">You can only add no more than four courses, otherwise they won't fit into final resume</p>
            }
        </div>    
    )
}

export default Courses