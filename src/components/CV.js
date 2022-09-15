import React from "react";

const CV = (props) => {
    const data = {
        ...props.userData
    }

    return (
        <div className="min-h-screen bg-base-100 py-5 px-7 lg:max-w-5xl lg:mx-auto">
            <div className="flex flex-col gap-2 mb-4 relative after:absolute after:w-full after:bg-gray-400 after:h-0.5 after:bottom-0">
                <h1 className="text-5xl capitalize"><span className="text-gray-700">{data.firstName}</span> <span className="font-bold">{data.lastName}</span></h1>
                <h3 className="text-lg uppercase text-gray-600">{data.title}</h3>
            </div>
            <div className="flex flex-row gap-3 flex-wrap">
                <p className="flex flex-row gap-2 items-center capitalize">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {data.address}
                </p>
                <p className="flex flex-row gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    {data.email}
                </p>
                <p className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                    {data.number}
                </p>
                {data.telegram !== '' ?
                    <p className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
                                <path d="M18 8L5 12.5L9.5 14M18 8l-8.5 6M18 8l-4 10.5L9.5 14"/>
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"/>
                            </g>
                        </svg>
                    {data.telegram}
                    </p>
                    : <></> 
                }
                {data.linkedin !== '' ? 
                    <p className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z" clipRule="evenodd"/>
                        </svg>
                    {data.linkedin}
                    </p>
                    : <></>
                }
                {data.github !== '' ? 
                    <p className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clipRule="evenodd"/>
                        </svg>
                    {data.github}
                    </p>
                    : <></>
                }
                {data.twitter !== '' ?
                    <p className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"/>
                        </svg>
                    {data.twitter}
                    </p>
                    : <></>
                }
            </div>
            <div className="grid grid-cols-2 mt-8 gap-x-10 gap-y-8">
                <section className={`flex flex-col gap-2 col-span-2 md:col-span-1 ${data.workExperience.length > 1 ? 'row-span-1' : 'row-span-1'} print:col-span-1`}>
                    <h2 className="text-2xl font-bold uppercase mb-1">Experience</h2>

                    {data.workExperience.map(el => (
                        <div key={el.id} className="flex flex-col gap-1 border-2 border-solid border-gray-300 rounded-lg p-5 print:p-4">
                            <p className="text-xl uppercase text-gray-600 print:text-lg">{el.position}</p>
                            <p className="text-lg font-bold capitalize print:text-sm">{el.workPlace}</p>
                            <p className="flex gap-2 text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                {el.startYear} - {el.finishYear}
                            </p>
                            {el.tasks.length > 0 &&
                                <ul className="list-disc ml-5 mt-2">
                                    {el.tasks.map(item => (
                                        <li key={item.id}>{item.task}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                    ))}
                </section>
                <section className="col-span-2 md:col-span-1 print:col-span-1">
                    <h2 className="text-2xl font-bold uppercase mb-1">Skills</h2>
                    <ul className="flex flex-row gap-3 mt-3 flex-wrap">
                        {data.skills.map(el => (
                            <li key={el.id} className="border-2 border-gray-300 capitalize px-5 py-2 rounded-lg print:px-2 print:py-0.5 print:text-sm">{el.skill}</li>
                        ))}
                    </ul>
                </section>
                <section className="flex flex-col gap-2 col-span-2 md:col-span-1 print:col-span-1">
                    <h2 className="text-2xl font-bold uppercase mb-1">Education</h2>
                    {data.education.map(el => (
                        <div key={el.id} className="flex flex-col gap-1 border-2 border-gray-300 rounded-lg p-5 print:p-4">
                            <p className="text-xl uppercase text-gray-600 print:text-lg">{el.degree}</p>
                            <p className="text-lg capitalize font-bold print:text-sm">{el.university}</p>
                            <p className="flex gap-2 text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                {el.startYear} - {el.graduationYear}
                            </p>
                        </div>
                    ))}
                </section>
                {data.interests.length > 0 &&
                    <section className=" col-start-1 row-start-2 col-span-2 md:col-span-1 print:col-span-1 ">
                         <h2 className="text-2xl font-bold uppercase mb-4">Interests</h2>
                         <ul className="flex gap-3 flex-wrap">
                            {data.interests.map(el => (
                                <li key={el.id} className='border-2 border-gray-300 capitalize px-5 py-2 rounded-lg print:px-2 print:py-0.5 print:text-sm'>{el.interest}</li>
                            ))}
                         </ul>
                    </section>
                }
            </div>
        </div>
    )
}

export default CV