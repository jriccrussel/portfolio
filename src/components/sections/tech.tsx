import React, { useEffect } from 'react'
import { techApps } from '../../data/data'

export const TechTools = () => {

    useEffect(() => {
    //   console.log(techApps)
    }, [])    

    return (
        <>
            <section className="pb-[13vw] tech-main" data-bgcolor="#111" data-textcolor="#fff">
                <div className="tech-wrapper">
                    <div className="flex flex-wrap justify-between tech-container">
                        <h2 className='smd:leading-[13.551vw] tbxxlg:text-[14.583vw] tbxxlg:leading-[13.194vw] font-roboto font-normal text-[7.292vw] leading-[7vw] tech-head' 
                        >Tech <br/>Stack</h2>
                        <p className='tbxxlg:text-[9vw] font-roboto font-normal text-[4.167vw] tech-head'><span className='font-roboto font-medium mr-[0.521vw] tracking-tight'>//</span>01</p>
                    </div>

                    <div className="slg:mt-[18.330vw] tbxxlg:mt-[14.602vw] tbxxlg:ml-[0] ml-[8.33vw] mt-[6vw] flex flex-wrap justify-between items-stretch tech-apps-main">
                        {Object.values(techApps).map((tech) => {
                            const { id, img, txt, classs }:any = tech

                            return (
                                <div 
                                    className={`text-center item ${classs}`}
                                    key={id}
                                >
                                    <img 
                                        className="smd:h-[18vw] smd:w-[20vw] tblg:h-[20vw] tblg:w-[20vw] h-[12.188vw] w-[12.188vw] my-[0] mx-[auto] object-contain"
                                        src={img} 
                                        alt="" 
                                    />
                                    <p 
                                        className='xs:text-[3.6vw] smd:text-[3.4vw] slg:mt-[4vw] slg:text-[3vw] slg:break-words tblg:text-[2.5vw] tblg:mt-[2.35vw] tbxxlg:font-normal tbxxlg:text-[1.88vw] tbxxlg:leading-[3vw] font-roboto font-normal tracking-wide mt-[1.563vw] text-[1.146vw]'
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
