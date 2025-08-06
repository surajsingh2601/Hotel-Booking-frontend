import React from 'react';


const Title = ( { title, subTitle, align, font} ) => {
    return(
        <div className={`flex flex-col justify-center items-center text-center  ${align === 'left' && "md:items-start md:text-left"}`}>

            <h1 className={`text-4xl font-playfair md:text-[40px] $ { font || 'font-playfair'}`}> { title} </h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-3 max-w-174 '> { subTitle} </p>

        </div>
    )
}


export default Title