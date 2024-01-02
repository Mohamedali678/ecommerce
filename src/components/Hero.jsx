function Hero (){

    return <div  className="h-[400px] pt-20 px-20 flex justify-between ">
        
        <div className="mt-20 w-[580px]">
         <h1 className="font-bold text-5xl">Best Place For Shopping In Your Area </h1>
         <p className="mt-8 text-2xl">We got you everything that you need. Visit us anywhere and anytime</p>
        <button className="bg-primaryColor mt-5 px-10 py-3 text-3xl rounded">Explore More</button>
        </div>
        <img className="rounded-xl mt-16" src="https://img.freepik.com/free-photo/concentrated-young-couple-standing-near-shelves-with-canned-goods_74855-3239.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph" />
    </div>
} 

export default Hero