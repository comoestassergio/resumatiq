import React from "react";

const WorkCard = ({ workPlace, position, startYear, finishYear, workExperience, setWorkExperience, card }) => {

    const handleClick = () => {
        setWorkExperience(workExperience.filter(el => el.id !== card.id))
    }

    return (
        <li className="flex flex-row items-center justify-between w-80 bg-slate-50 rounded-lg p-5 card">
            <div>
                <h3 className="text-lg uppercase font-bold">
                    {workPlace}
                </h3>
                <p className="text-sm text-zinc-500 mb-1">
                    {position}
                </p>
                <p className="text-sm text-zinc-600">
                    {startYear} - {finishYear}
                </p>
            </div>
            <button onClick={handleClick} className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </li>
    )
}

export default WorkCard