import React from "react";

const WorkTaskCard = ({ text, setTaskEntry, taskEntry, card }) => {

    const handleRemove = () => {
        setTaskEntry(taskEntry.filter(el => el.id !== card.id))
    }

    return (
        <li 
        className="px-4 py-2 border-solid border-2 rounded-lg w-80 md:w-96 border-gray-300 text-gray-600 bg-base-200 flex items-center justify-between gap-1"
        >
            <div className=" max-w-xs first-letter:capitalize">
                {text}
            </div>
            <svg onClick={handleRemove} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-red-600 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </li>
    )
}

export default WorkTaskCard