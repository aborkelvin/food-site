import yamimg from '../../images/yameggsauce.svg'
import addicon from '../../images/addicon.png'

function Product(props){

    return(
        <div className = 'border-[#FF4D00] border-[0.5px] h-[350px] w-[300px] mb-20 py-2 px-2'>
            <img src={yamimg} alt="Yam and egg sauce image" className= "w-[70%] mx-auto" />
            <h3 className = 'text-center font-bold text-2xl text-[#443D3D] my-5 '>Yam and egg sauce</h3>

            <section className = 'flex items-center justify-center gap-5'>
                <h4 className = 'font-medium inline-block text-xl'> N500 </h4>
                <button className='text-white bg-[#FF4D00] w-[100px] h-[35px] rounded-lg text-lg flex items-center justify-center ' >
                    <img src={addicon} alt="Addition icon" />
                    Add
                </button>
            </section>
        </div>
    )
}

export default Product;