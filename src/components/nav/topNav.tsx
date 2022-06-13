import React from 'react'
import { navMenu } from '../../data/data'

export const TopNav = () => {
    return (
        <>
            <div className="tb:block w-[100%] top-0 left-0 fixed hidden hero-main">
                <div className="mt-[3.438vw] relative hero-container">
                    <div className="w-[100%] left-0 top-0 justify-between flex">
                        <div className="relative left">
                            <div className="smd:w-[40vw] smd:h-[40vw] tb:w-[17.5vw] tb:h-[17.5vw] relative hero-badge">
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
                                                className='smd:text-[4.125vw] smd:mb-[2.5vw] tb:text-[1.750vw] tracking-wide block mb-[1vw]'
                                                href={link}
                                                target={target}
                                            >{text}</a>
                                        </li>
                                    )
                                })}
                                <li>
                                    <a 
                                        className='smd:text-[4.125vw] smd:mb-[2.5vw] tb:text-[1.750vw] tracking-wide block mb-[1vw]'
                                        href='#'
                                    >Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
