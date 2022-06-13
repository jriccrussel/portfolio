import React from 'react'
import proj1 from '../../assets/img/prj1.jpg'
import proj2 from '../../assets/img/prj2.jpg'
import proj3 from '../../assets/img/prj3.jpg'
import proj4 from '../../assets/img/prj4.jpg'
import proj5 from '../../assets/img/prj5.jpg'
import proj6 from '../../assets/img/prj6.jpg'
import proj7 from '../../assets/img/prj7.jpg'
import proj8 from '../../assets/img/prj8.jpg'
import proj9 from '../../assets/img/prj9.jpg'
import proj10 from '../../assets/img/prj10.jpg'
import proj11 from '../../assets/img/prj11.jpg'
import proj12 from '../../assets/img/prj12.jpg'
import proj13 from '../../assets/img/prj13.jpg'
import proj14 from '../../assets/img/prj14.jpg'
import proj15 from '../../assets/img/prj15.jpg'
import proj16 from '../../assets/img/prj16.jpg'
import imgMe from '../../assets/img/hero-image2.jpg'
// import { url } from 'inspector'

export const HeroTri = () => {

    const yr = new Date()
    const year = yr.getFullYear()

    return (
        <section className="tiles tiles--columns-rotated tiles--darker" id="grid" data-bgcolor="#111">
            <div className="tiles__wrap">
                <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid">
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj4})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj8})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj3})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj7})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj5})` }}></div>
                </div>
                <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid">
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj5})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj6})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj1})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj2})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj9})` }}></div>
                </div>
                <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid">
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj9})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj15})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj16})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj14})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj13})` }}></div>
                </div>
                <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid">
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj13})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj10})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${imgMe})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj11})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj12})` }}></div>
                </div>
                <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid">
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj12})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj4})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj3})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj2})` }}></div>
                    <div className="tiles__line-img" style={{ backgroundImage: `url(${proj4})` }}></div>
                </div>
            </div>

            <div className="w-[100%] h-[100vh] flex justify-between flex-wrap herotwo-wrapper">
                <div className="tblg:w-[100%] tblg:h-[100%] w-[50%] left">
                    <div className="w-[100%] h-[100%] flex relative flex-col items-start content-start flex-wrap justify-start herotwo-left">
                        <p className='smd:text-[4.206vw] smd:leading-[5.825vw] smd:mt-[5vw] tblg:text-[2.398vw] tblg:pt-[2.635vw] tbxxlg:mt-[1.125vw] tbxxlg:pt-[0] tbxxlg:text-[1.953vw] pcsm:pt-[2.635vw] text-[1.250vw] font-roboto font-medium pt-[2.135vw] tracking-wider hero-yr'>{year}</p>
                        <p className='ssm:text-[12.525vw] ssm:leading-[13vw] smd:text-[11.525vw] smd:mt-[3vw] smd:leading-[12vw] tbmd:text-[10vw] tbmd:leading-[9.5vw] tblg:leading-[9vw] tblg:text-[9vw] tbxxlg:text-[5vw] tbxxlg:leading-[5vw] mt-[0.875vw] mb-[1vw] font-roboto font-bold leading-[3vw] text-[2.813vw] hero-name'>Jeffone Audric <br/>Russel.</p>
                        <div className="ssm:w-[60vw] ssm:h-[60vw] smd:w-[55vw] smd:h-[55vw] smd:mt-[3vw] tbmd:w-[35vw] tbmd:h-[35vw] tblg:w-[30vw] tblg:h-[30vw] tbxxlg:w-[20vw] tbxxlg:h-[20vw] w-[15vw] h-[15vw] relative herotri-badge">
                            <div className="top-[8%] left-[8%] right-[8%] bottom-[8%] absolute herotri-badge-text"></div>
                        </div>                                
                        <div className="smd:bottom-[11vw] tblg:bottom-[5.5vw] tbxxlg:bottom-[3.5vw] pcsm:bottom-[3vw] pclg::bottom-[0.15vw] bottom-[3.05vw] absolute hero-absolute">
                            <p className='smd:text-[4.206vw] smd:leading-[5.825vw] tblg:text-[2.125vw] tblg:leading-[3vw] tbxxlg:text-[1.758vw] tbxxlg:leading-[2.325vw] pcsm:text-[1.250vw] pcsm:leading-[1.757vw] leading-[1.563vw] text-[1.042vw] tracking-wide font-roboto hero-details'>I make creative, impactful <br/>
                            web products that give meaningful<br/>
                            stories and big ideas as a way to<br/>
                            connect with audiences.</p>
                            <p className='smd:text-[4.673vw] smd:mt-[5vw] smd:leading-[100%] tblg:mt-[5vw] tblg:text-[2.398vw] tbxlg:mt-[4vw] tbxxlg:text-[1.953vw] tbxxlg:mt-[2.25vw] pcsm:mt-[4vw] pclg:mt-[4.775vw] mt-[7.125vw] font-bold font-roboto leading-[1.458vw] text-[1.250vw] tracking-wider hero-pos'>FRONT END ENGINEER</p>                                    
                        </div>
                    </div>
                </div>
                <div className="tblg:w-[100%] w-[50%] right"></div>
            </div>
        </section>
    )
}
