import React from 'react'
import pImg1 from "../../assets/img/prj1.png"
import { projects } from '../../data/data'

export const ProjectItem = () => {
    return (
        <>
            {projects.map((item) => { 
                const { id, heading, title, date, details, language, link, img, bg }:any = item

                return (
                    <div 
                        key={id}
                        className="smd:mt-[16vw] tblg:py-[5vw] tblg:mt-[10vw] py-[0] h-[fit-content] mt-[11vw] relative proj-item-main"
                        data-bgcolor={bg}
                        data-textcolor="#111"
                    >
                        <div className="project-container">
                            <div className="flex flex-wrap z-[1] relative proj-head">
                                <p className="xs:text-[3.590vw] ssm:text-[3.398vw] ssm:leading-[3.398vw] smd:text-[3.271vw] tblg:text-[1.918vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mb-[4.16vw] text-[1.042vw] relative proj-txt">{heading}</p>
                                <p className="xs:text-[3.590vw] ssm:text-[3.398vw] ssm:leading-[3.398vw] smd:text-[3.271vw] tblg:text-[1.918vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mb-[4.16vw] text-[1.042vw] relative proj-txt">§ {id}</p>
                            </div>

                            <h2 className="smd:text-[13.551vw] smd:leading-[13.551vw] smd:mt-[6vw] tblg:text-[10vw] tblg:leading-[10vw] tblg:mt-[2vw] leading-[7vw] font-medium text-[7.292vw] relative font-roboto proj-title">{title}</h2>

                            <div className="tblg:mt-[5vw] mt-[5vw] relative h-[100%] w-[100%] flex flex-wrap proj-content">
                                <div className="tblg:w-[100%] tblg:h-[unset] tblg:order-2 order-1 w-[33.33vw] h-[auto] relative prj-wrapper">
                                    <div className="tblg:mt-[3vw] tblg:px-[0] tblg:pt-[2vw] px-[8.33vw] pt-[8.33vw] pb-[0] prj-details">
                                        
                                        <p className="xs:text-[4.103vw] ssm:text-[3.883vw] ssm:leading-[6vw] smd:text-[3.738vw] tblg:text-[2.398vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mb-[2.8vw] text-[1.042vw] font-roboto font-medium tracking-wide prj-content">{details}</p>

                                        <p className="xs:text-[3.590vw] ssm:text-[3.398vw] ssm:leading-[3.398vw] smd:text-[3.271vw] tblg:text-[2.398vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mb-[0] text-[1.042vw] font-roboto tracking-wide font-normal prj-tech">{language}</p>

                                        <a 
                                            className="xs:text-[3.590vw] ssm:text-[3.398vw] ssm:leading-[3.398vw] smd:text-[3.271vw] tblg:my-[5vw] tblg:text-[2.398vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mt-[2.8vw] pl-[8.65vw] text-[0.938vw] inline-block font-roboto tracking-wide relative no-underline prj-link"
                                            href={link} 
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            View site<span className='smd:right-[-26%] smd:leading-[65%] smd:text-[5vw] tblg:leading-[100%] tblg:text-[2.525vw] tblg:right-[-18%] pclg:text-[1.325vw] pclg:leading-[1] right-[-15%] absolute text-[1.146vw] leading-[100%] font-roboto tracking-wide'>→</span>
                                        </a>

                                        <div className="tblg:relative bottom-0 absolute prj-date">
                                            <h3 className="smd:text-[20vw] smd:leading-[16vw] tblg:text-[15vw] tblg:leading-[15vw] text-[14.583vw] leading-[13.194vw] font-semibold tracking-wide relative">{date}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="tblg:w-[100%] tblg:h-[115vw] tblg:order-1 order-2 w-[48vw] h-[69.55vw] relative overflow-hidden prj-img">
                                    <img
                                        className="tblg:w-[100%] tblg:hidden top-[0] left-0 w-[100%] h-[100%] absolute block object-cover img-src"
                                        src={img}
                                        alt=""
                                    />
                                    <img
                                        className="tblg:w-[100%] tblg:block top-[0] left-0 w-[100%] h-[100%] absolute hidden object-cover img-two-src"
                                        src={img}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
