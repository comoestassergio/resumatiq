import React, { useState } from "react";
import uniqid from 'uniqid'
import WorkTaskCard from "./WorkTaskCard";

const Tasks = ({ isClicked, setIsClicked, setWorkEntry, workEntry, workExperience, setWorkExperience }) => {

    const initialTasks = []

    const [taskEntry, setTaskEntry] = useState(initialTasks)
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskEntry(taskEntry.concat({
            task: input,
            id: uniqid(),
        }))
        setInput('')
    }

    const handleContinue = (e) => {
        e.preventDefault()
        setWorkEntry({
            ...workEntry,
            tasks: taskEntry,
        })
        setWorkExperience(workExperience.concat(workEntry))
        setIsClicked(!isClicked)
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-300 gap-5">
            <ul className="flex flex-col gap-3 max-w-xs md:max-w-lg lg:max-w-xl flex-wrap">
                {taskEntry.map(el => (
                    <WorkTaskCard 
                        key={el.id} 
                        text={el.task} 
                        setTaskEntry={setTaskEntry}
                        taskEntry={taskEntry}
                        card={el} 
                    />
                ))}
            </ul>
            <form className="flex gap-2">
                <input
                    onSubmit={handleAddTask}
                    onChange={handleInput} 
                    type="text" 
                    placeholder="E.g. Solved world hunger" 
                    className="input input-bordered w-80 max-w-xs placeholder:italic" 
                    name="skill"
                    value={input}
                    maxLength={100}
                    required
                />
                <button
                    type="submit" 
                    className={`btn ${input.length > 0 ? 'btn-primary bg-orange-300 border-orange-300' : 'btn-disabled' }  hover:bg-orange-600 hover:border-orange-600`}
                >
                    Add
                </button>
            </form>
            {taskEntry.length > 0 &&
                <button type="button" onClick={handleContinue} className="btn btn-ghost">Continue</button>
            }
        </div>
    )
}

export default Tasks