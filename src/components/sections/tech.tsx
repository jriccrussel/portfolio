import React, { useEffect } from 'react'
import { techApps } from '../../data/data'

export const TechTools = () => {

    useEffect(() => {
    //   console.log(techApps)
    }, [])    

    return (
        <>
            <section className="pb-[13vw] tech-main" data-bgcolor="#f3f3f1" data-textcolor="#111">
                <div className="tech-wrapper">
                    <div className="flex flex-wrap justify-between tech-container">
                        <h2 className='smd:text-[13.551vw] smd:leading-[13.551vw] tblg:text-[8.825vw] tblg:leading-[8vw] font-roboto font-medium text-[7.292vw] leading-[7vw] tech-head' 
                        >Tech <br/>Stack</h2>
                        <p className='smd:text-[10.167vw] font-roboto font-medium text-[4.167vw] tech-head'><span className='font-roboto font-medium mr-[0.521vw] tracking-tight'>//</span>01</p>
                    </div>

                    <div className="tbxxlg:ml-[0] ml-[8.33vw] mt-[6vw] flex flex-wrap justify-between items-stretch tech-apps-main">
                        {Object.values(techApps).map((tech) => {
                            const { id, img, txt, classs }:any = tech

                            return (
                                <div 
                                    className={`text-center item ${classs}`}
                                    key={id}
                                >
                                    <img 
                                        className="smd:h-[18vw] smd:w-[18vw] tblg:h-[20vw] tblg:w-[20vw] h-[12.188vw] w-[12.188vw] my-[0] mx-[auto] object-contain"
                                        src={img} 
                                        alt="" 
                                    />
                                    <p 
                                        className='smd:text-[3.271vw] tbmd:text-[2vw] tblg:text-[1.918vw] tblg:mt-[2.35vw] tbxxlg:font-normal tbxxlg:text-[1.367vw] font-roboto font-normal tracking-wide mt-[1.563vw] text-[1.146vw]'
                                    >{txt}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
