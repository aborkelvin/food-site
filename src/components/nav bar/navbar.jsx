import logo from '../../images/logo.png'
import cartimg from '../../images/cartimg.png'
function Navbar(props){

    return(
        <nav className = "bg-[#FFE9E0] w-full h-[110px] flex items-center justify-around">
            <img src = {logo} alt = 'company logo' />
            <ul className = "list-none sm:text-sm md:text-base lg:text-lg">
                <li className = "inline mx-4">Home</li>
                <li className = "inline mx-4">About Us</li>
                <li className = "inline mx-4">Our products</li>
                <li className = "inline mx-4">Testimonials</li>
                <li className = "inline mx-4">Contact Us</li>
            </ul>
            <button className = "bg-[#FF4D00] sm:text-sm md:text-md lg:text-lg text-white md:w-[130px] h-[35px] rounded-md flex items-center justify-center gap-2"> 
                <img src = {cartimg} />
                Cart
                <div className = "bg-white w-[25px] rounded-[50%] text-black">
                    3
                </div>
            </button>
        </nav>
    )
}

export default Navbar;