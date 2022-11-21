import egusi from '../../images/egusi.svg'

function Body(props){

    return(
        <div className = ' w-full bg-white pt-20 px-[60px]'>
            <div className="flex gap-5 lg:gap-20 mb-10">
                <section className = 'flex-1 py-10'>
                    <h1 className = ' text-6xl '>Enjoy <span className = 'text-[#FF4D00]' >home made meals</span> far away from home</h1>
                    
                    <h2 className = " my-5 text-[#000000CF] text-lg" >Helping you enjoy comfortable and healthy food anywhere and anytime on the go</h2>

                    <button className = 'bg-[#FF4D00] text-white w-[100px] h-[40px] rounded-lg mt-3'>
                        Order now
                    </button>
                </section>
                <section className = 'flex-1'>
                    {/* <img src = {egusi} alt = 'Egusi soup image' className = 'rounded-xl' /> */}
                    <div className = "w-full bg-[url('/src/images/egusi.svg')] h-full rounded-lg bg-no-repeat" >
                        
                    </div>
                </section>
            </div>

            <div className = 'flex items-center justify-center gap-[50px] my-[50px]'>
                <div className = 'flex flex-col gap-2 justify-center items-center'>
                    <h3 className = 'font-bold text-4xl'>500+</h3>
                    <p className = 'text-base text-[#959190]' >Food partners</p>
                </div>
                <div className = 'flex flex-col gap-2 justify-center items-center'>
                    <h3 className = 'font-bold text-4xl'>1K+</h3>
                    <p className = 'text-base text-[#959190]'>Orders delivered</p>
                </div>
                <div className = 'flex flex-col gap-2 justify-center items-center'>
                    <h3 className = 'font-bold text-4xl'>12k+</h3>
                    <p className = 'text-base text-[#959190]'>Clients</p>
                </div>
            </div>

            <div className = 'flex flex-col justify-center items-center gap-2 mt-[50px]'>
                <h3 className = 'text-[#FF4D00] text-3xl font-semibold'>Why choose us</h3>
                <p className = 'text-[#000000CF] '>This is what makes our product different</p>
            </div>
        </div>
    )
}

export default Body