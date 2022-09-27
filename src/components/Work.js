import React, { useState } from "react";
import WorkForm from "./WorkForm";
import WorkCard from "./WorkCard";

const Work = ({ userData, setUserData, setWorkDone, setEducationDone }) => {
    
    const [isClicked, setIsClicked] = useState(false)
    const [workExperience, setWorkExperience] = useState([])

    const handleClick = () => {
        setIsClicked(true)
    }

    const handleContinue = () => {
        setUserData({
            ...userData,
            workExperience
        })
        changePage()
    }

    const changePage = () => {
        setEducationDone(false)
        setWorkDone(true)
    }

    if (isClicked) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-base-300">
                <WorkForm workExperience={workExperience} setWorkExperience={setWorkExperience} setIsClicked={setIsClicked} isClicked={isClicked}/>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-12 bg-base-300 gap-2">
            <ul className="flex flex-col md:flex-row gap-4 mb-4">
                {workExperience.map(el => (
                    <WorkCard
                        key={el.id} 
                        workPlace={el.workPlace}
                        position={el.position}
                        startYear={el.startYear} 
                        finishYear={el.finishYear} 
                        workExperience={workExperience} 
                        setWorkExperience={setWorkExperience}
                        card={el}
                        tasks={el.tasks}
                    />
                ))}
            </ul>
            <button onClick={handleClick} className="btn w-60">Add workplace</button>
            {workExperience.length > 0 && 
                <button onClick={handleContinue} className="btn btn-primary w-60">Continue</button>
            }
        </div>    
    )
}

export default Work