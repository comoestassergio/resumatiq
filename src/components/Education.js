import React, { useState } from "react"
import EducationForm from "./EducationForm"
import EducationCard from "./EducationCard"

const Education = ( {userData, setUserData, setEducationDone, setPersonalDone} ) => {
    const [isClicked, setIsClicked] = useState(false)
    const [education, setEducation] = useState([])

    const handleClick = () => {
        setIsClicked(true)
    }

    const handleContinue = () => {
        setUserData({
            ...userData,
            education
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
                <EducationForm education={education} setEducation={setEducation} setIsClicked={setIsClicked} />
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-300 gap-2">
            <ul className="flex flex-col gap-2 mb-4">
                {education.map(el => (
                    <EducationCard 
                        key={el.id} 
                        university={el.university} 
                        degree={el.degree} 
                        startYear={el.startYear} 
                        gradYear={el.graduationYear} 
                        education={education} 
                        setEducation={setEducation}
                        card={el}
                    />
                ))}
            </ul>
            <button onClick={handleClick} className="btn w-60">Add education entry</button>
            {education.length > 0 && 
                <button onClick={handleContinue} className="btn btn-primary w-60">Continue</button>
            }
        </div>    
    )
}

export default Education