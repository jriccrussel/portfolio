import React, { useEffect } from 'react'
import { designApps } from '../../data/data'

export const DesignTools = () => {

    useEffect(() => {
    //   console.log(techApps)
    }, [])    

    return (
        <>
            <section className="pb-[13vw] tech-main" data-color="#111" data-textcolor="#fff">
                <div className="tech-wrapper">
                    <div className="flex flex-wrap justify-between tech-container">
                        <h2 className='tbxxlg:text-[14.583vw] tbxxlg:leading-[13.194vw] font-roboto font-normal text-[7.292vw] leading-[7vw]'>Tools</h2>

                        <p className='tbxxlg:text-[9vw] font-roboto font-normal text-[4.167vw]'><span className='font-roboto font-medium mr-[0.521vw] tracking-tight'>//</span>02</p>
                    </div>

                    <div className="slg:mt-[18.330vw] tbxxlg:mt-[14.602vw] tbxxlg:ml-[0] ml-[8.33vw] mt-[6vw] flex flex-wrap justify-between items-stretch tech-apps-main">
                        {Object.values(designApps).map((design) => {
                            const { id, img, txt, classs }:any = design

                            return (
                                <div 
                                    className={`text-center item ${classs}`}
                                    key={id}
                                >
                                    <img 
                                        className="smd:h-[18vw] smd:w-[20vw] tblg:h-[20vw] tblg:w-[20vw] h-[10.5vw] w-[10.5vw] my-[0] mx-[auto] object-contain"
                                        src={img} 
                                        alt="" 
                                    />
                                    <p 
                                        className='slg:break-words slg:text-[3.7vw] tblg:text-[2.758vw] tblg:mt-[2.35vw] tbxxlg:font-normal tbxxlg:text-[1.367vw] font-roboto font-normal tracking-wide mt-[1.563vw] text-[1.146vw]'
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
