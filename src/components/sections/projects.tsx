import React from 'react'
import { ProjectItem } from './projectItem'

export const Projects = () => {
    return (
        <>
            <section className="pb-[13vw] proj-main">
                <div className="proj-wrapper">
                    <div className="flex flex-wrap justify-between proj-container">
                        <h2 className='smd:text-[13.551vw] smd:leading-[13.551vw] tblg:text-[8.825vw] tblg:leading-[8vw] font-roboto font-medium text-[7.292vw] leading-[7vw]'>Client <br/>Projects</h2>
                        <p className='smd:text-[10.167vw] font-roboto font-medium text-[4.167vw]'><span className='font-roboto font-medium mr-[0.521vw] tracking-tight'>//</span>03</p>
                    </div>
                    
                    <div className="w-[100%] proj-apps-main">
                        <ProjectItem />
                    </div>
                </div>
            </section>
        </>
    )
}
