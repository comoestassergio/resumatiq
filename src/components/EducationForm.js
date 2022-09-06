import React, {useState} from "react"
import uniqid from 'uniqid'

const EducationForm = ( { education, setEducation, setIsClicked } ) => {

    const educationData = {
        university: '',
        degree: '',
        startYear: '',
        graduationYear: '',
    }

    const [educationEntry, setEducationEntry] = useState(educationData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setEducationEntry(
            {
                ...educationEntry,
                [name]: value,
                id: uniqid(),
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()){
            setEducation(education.concat(educationEntry))
            setIsClicked(false)
        }
    }

    const formValidator = () => {
        if (
            educationEntry.university.length > 0 &&
            educationEntry.degree.length > 0 &&
            educationEntry.startYear.length > 3 &&
            educationEntry.startYear.length < 5 &&
            educationEntry.graduationYear.length > 3 &&
            educationEntry.graduationYear.length < 5
            )
            {
                return true
            }
            else {
                return false
            }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-80">
            <h2 className="text-lg mb-3 uppercase font-semibold">New Entry</h2>
            <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="University"
                    name="university" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={educationEntry.university} 
                    required
            />
            <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Degree"
                    name="degree" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={educationEntry.degree}  
                    required
            />
            <input 
                    onChange={handleChange} 
                    type="number" 
                    placeholder="Year Started"
                    name="startYear" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={educationEntry.startYear}
                    minLength={4}
                    maxLength={4}  
                    required
            />
            <input 
                    onChange={handleChange} 
                    type="number" 
                    placeholder="Year Graduated"
                    name="graduationYear" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={educationEntry.graduationYear}  
                    minLength={4}
                    maxLength={4}
                    required
            />
            <button type="submit" className="btn w-80">
                Add
            </button>
        </form>
    )
}

export default EducationForm