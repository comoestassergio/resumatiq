import React, { useState, useRef, useEffect } from "react";
import uniqid from 'uniqid'
import autoAnimate from "@formkit/auto-animate";
import WorkTaskCard from "./WorkTaskCard";

const Tasks = ({ isClicked, setIsClicked, setWorkEntry, workEntry, workExperience, setWorkExperience, setOpenTasks, openTasks }) => {

    const initialTasks = []

    const [taskEntry, setTaskEntry] = useState(initialTasks)
    const [input, setInput] = useState('')

    const ul = useRef(null)
    useEffect(() => {
        ul.current && autoAnimate(ul.current)
    }, [ul])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleAddTask = () => {
        if (input.length > 0) {
            setTaskEntry(() => (taskEntry.concat({task: input, id: uniqid()})))
            setInput('')
        }
    }

    const handleContinue = () => {
        const tempWorkEntry = {
            ...workEntry,
            tasks: taskEntry,
        } 
        setWorkEntry(() => (tempWorkEntry))
        setWorkExperience(() => (workExperience.concat(tempWorkEntry)))
        setIsClicked(!isClicked)
    }

    const preventDefault = (e) => {
        e.preventDefault()
    }

    const handleCancel = () => {
        setOpenTasks(!openTasks)
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-300 gap-5">
            <ul ref={ul} className="flex flex-col gap-3 max-w-xs md:max-w-lg lg:max-w-xl flex-wrap">
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
            <form onSubmit={preventDefault} className="flex flex-col gap-2">
                <input
                    onChange={handleInput} 
                    type="text" 
                    placeholder="E.g. Solved world hunger" 
                    className="input input-bordered w-80 md:w-96 placeholder:italic" 
                    name="task"
                    value={input}
                    maxLength={100}
                    required={taskEntry.length < 1 ? true : false}
                />
                <button
                onClick={handleAddTask}
                type='submit'
                className={`btn w-80 md:w-96 ${input.length > 0 ? 'btn-accent' : 'btn-disabled' }`}
                >
                 Add
                </button>
            </form>
            {taskEntry.length > 0 && taskEntry.length < 5 &&
                <button
                    type="submit" 
                    onClick={handleContinue} 
                    className={`btn ${taskEntry.length > 2 ? 'btn-success' : 'btn-ghost'}`}>
                    Continue
                </button>
            }
            {taskEntry.length > 4 &&
                <button
                    type="submit" 
                    onClick={handleContinue} 
                    className={`btn ${taskEntry.length > 6 ? 'btn-disabled' : 'btn-warning'}`}>
                    {taskEntry.length > 6 ? 'Too many tasks' : 'Continue'}
                </button>
            }
            <button onClick={handleCancel} type="button" className="btn btn-ghost hover:bg-transparent hover:text-red-400">
                Cancel
            </button>
        </div>
    )
}

export default Tasks