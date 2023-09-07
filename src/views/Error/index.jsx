const url = new URL(window.location.origin);
url.pathname = window.location.pathname;
url.search = '?d1=google_pixel_7'

const Error = () => {
    return (
        <div className="flex w-full h-full bg-gradient-to-b from-blue-950 via-sky-600 to-sky-200">
            <img className='opacity-0 fixed top-0 right-0 w-[400px] lg:opacity-100' src={bubble1} alt="O2 Bubble" />
            <img className='opacity-0 fixed bottom-0 left-0 w-[400px] lg:opacity-100' src={bubble2} alt="O2 Bubble" />
            
            <div className='flex flex-col justify-evenly items-center h-[70%] w-screen mt-20 lg:mt-28'>
                <img className='w-[120px] md:w-[200px] lg:w-[150px]' src={logo} alt="O2" />
                <div className='md:mb-[80px]'>
                    <h2 className='w-full font-OnAir-Light text-center text-white text-[100px] md:text-[175px] lg:text-[140px] leading-[100px] md:leading-[190px] lg:leading-[150px]'>Uh-oh</h2>
                    <h4 className='w-full font-OnAir-Light text-center text-white text-[30px] md:text-[50px] lg:text-[38px] leading-[33px] md:leading-[55px] lg:leading-[50px]'>Looks like something<br/> went wrong</h4>
                </div>
                <p className='w-full font-OnAir-Light text-center text-white text-[15px] md:text-[30px] lg:text-[23px] leading-[16.5pxpx] md:leading-[33px] mt-[0px]  lg:mb-14'>
                    Return to <strong>HOMEPAGE</strong> to choose <br/>
                    a new direction
                </p>

                <div className='fixed lg:static bottom-12 sm:bottom-24 md:bottom-28'>
                    <button 
                    onClick={()=> window.location.href = url}
                    >Reiniciar</button>
                </div>
            </div>
        </div>
    )
}

export default Error