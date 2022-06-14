import React from 'react'
import { ILink } from '../../types/types'

export const Footer = () => {
    return (
        <section
            className='footer-main'
            data-bgcolor="#111" data-textcolor="#fff"
        >
            <div
                className='smd:mb-[4vw] smd:pb-[3vw] flex flex-wrap justify-between items-center border-b pb-[1.823vw] mb-[2.083vw] footer-top'
            >
                <a 
                    href='https://github.com/jriccrussel'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.590vw] ssm:text-[3.398vw] smd:text-[3.271vw] tblg:w-[33.3333333333%] tblg:text-left tblg:text-[2.398vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] pclg:leading-[1.825vw] font-light text-[1.042vw] no-underline'
                >Github</a>
                <a 
                    href='https://ph.linkedin.com/in/jeffone-audric-russel-826208119'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.590vw] ssm:text-[3.398vw] smd:text-[3.271vw] tblg:w-[33.3333333333%] tblg:text-center tblg:text-[2.398vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] pclg:leading-[1.825vw] font-light text-[1.042vw] no-underline'
                >Linkedin</a>
                <a 
                    href='https://dribbble.com/jriccrussel'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.590vw] ssm:text-[3.398vw] smd:text-[3.271vw] tblg:w-[33.3333333333%] tblg:text-right tblg:text-[2.398vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] pclg:leading-[1.825vw] font-light text-[1.042vw] no-underline'
                >Dribbble</a>
                <a 
                    href='https://www.behance.net/jriccrusse99c1'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.590vw] ssm:text-[3.398vw] smd:text-[3.271vw] smd:mt-[5vw] tblg:w-[33.3333333333%] tblg:mt-[3.5vw] tblg:mb-[2vw] tblg:text-left tblg:text-[2.398vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] pclg:leading-[1.825vw] font-light text-[1.042vw] no-underline'
                >Behance</a>
                <a 
                    href='mailto:jriccrussel@gmail.com'
                    rel='noopener noreferrer'
                    className='xs:text-[3.590vw] ssm:text-[3.398vw] smd:text-[3.271vw] smd:mt-[5vw] tblg:w-[33.3333333333%] tblg:mt-[3.5vw] tblg:mb-[2vw] tblg:text-center tblg:text-[2.398vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] pclg:leading-[1.825vw] font-light text-[1.042vw] no-underline'
                >Email</a>
                <a 
                    href='/resume.pdf'
                    download='Jeffone_Audric_Russel-Resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='xs:text-[3.590vw] ssm:text-[3.398vw] smd:text-[3.271vw] smd:mt-[5vw] tblg:w-[33.3333333333%] tblg:mt-[3.5vw] tblg:mb-[2vw] tblg:text-[2.398vw] tblg:text-right tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] pclg:leading-[1.825vw] font-light text-[1.042vw] no-underline'
                >Resume</a>
            </div>
            <div className='smd:pb-[6vw] tbxxlg:pb-[4vw] pcsm:pb-[3vw] pclg:pb-[3.5vw] flex flex-wrap justify-between items-center pb-[2.865vw] footer-bottom'>
                <p
                    className='xs:text-[3.590vw] xs:leading-[5.25vw] ssm:text-[3.398vw] ssm:leading-[5vw] smd:text-[3.271vw] smd:leading-[4.525vw] tblg:text-[2.398vw] tblg:leading-[3.525vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] pclg:leading-[1.825vw] font-light text-[1.042vw] leading-[1.563vw] tracking-[0.026vw]'
                >// Made with<br/>
                React<br/>
                Typescript<br/>
                Locomotive Scroll<br/>
                GSAP</p>
                <p 
                    className='xs:text-[3.590vw] xs:leading-[5.25vw] ssm:text-[3.398vw] ssm:leading-[5vw] smd:text-[3.271vw] smd:leading-[4.525vw] tblg:text-[2.398vw] tblg:leading-[3.525vw] tbxxlg:text-[1.367vw] pcsm:text-[1.250vw] pclg:text-[1.146vw] pclg:leading-[1.825vw] font-light text-[1.042vw] leading-[1.563vw]'
                >10.3157,<br/> 123.8854</p>
            </div>
        </section>
    )
}
