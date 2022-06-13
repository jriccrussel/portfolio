import React from 'react'

export const Loader = () => {    
    return (
        // <div className="a-loader">
        //     <div className="loader-container">
        //     <div className="loader-text">
        //         <div className="paragraph-r">Loading ... Please wait</div>
        //     </div>
        //     <div className="loader-heading">
        //         <div className="heading-xl">
        //         <div className="heading-column">Folioー</div>
        //         <div className="heading-column">
        //             <span className="heading-row">
        //             <i>0</i> <i>2</i> <i>3</i> <i>4</i> <i>5</i> <i>6</i> <i>7</i>
        //             <i>8</i> <i>9</i> <i>&nbsp;</i>
        //             </span>
        //         </div>
        //         <div className="heading-column">
        //             <span className="heading-row">
        //             <i>&nbsp;</i> <i>4</i> <i>5</i> <i>6</i> <i>7</i> <i>8</i>
        //             <i>9</i> <i>0</i> <i>2</i> <i>3</i>
        //             </span>
        //         </div>
        //         </div>
        //     </div>
        //     </div>
        // </div>

        <div className='h-[100vh] w-[100%] flex justify-center items-center fixed z-[999] bg-[#111] load-main'>
            <div className="smd:w-[42vw] smd:h-[42vw] tblg:w-[25vw] tblg:h-[25vw] tbxlg:w-[21vw] tbxlg:h-[21vw] tbxxlg:w-[18vw] tbxxlg:h-[18vw] w-[15vw] h-[15vw] mx-[auto] relative load-badge">
                <div className="top-[8%] left-[8%] right-[8%] bottom-[8%] absolute load-badge-text"></div>
            </div>    
        </div>
    )
}
