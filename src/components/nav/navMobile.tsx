import React from 'react'
import { navMenu } from '../../data/data'

export const NavMobile = () => {
    
    return (
        <section className="tb:block tb:h-[100vw] hidden hero-main">
            <div className="w-[100%] h-[100%] relative hero-container">
                <div className="w-[100%] pt-[3.438vw] left-0 top-0 justify-between flex absolute">
                    <div className="relative left">
                        <div className="smd:w-[33vw] smd:h-[33vw] tb:w-[28vw] tb:h-[28vw] relative hero-badge">
                            <div className="top-[8%] left-[8%] right-[8%] bottom-[8%] absolute hero-badge_text"></div>
                        </div>
                    </div>

                    <div className="right">
                        <ul className='smd:mt-[2.25vw] block text-right'>
                            {navMenu.map((nav) => {
                                const { id, link, text, target } = nav

                                return (
                                    <li key={id}>
                                        <a 
                                            className='smd:text-[3.738vw] smd:mb-[2.5vw] tb:text-[2.5vw] text-[#5f5f5f] tracking-wide block mb-[1vw]'
                                            href={link}
                                            target={target}
                                        >{text}</a>
                                    </li>
                                )
                            })}
                            <li>
                                <a 
                                    className='smd:text-[3.738vw] smd:mb-[2.5vw] tb:text-[2.5vw] text-[#5f5f5f] tracking-wide block mb-[1vw]'
                                    href='#'
                                >Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="ssm:bottom-[8vw] smd:bottom-[-28vw] tbmd:bottom-[-10vw] tb:bottom-[-17vw] left-[0vw] right-[8.33vw] absolute hero-title">
                    {/* <p className='smd:text-[4.673vw] smd:mb-[0.875vw] tb:text-[3vw] tb:tracking-[0.115vw]'>FRONT END ENGINEER</p> */}
                    <h2 className='smd:text-[18.5vw] smd:leading-[18.25vw] smd:mb-[2.5vw] tb:leading-[16vw] tb:text-[18vw] tb:tracking-wide tb:font-righteous tb:text-left'>JEFFONE <br/> AUDRIC <br/> RUSSEL</h2>
                    {/* <p className='smd:hidden tb:block tb:text-[3.500vw] tb:leading-[5vw]'>I make creative, impactful web products that give<br/> meaningful stories and big ideas as a way to <br/>connect with audiences.</p> */}

                    {/* <p className='smd:hidden smd:text-[4.673vw] smd:leading-[6.542vw] tb:text-[3.500vw] tb:block hidden'>I make creative, impactful web <br/>products that give meaningful stories and big ideas as a way to <br/>connect with audiences.</p>  */}
                </div>

            </div>
        </section>
    )
}
