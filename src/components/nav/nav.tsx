import React from 'react'
import { navMenu } from '../../data/data'

export const NavTop = () => {
    return (
        <>
            <div className="pcsm:bottom-[3.5vw] bottom-[2.5vw] left-0 w-[100%] flex justify-between absolute hero-nav">
                <div className="flex items-center">
                    <p className='text-[1.354vw] tracking-[0.225rem] leading-[1.525vw] border-r pr-[1.823vw] border-[#000]'>CB<br/>PH</p>
                    <p className='text-[0.938vw] tracking-wide leading-[1.302vw] pl-[1.823vw]'>Turning designs into beautiful<br/> 
    digital experiences</p>
                </div>
                <div className="flex mt-[0.781vw]">
                    <a 
                        className='text-[0.938vw] tracking-wide mr-[2.656vw]'
                        href='#'
                    >Github</a>
                    {navMenu.map((nav) => {
                        const { id, link, text, target } = nav

                        return (
                            <div key={id}>
                                <a 
                                    className='text-[0.938vw] tracking-wide mr-[2.656vw]'
                                    href={link}
                                    target={target}
                                >{text}</a>
                            </div>
                        )
                    })}
                    <a 
                        className='text-[0.938vw] tracking-wide'
                        href='#'
                    >Resume</a>
                </div>
            </div>
        </>
    )
}
