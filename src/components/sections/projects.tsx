import React from 'react'
import { ProjectItem } from './projectItem'

export const Projects = () => {
    return (
        <>
            <section className="pb-[13vw] proj-main">
                <div className="proj-wrapper">
                    <div className="flex flex-wrap justify-between proj-container">
                        <h2 className='tbxxlg:text-[14.583vw] tbxxlg:leading-[15vw] font-roboto font-normal text-[7.292vw] leading-[7vw]'>Client <br/>Projects</h2>
                        <p className='tbxxlg:text-[9vw] font-roboto font-medium text-[4.167vw]'><span className='font-roboto font-medium mr-[0.521vw] tracking-tight'>//</span>03</p>
                    </div>
                    
                    <div className="w-[100%] proj-apps-main">
                        <ProjectItem />
                    </div>
                </div>
            </section>
        </>
    )
}
