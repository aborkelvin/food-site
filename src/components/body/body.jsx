import egusi from '../../images/egusi.svg'
import vectorimg from '../../images/Vector.svg'
import deliverymanimg from '../../images/deliveryman.png'
import foodlogovector from '../../images/food-logo-vector.png'
import Product from '../products/products'


function Body(props){

    return(
        <div className = ' w-full bg-white pt-20 px-[60px]'>
            <div className="flex gap-5 lg:gap-20 mb-10">
                <section className = 'flex-1 py-10 pl-5'>
                    <h1 className = ' text-6xl '>Enjoy <span className = 'text-[#FF4D00]' >home made meals</span> far away from home</h1>
                    
                    <h2 className = " my-5 text-[#000000CF] text-lg" >Helping you enjoy comfortable and healthy food anywhere and anytime on the go</h2>

                    <button className = 'bg-[#FF4D00] text-white w-[100px] h-[40px] rounded-lg mt-3'>
                        Order now
                    </button>
                </section>
                
                <section className = 'flex-1 '>
                    {/* <img src = {egusi} alt = 'Egusi soup image' className = 'rounded-xl' /> */}
                    <div className = "w-full bg-[url('/src/images/egusi.svg')] h-full rounded-lg bg-no-repeat bg-cover" >
                        
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

            <div className = 'flex flex-col justify-center items-center gap-2 my-[50px]'>
                <h3 className = 'text-[#FF4D00] text-3xl font-semibold'>Why choose us</h3>
                <p className = 'text-[#000000CF] '>This is what makes our product different</p>
            </div>

            <div className = 'h-[500px] bg-[#FFE9E099] w-[90%] mx-auto my-5 flex gap-20 items-center justify-between' >
                <div className = 'h-[400px] bg-white flex-1 flex flex-col justify-center items-center gap-10 px-5'>
                    <img src={vectorimg} alt="vector image" />
                    <div className="">
                        <h4 className = 'text-center mb-5 font-medium text-xl' >Easy to Order</h4>
                        <p className = 'text-center text-[#000000]'>
                            Order food at a single click and select all food to order at any point in time and at ease and comfort
                        </p>
                    </div>
                </div>
                <div className = 'h-[400px] bg-white flex-1 flex flex-col justify-center items-center gap-[20px] px-5'>
                    <img src={deliverymanimg} alt="delivery man image" />
                    <div className="">
                        <h4 className = 'text-center mb-5 font-medium text-xl' >Fast delivery</h4>
                        <p className = 'text-center text-[#000000]'>
                            food delivery fst and reliable and get delivered at deliivery tinme and location any day any time
                        </p>
                    </div>
                </div>
                <div className = 'h-[400px] bg-white flex-1 flex flex-col justify-center items-center gap-[10px] px-5'>
                    <img src={foodlogovector} alt="food logo vector" />
                    <div className="">
                        <h4 className = 'text-center mb-5 font-medium text-xl' >100% Quality</h4>
                        <p className = 'text-center text-[#000000]'>
                        We provide quality food for you and your loved ones for health and so onnnnnn and for wellness
                        </p>
                    </div>
                </div>            
            </div>

            <div className=" text-center my-10">
                <h3 className = 'text-[#FF4D00] text-3xl font-semibold mb-2'>Our daily dishes</h3>
                <p className = 'text-[#000000CF]'>Check out recomended dishes of your choice</p>
            </div>

            <Product />
        </div>
        
    )
}

export default Body