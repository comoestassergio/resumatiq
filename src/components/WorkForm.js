import React, {useState} from "react"
import uniqid from 'uniqid'

const WorkForm = ( { workExperience, setWorkExperience, setIsClicked} ) => {

    const workData = {
        workPlace: '',
        position: '',
        startYear: '',
        finishYear: '',
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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()){
            setWorkExperience(workExperience.concat(workEntry))
            setIsClicked(false)
        }
    }

    const formValidator = () => {
        if (
            workEntry.workPlace.length > 0 &&
            workEntry.position.length > 0 &&
            workEntry.startYear.length > 3 &&
            workEntry.startYear.length < 5 &&
            workEntry.finishYear.length > 3 &&
            workEntry.finishYear.length < 5
        ){
                return true
            }
        else if (
            typeof workEntry.finishYear === 'string'
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
                finishYear: 'Now'
            })
        }else {
            setWorkEntry({
                ...workEntry,
                finishYear: ''
            })
        }
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
            
            <button type="submit" className="btn w-80">
                Add
            </button>
        </form>
    )
}

export default WorkForm