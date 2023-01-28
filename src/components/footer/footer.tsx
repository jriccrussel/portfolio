import React from 'react'
import { ILink } from '../../types/types'

export const Footer = () => {
    return (
        <section
            className='footer-main'
            data-bgcolor="#111" data-textcolor="#fff"
        >
            <div
                className='slg:mb-[5vw] slg:pb-[3vw] flex flex-wrap justify-between items-center border-b pb-[1.823vw] mb-[2.083vw] footer-top'
            >
                <a 
                    href='https://github.com/jriccrussel'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.6vw] smd:text-[3.4vw] slg:text-[3vw] slg:mt-[5vw] tblg:w-[33.3333333333%] tblg:text-left tblg:text-[2vw] tbxxlg:text-[1.6vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] leading-[1.6] font-light text-[1.042vw] no-underline'
                >Github</a>
                <a 
                    href='https://ph.linkedin.com/in/jeffone-audric-russel-826208119'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.6vw] smd:text-[3.4vw] slg:text-[3vw] slg:mt-[5vw] tblg:w-[33.3333333333%] tblg:text-center tblg:text-[2vw] tbxxlg:text-[1.6vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] leading-[1.6] font-light text-[1.042vw] no-underline'
                >Linkedin</a>
                <a 
                    href='https://dribbble.com/jriccrussel'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.6vw] smd:text-[3.4vw] slg:text-[3vw] slg:mt-[5vw] tblg:w-[33.3333333333%] tblg:text-right tblg:text-[2vw] tbxxlg:text-[1.6vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] leading-[1.6] font-light text-[1.042vw] no-underline'
                >Dribbble</a>
                <a 
                    href='https://www.behance.net/jriccrusse99c1'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.6vw] smd:text-[3.4vw] smd:mb-[3vw] slg:text-[3vw] slg:mt-[5vw] slg:mb-[5vw] smd:mt-[5vw] tblg:w-[33.3333333333%] tblg:mt-[2.5vw] tblg:mb-[1vw] tblg:text-left tblg:text-[2vw] tbxxlg:text-[1.6vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] leading-[1.6] font-light text-[1.042vw] no-underline'
                >Behance</a>
                <a 
                    href='mailto:jriccrussel@gmail.com'
                    rel='noopener noreferrer'
                    className='xs:text-[3.6vw] smd:text-[3.4vw] smd:mb-[3vw] slg:text-[3vw] slg:mt-[5vw] slg:mb-[5vw] smd:mt-[5vw] tblg:w-[33.3333333333%] tblg:mt-[2.5vw] tblg:mb-[1vw] tblg:text-center tblg:text-[2vw] tbxxlg:text-[1.6vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] leading-[1.6] font-light text-[1.042vw] no-underline'
                >Email</a>
                <a 
                    href='../../assets/doc/resume.pdf'
                    download='RESUME-Jeffone_Audric_Russel.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.6vw] smd:text-[3.4vw] smd:mb-[3vw] slg:text-[3vw] slg:mt-[5vw] slg:mb-[5vw] smd:mt-[5vw] tblg:w-[33.3333333333%] tblg:mt-[2.5vw] tblg:mb-[1vw] tblg:text-[2vw] tblg:text-right tbxxlg:text-[1.6vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] leading-[1.6] font-light text-[1.042vw] no-underline'
                >Resume</a>
            </div>
            <div className='slg:pb-[6vw] slg:mb-[5vw] tbxxlg:pb-[4vw] pcsm:pb-[3vw] pclg:pb-[3.5vw] flex flex-wrap justify-between items-center pb-[2.865vw] footer-bottom'>
                <p
                    className='xs:text-[3.6vw] smd:text-[3.4vw] slg:text-[3vw] slg:leading-[5.5vw] tblg:text-[2vw] tblg:leading-[4.5vw] tbxxlg:text-[1.6vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] leading-[1.6] font-light text-[1.042vw] tracking-[0.026vw]'
                >// Made with<br/>
                React<br/>
                Typescript<br/>
                Locomotive Scroll<br/>
                GSAP</p>
                <p 
                    className='xs:text-[3.6vw] smd:text-[3.4vw] slg:text-[3vw] slg:leading-[5.5vw] tblg:text-[2vw] tblg:leading-[4.5vw] tbxxlg:text-[1.6vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] leading-[1.6] font-light text-[1.042vw] text-right'
                >10.3157,<br/> 123.8854</p>
            </div>
        </section>
    )
}
