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
                        className="slg:mt-[18.330vw] tblg:py-[5vw] tblg:mt-[16.787vw] tbxxlg:mt-[16.602vw] py-[0] h-[fit-content] mt-[11vw] relative proj-item-main"
                        data-bgcolor={bg}
                        data-textcolor="#fff"
                    >
                        <div className="project-container">
                            {/* Heading */}
                            <div className="flex flex-wrap z-[1] relative proj-head">
                                <p className="xs:text-[3.590vw] smd:text-[4.673vw] slg:text-[4.073vw] tblg:text-[2.758vw] tbxxlg:text-[1.567vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mb-[4.16vw] text-[1.042vw] font-light relative proj-txt">{heading}</p>
                                <p className="xs:text-[3.590vw] smd:text-[4.673vw] slg:text-[4.073vw] tblg:text-[2.758vw] tbxxlg:text-[1.567vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mb-[4.16vw] text-[1.042vw] font-light relative proj-txt">§ {id}</p>
                            </div>

                            {/* Title */}
                            <h2 className="slg:mt-[8.147vw] slg:leading-[15vw] slg:mt-[5.147vw] tblg:mt-[2vw] tbxxlg:text-[14.583vw] tbxxlg:leading-[13.194vw] font-roboto font-normal leading-[7vw] text-[7.292vw] break-words relative proj-title">{title}</h2>

                            <div className="slg:mt-[11.33vw] tblg:mt-[8.393vw] tbxxlg:mt-[8.33vw] mt-[5vw] relative h-[100%] w-[100%] flex flex-wrap proj-content">
                                <div className="slg:mt-[3.33vw] tblg:w-[100%] tblg:h-[unset] tblg:order-2 order-1 w-[33.33vw] h-[auto] relative prj-wrapper">
                                    <div className="tblg:mt-[3vw] tblg:px-[0] tblg:pt-[2vw] tbxxlg:pl-[1.33vw] tbxxlg:pr-[6.33vw] px-[8.33vw] pt-[8.33vw] pb-[0] prj-details">
                                        
                                        {/* Details */}
                                        <p className="xs:text-[5.103vw] xs:leading-[7.5vw] smd:text-[5.841vw] smd:leading-[8.5vw] slg:text-[6.110vw] tblg:leading-[7.5vw] tblg:text-[5.516vw] tbxxlg:text-[2.225vw] tbxxlg:leading-[3.5vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mb-[2.8vw] text-[1.042vw] font-roboto font-medium tracking-wide prj-content">{details}</p>

                                        {/* Language */}
                                        <p className="xs:text-[4.590vw] xs:mt-[4vw] xs:mb-[1vw] smd:text-[4.673vw] ssm:leading-[7.5vw] slg:mt-[6vw] slg:text-[4.684vw] slg:mb-[5vw] slg:leading-[6.5vw] tblg:text-[2.758vw] tbxxlg:text-[1.758vw] tbxxlg:leading-[3vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mb-[0] text-[1.042vw] font-roboto tracking-wide font-light prj-tech">{language}</p>

                                        {/* Link */}
                                        <a 
                                            className="xs:text-[4.590vw] smd:text-[4.673vw] ssm:leading-[8.5vw] slg:pl-[10vw] slg:text-[4.684vw] tblg:my-[5vw] tblg:text-[3.118vw] tbxxlg:text-[1.758vw] tbxxlg:pl-[9vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] mt-[2.8vw] pl-[8.65vw] text-[0.938vw] inline-block font-roboto tracking-wide relative no-underline prj-link"
                                            href={link} 
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            View site
                                            <span className='ssm:text-[4vw] ssm:top-[21%] slg:right-[-23%] slg:top-[19%] slg:text-[3.9vw] tblg:leading-[100%] tblg:top-[20%] tblg:text-[2.225vw] tbxxlg:right-[-18%] tbxxlg:right-[-18%] tbxxlg:top-[12%] tbxxlg:text-[1.758vw]  pclg:text-[1.325vw] pclg:leading-[1] right-[-15%] absolute text-[1.146vw] leading-[100%] font-roboto tracking-wide'>⟶</span>
                                        </a>

                                        {/* Date */}
                                        <div className="tblg:relative bottom-0 absolute prj-date">
                                            <h3 className="smd:text-[30vw] slg:text-[25vw] slg:mt-[10vw] slg:leading-[16vw] tblg:text-[15vw] tblg:leading-[15vw] text-[14.583vw] leading-[13.194vw] font-normal font-roboto tracking-wide relative">{date}</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="tblg:w-[100%] tblg:h-[115vw] tblg:order-1 tbxxlg:w-[50vw] tbxxlg:h-[78.125vw] order-2 w-[48vw] h-[69.55vw] relative overflow-hidden prj-img">
                                    <img
                                        className="tblg:w-[100%] tblg:hidden top-[-15%] left-0 w-[100%] h-[100%] absolute block object-cover img-src"
                                        src={img}
                                        alt=""
                                    />
                                    <img
                                        className="tblg:w-[100%] tblg:block top-[-15%] left-0 w-[100%] h-[100%] absolute hidden object-cover img-two-src"
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
