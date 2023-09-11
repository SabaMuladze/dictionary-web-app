import { useState } from 'react'
function ErrorSection({ data, error }) {
    console.log(error);
    // console.log(data);
    return (
        <section className='flex flex-col items-center justify-center'>
            <div className='scale-[290%] mb-11 mt-20'>
                😕
            </div>
            <p className='font-semibold mb-6'>{error.response.data.title}</p>
            <p className='text-[#757575] text-center'>{error.response.data.message}{error.response.data.resolution}</p>

        </section>
    )
}

export default ErrorSection