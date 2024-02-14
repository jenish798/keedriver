import Image from "next/image";
import imgFlag1 from "@/assets/pic.webp";


const Service =() =>{

    return(
        <>
       


<h5 className="text-2xl font-bold text-center  my-10" >HIRE DRIVERS</h5>

<div className=" flex ">
    <div className=" flex flex-col pl-9 text-3xl font-semibold text-red-400 my-10">Hire Temporary Drivers at Your Convenience</div>
    
    
    <div>
    {/* <img src="./images/1.webp"width='300' height='400' alt=""/> */}
    <Image src={imgFlag1}width='300' height='400' alt="description of flag" />
    </div>

    </div>
    <p className=" pl-9 text-3x1font-light text--400">We get the garage right to your door.</p>
    <div className="flex justify-center items-center">
    <button className="bg-black items-center hover:bg-gray-800 text-white font-bold py-5 my-5 w-44 rounded">
        Download App
    </button>
    
</div>

<div className="flex flex-col justify-center items-center space-y-10">
    <h2 className="pt-10 font-bold">From Boot to Bumper</h2>
    <p className="font-thin pb-8">Experience the ease of doorstep car servicing with best partners in the industry, discover all your car servicing needs on the DriveU app.</p>
</div>

<div className ="flex flex-col justify-center items-center space-y-10">
    <h2 className="pt-10 font-bold">Services at Your Convenience</h2>
    <p className="font-thin pb-8">Car care and maintenace can be a hefty affair with working weekdays and busy weekends. We have partnered with India’s best car servicing partners to fix your car.</p>
</div>

<div className="flex ml-40 mt-10">
    <div className="flex flex-col basis-1/2">
    <h2 className="py-5 font-bold">Garage Services</h2>
    <p className="py-5 font-medium">For the fixes that require major overhauls or heavy equipments, our partners offer in-garage services from top qualified experts, all this with industry-best offers.</p>
    <ul className="font-thin">
        <li>
        Exciting offers and competitive pricing
        </li>
        <li>
        Qualified service experts
        </li>
        <li>
        Highly rated garages
        </li>
    </ul>
    </div>
    <Image src="/images/Doorstep_Car_Cleaning.webp" alt="doorstep and cleaning" width='400' height='400'/>
    </div>

        </>
    )
}

export default Service