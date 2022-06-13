import React from 'react'

export const TopDetails = () => {
    const yr = new Date()
    const year = yr.getFullYear()
        
    return (
        <>
            <div className="py-[1vw] flex flex-wrap justify-between items-center top-main">
                <p className='text-[0.875vw] tracking-wide'>by Jeffone Audric Russel</p>
                <p className='text-[0.875vw] tracking-wide'>folio</p>
                <p className='text-[0.875vw] tracking-wide'>{year}</p>
            </div>
        </>
    )
}
