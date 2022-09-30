import React from "react";

const CoursesCard= ({ platform, course, startYear, gradYear, courses, setCourses, card }) => {

    const handleClick = () => {
        setCourses(courses.filter(el => el.id !== card.id ))
    }

    return (
        <li className="flex flex-col md:flex-row text-center md:text-left gap-2 md:gap-0 items-center justify-between w-80 md:w-96 bg-slate-50 dark:bg-transparent dark:border-2 dark:border-gray-500 rounded-lg p-5 card">
            <div>
                <h3 className="text-lg uppercase font-bold dark:text-gray-400">
                    {course}
                </h3>
                <p className="text-sm text-zinc-500 mb-1 capitalize">
                    {platform}
                </p>
                <p className="text-sm text-zinc-600">
                    {startYear} - {gradYear}
                </p>
            </div>
            <button onClick={handleClick} className="btn btn-circle btn-outline mt-3 md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </li>
    )
}

export default CoursesCard