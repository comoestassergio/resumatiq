import React from "react";

const InterestCard = ({ text, setInterestEntry, interestEntry, card }) => {

    const handleRemove = () => {
        setInterestEntry(interestEntry.filter(el => el.id !== card.id))
    }

    return (
        <li 
        className="px-4 py-2 border-solid border-2 rounded-lg border-teal-300 text-teal-600 flex flex-col items-center justify-center gap-1 capitalize"
        >
            {text}
            <svg onClick={handleRemove} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:text-red-400 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </li>
    )
}

export default InterestCard