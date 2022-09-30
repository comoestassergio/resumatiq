import React, {useState} from "react"
import uniqid from 'uniqid'

const CoursesForm = ( { courses, setCourses, setIsClicked, isClicked } ) => {

    const coursesData = {
        platform: '',
        course: '',
        startYear: '',
        graduationYear: '',
    }

    const [courseEntry, setCourseEntry] = useState(coursesData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCourseEntry(
            {
                ...courseEntry,
                [name]: value,
                id: uniqid(),
            }
        )

        checkEmptyInput(name, value, e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()){
            setCourses(courses.concat(courseEntry))
            setIsClicked(false)
        }
    }

    const formValidator = () => {
        if (
            courseEntry.platform.length > 0 &&
            courseEntry.course.length > 0 &&
            courseEntry.startYear.length > 3 &&
            courseEntry.startYear.length < 5 &&
            courseEntry.graduationYear.length > 3 &&
            courseEntry.graduationYear.length < 5
            )
            {
                return true
            }
            else {
                return false
            }
    }

    const handleCancel = () => {
        setIsClicked(!isClicked)
    }

    const checkEmptyInput = (name, value, e) => {
        switch (name) {
            case 'platform':
                value.length < 1 ? e.target.classList.add('input-error') : e.target.classList.remove('input-error')
                break
            case 'course':
                value.length < 1 ? e.target.classList.add('input-error') : e.target.classList.remove('input-error')
                break
            case 'startYear':
                value.length !== 4 ? e.target.classList.add('input-error') : e.target.classList.remove('input-error')
                break
            case 'graduationYear':
                value.length !== 4 ? e.target.classList.add('input-error') : e.target.classList.remove('input-error')
                break
            default: 
                let error = new Error()
                console.log(error)
                break
        }
    } 

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-80">
            <h2 className="text-lg mb-3 uppercase font-semibold">New Course</h2>
            <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Platform"
                    name="platform" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={courseEntry.platform}
                    title={'Cannot be empty'} 
                    required
            />
            <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Course"
                    name="course" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={courseEntry.course}  
                    title={'Cannot be empty'} 
                    required
            />
            <input 
                    onChange={handleChange} 
                    type="number" 
                    placeholder="Year Started"
                    name="startYear" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={courseEntry.startYear}
                    minLength={4}
                    maxLength={4}  
                    title={'Four dgigits long'}
                    required
            />
            <input 
                    onChange={handleChange} 
                    type="number" 
                    placeholder="Year Graduated"
                    name="graduationYear" 
                    className='input input-bordered w-full max-w-md col-span-2' 
                    value={courseEntry.graduationYear}  
                    minLength={4}
                    maxLength={4}
                    title={'Four dgigits long'}
                    required
            />
            <button type="submit" className="btn w-80">
                Add
            </button>
            <button onClick={handleCancel} type="button" className="btn btn-ghost hover:bg-transparent hover:text-red-400 w-80">
                Cancel
            </button>
        </form>
    )
}

export default CoursesForm