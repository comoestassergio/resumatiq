import React from "react"

const Hero = ({ setStart, isLocalCV, setTitleDone, titleDone, setUserData }) => {

    const handleNew = () => {
        setStart(true)
    }

    const handleLocal = () => {
        getFromLocalStorage()
        setTitleDone(!titleDone)
    }

    const getFromLocalStorage = () => {
        if (localStorage.getItem('CV') === null){
          localStorage.setItem('CV', JSON.stringify({}))
        } else {
          let localCV = JSON.parse(localStorage.getItem('CV'))
          setUserData(localCV)
        }
      }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Résumé Creator</h1>
                <p className="py-6">Creating résumés made as easy as never before</p>
                {!isLocalCV && 
                    <button onClick={handleNew} className="btn btn-primary">Get Started</button>
                }
                {isLocalCV &&
                    <div className="flex flex-col gap-2">
                        <button onClick={handleLocal} className="btn btn-secondary">Open last created</button>
                        <button onClick={handleNew} className="btn btn-ghost">Create new CV</button>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Hero