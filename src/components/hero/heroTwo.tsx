import React, { useEffect } from 'react'
import imgRight from '../../assets/img/hero-image2.png'

export const HeroTwo = () => {
    const yr = new Date()
    const year = yr.getFullYear()

    useEffect(() => {
    }, [])    

    return (
        <>
            <section className="w-[100%] h-[100%] herotwo-main">
                <div className="w-[100%] h-[100%] flex justify-between flex-wrap herotwo-wrapper">
                    <div className="tblg:w-[100%] w-[50%] left">
                        {/* PC */}
                        <div className="tblg:hidden w-[100%] h-[100%] flex relative flex-col items-start content-start flex-wrap justify-start herotwo-left">
                            <p className='tbxxlg:text-[1.367vw] pcsm:pt-[2.635vw] text-[1.250vw] font-roboto font-medium pt-[2.135vw] tracking-wider hero-yr'>{year}</p>
                            <p className='mt-[0.875vw] mb-[1vw] font-roboto font-bold leading-[3vw] text-[2.813vw] hero-name'>Jeffone Audric <br/>Russel.</p>
                            <div className="w-[12.5vw] h-[12.5vw] relative herotwo-badge">
                                <div className="top-[8%] left-[8%] right-[8%] bottom-[8%] absolute herotwo-badge-text"></div>
                            </div>                                
                            <div className="pcsm:bottom-[0.175vw] pclg::bottom-[0.15vw] bottom-[0.05vw] absolute hero-absolute">
                                <p className='tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pcsm:leading-[1.757vw] leading-[1.563vw] text-[1.042vw] tracking-wide font-roboto hero-details'>I make creative, impactful <br/>
                                web products that give meaningful<br/>
                                stories and big ideas as a way to<br/>
                                connect with audiences.</p>
                                <p className='tbxxlg:text-[1.367vw] pcsm:mt-[4vw] pclg::mt-[4.775vw] mt-[7.125vw] font-bold font-roboto leading-[1.458vw] text-[1.250vw] tracking-wider hero-pos'>FRONT END ENGINEER</p>                                    
                            </div>
                        </div>
                        {/* Tablet & Mobile */}
                        <div className="tblg:flex tblg:mb-[0vw] w-[100%] h-[100%] hidden relative items-start content-start flex-wrap justify-between herotwo-left">
                            <div className="tblg:w-[50%] herotwo-wrap-left">
                                <p className='ssm:text-[4.854vw] smd:text-[4.673vw] smd:leading-[5.5vw] tblg:mt-[4.916vw] tblg:mb-[1vw] font-roboto font-bold tblg:leading-[4.556vw] tblg:text-[4.197vw] hero-name'>Jeffone Audric <br/>Russel.</p>
                                <p className='xs:text-[3.590vw] ssm:text-[3.398vw] smd:text-[3.271vw] smd:leading-[3.271vw] tblg:mt-[2vw] tblg:text-[2.398vw] tblg:leading-[1.458vw] font-bold font-roboto tracking-wider hero-pos'>FRONT END ENGINEER</p>        
                            </div>
                            <div className="tblg:w-[50%] tblg:text-right herotwo-wrap-right">
                                <div className="smd:h-[22vw] smd:w-[22vw] tblg:ml-[auto] tblg:w-[18vw] tblg:h-[18vw] tblg:mt-[2.635vw] tblg:relative herotwo-badge">
                                    <div className="tblg:top-[8%] tblg:left-[8%] tblg:right-[8%] bottom-[8%] tblg:tblg:absolute herotwo-badge-text"></div>
                                </div>  
                            </div>  
                        </div>
                    </div>
                    <div className="tblg:w-[100%] w-[50%] right">
                        <div className="herotwo-right">
                            <img  
                                className='xs:h-[172vw] ssm:h-[179vw] smd:h-[172vw] smd:pt-[1.125vw] tbmd:h-[105vw] tblg:h-[96.825vw] tbxlg:h-[59.072vw] tbxxlg:h-[67.072vw] pcsm:h-[49.072vw] pcsm:pt-[1.757vw] pcmd:h-[54vw] pclg::h-[47.703vw] pclg::pt-[2.083vw] pt-[2.135vw] h-[46.052vw] w-[100%] object-cover'
                                src={imgRight} 
                                alt="" 
                            />
                            <div className="smd:pt-[4vw] tblg:pt-[2.638vw] pcsm:pt-[1.098vw] pclg::pt-[1vw] pt-[1.25vw] flex flex-wrap items-end justify-between herotwo-r-wrapper">
                                <h3 className='smd:text-[13.551vw] tblg:text-[10.791vw] tblg:leading-[10.791vw]  pcsm:text-[4.758vw] pcsm:leading-[4.758vw] pclg::text-[5.859vw] pclg:leading-[5.859vw] text-[7.292vw] leading-[7.292vw] font-bold font-roboto'>Folio.</h3>
                                <p className='xs:text-[3.590vw] ssm:text-[3.398vw] smd:text-[3.271vw] tblg:text-[2.398vw] pcsm:text-[1.171vw] text-[1.042vw] font-roboto herotwo-scroll'>Scroll</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
