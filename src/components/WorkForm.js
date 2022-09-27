import React, {useState} from "react"
import uniqid from 'uniqid'
import Tasks from "./WorkTasks"

const WorkForm = ( { workExperience, setWorkExperience, setIsClicked, isClicked} ) => {

    const workData = {
        workPlace: '',
        position: '',
        startYear: '',
        finishYear: '',
        tasks: [],
    }

    const [workEntry, setWorkEntry] = useState(workData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setWorkEntry(
            {
                ...workEntry,
                [name]: value,
                id: uniqid(),
            }
        )

        checkEmptyInput(name, value, e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()){
            setWorkExperience(workExperience.concat(workEntry))
            setIsClicked(!isClicked)
        }
    }

    const formValidator = () => {
        if (
            workEntry.workPlace.length > 0 &&
            workEntry.position.length > 0 &&
            workEntry.startYear.length === 4 &&
            workEntry.finishYear.length === 4
        ){
            return true
            }
        else if (
            workEntry.finishYear === 'Present'
        ){
            return true
        }
        else {
            return false
        }
    }

    const [isStillWorking, setIsStillWorking] = useState(false)

    const toggleStillWorking = () => {
        setIsStillWorking(!isStillWorking)
        checkIfStillWorking()
    }

    const checkIfStillWorking = () => {
        if (!isStillWorking) {
            setWorkEntry({
                ...workEntry,
                finishYear: 'Present'
            })
        }else {
            setWorkEntry({
                ...workEntry,
                finishYear: ''
            })
        }
    }

    const handleCancel = () => {
        setIsClicked(!isClicked)
    }

    const [openTasks, setOpenTasks] = useState(false)

    const handleOpenTasks = () => {
        if (formValidator()){
            setOpenTasks(!openTasks)
        }
    }

    const checkEmptyInput = (name, value, e) => {
        switch (name) {
            case 'workPlace':
                value.length < 1 ? e.target.classList.add('input-error') : e.target.classList.remove('input-error')
                break
            case 'position':
                value.length < 1 ? e.target.classList.add('input-error') : e.target.classList.remove('input-error')
                break
            case 'startYear':
                value.length !== 4 ? e.target.classList.add('input-error') : e.target.classList.remove('input-error')
                break
            case 'finishYear':
                value.length !== 4 ? e.target.classList.add('input-error') : e.target.classList.remove('input-error')
                break
            default: 
                let error = new Error()
                console.log(error)
                break
        }
    } 

    if (openTasks) {
        return (
            <Tasks
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                setWorkEntry={setWorkEntry}
                workEntry={workEntry}
                workExperience={workExperience}
                setWorkExperience={setWorkExperience}
                setOpenTasks={setOpenTasks}
                openTasks={openTasks}
            />
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-80">
            <h2 className="text-lg mb-3 uppercase font-semibold">New Workplace</h2>
            <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Workplace"
                    name="workPlace" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={workEntry.workPlace} 
                    required
            />
            <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Position"
                    name="position" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={workEntry.position}  
                    required
            />
            <input 
                    onChange={handleChange} 
                    type="number" 
                    placeholder="Year Started"
                    name="startYear" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={workEntry.startYear}
                    minLength={4}
                    maxLength={4}  
                    required
            />
            <div className="flex gap-2">
                <input 
                        onChange={handleChange} 
                        type={isStillWorking? 'text': 'number'} 
                        placeholder="Year Resigned"
                        name="finishYear" 
                        className={`input input-bordered w-full max-w-md col-span-1`} 
                        value={isStillWorking? '' : workEntry.finishYear}  
                        minLength={4}
                        maxLength={4}
                        required={isStillWorking? false : true}
                        disabled={isStillWorking? true : false}
                />
                <button onClick={toggleStillWorking} type="button" className={`btn ${isStillWorking? 'btn-primary' : 'btn-outline' }`}>
                    Still working
                </button>
            </div>

            <button onClick={handleOpenTasks} type="button" className={`btn ${formValidator() ? 'btn-accent' : 'btn-disabled'} w-80`}>+ responsibilities</button>

            <button type="submit" className="btn w-80">
                Add
            </button>
            <button onClick={handleCancel} type="button" className="btn btn-ghost hover:bg-transparent hover:text-red-400 w-80">
                Cancel
            </button>
        </form>
    )
}

export default WorkForm