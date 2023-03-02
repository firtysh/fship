import React from 'react'

function Footer() {
    return (
        <div className='flex bg-gray-800 justify-center flex-col items-center w-full p-4 absolute  bottom-0'>
            {/* footer */}
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-white text-sm'>Made with ❤️ by <a className='text-blue-400' href='https://firtysh.github.io/portfolio/' target='_blank' rel='noreferrer'>Suman Mandal</a></p>
                </div>
            </div>

        </div>
    )
}

export default Footer