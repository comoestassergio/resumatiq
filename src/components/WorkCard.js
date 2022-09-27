import React from "react";

const WorkCard = ({ workPlace, position, startYear, finishYear, workExperience, setWorkExperience, card, tasks }) => {

    const handleClick = () => {
        setWorkExperience(workExperience.filter(el => el.id !== card.id))
    }

    return (
        <li className={`${tasks.length > 0 ? 'flex flex-col gap-2' : 'flex flex-row items-center justify-between' } w-80 sm:w-96 bg-slate-50 dark:bg-transparent dark:border-2 dark:border-primary rounded-lg p-5 card`}>
            <div className={`${tasks.length > 0 ? 'mb-2 text-center' : '' }`}>
                <h3 className="text-lg uppercase text-gray-600 dark:text-secondary">
                    {position}
                </h3>
                <p className="text-md font-bold mb-1">
                    {workPlace}
                </p>
                <p className="text-sm text-zinc-600">
                    {startYear} - {finishYear}
                </p>
            </div>
            {tasks.length > 0 && 
                <ul className="row-span-2 flex flex-col gap-2 text-gray-700 md:flex-grow md:justify-center">
                    {tasks.map(el => (
                        <li key={el.id} className="border-2 border-gray-300 rounded-lg border-dotted p-2 first-letter:capitalize">{el.task}</li>
                    ))}
                </ul>
            }   
            <button onClick={handleClick} className={`btn btn-circle btn-outline ${tasks.length > 0 ? 'mx-auto mt-2' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </li>
    )
}

export default WorkCard