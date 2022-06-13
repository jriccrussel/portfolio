import React from 'react'
import { Line } from '../elements/line'
import { TopDetails } from '../elements/top'
import { NavTop } from '../nav/nav'
import { NavMobile } from '../nav/navMobile'

export const Hero = () => {
    const yr = new Date()
    const year = yr.getFullYear()
    
    return (
        <div className="smd:h-[100%] tb:h-[100vw] h-[100vh] w-[100%] relative hero-wrapper">
            <section className='tb:hidden tb:h-[100vh] pt-[3.438vw] h-[100vh] top-0 left-0 relative hero-main block'>
                <div className="h-[100%] w-[100%] relative hero-container">
                    {/* <TopDetails />
                    <Line /> */}
                    <div className="w-[100%] left-0 top-0 justify-between flex absolute">
                        <div className="left">
                            <p className='pcsm:w-[4.3vw] pcmd: pclg:w-[4vw] pclg:pr-[0.825vw] text-[1.554vw] w-[4vw] break-all tracking-[0.525rem] text-left leading-[1.525vw] border-r pr-[1.223vw] border-[#000]'>{year}</p>
                        </div>

                        <div className="relative right">
                            <div className="w-[12.5vw] h-[12.5vw] hero-badge">
                                <div className="top-[8%] left-[8%] right-[8%] bottom-[8%] absolute hero-badge_text"></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-[25vw] h-[12.5vw] top-[4.16vw] left-[17vw] absolute hero-name">
                        <p className='text-[1vw] w-[100%] opacity-70 top-[50%] tracking-wide translate-y-[-50%] m-0 absolute'>Jeffone Audric Russel <br /> Front End Developer</p>  
                    </div> */}
                    <div className="pcsm:bottom-[22vw] pcmd:bottom-[16vw] left-[6.406vw] right-[8.33vw] bottom-[12vw] absolute hero-title">
                        {/* <p className='text-[1.458vw] tracking-[0.115vw]'>FRONT END ENGINEER</p> */}
                        <h2 className='pcsm:text-[13vw] pcsm:leading-[12vw] pcmd:text-[13vw] pcmd:leading-[11.5vw] leading-[9.115vw] text-[9.825vw] tracking-wide font-righteous text-left mb-[1vw]'>JEFFONE <br/> AUDRIC <br/> RUSSEL<br/></h2>
                        <p className='text-[1.719vw] leading-[2.083vw]'>I make creative, impactful web products that give meaningful<br/> stories and big ideas as a way to connect with audiences.</p>
                    </div>

                    <NavTop />
                </div>
            </section>    
            
            <NavMobile />

            {/* <div className="top-[0] right-0 z-[-1] w-[100%] absolute hero-img">
                <img 
                    className='w-[53%] h-[100vh] ml-[auto] object-cover'
                    src={img.src} 
                    alt="" 
                />
            </div> */}
        </div>
    )
}
