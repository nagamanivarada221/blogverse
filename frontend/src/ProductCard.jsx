const ProductCard = () =>{
    return(
        // small-sm
        // medium-md
        // large-lg
        // padding top-pt
        // py:padding y-axis
        // 
        <div className="border-3 border-black w-[350px] flex flex-col items-center gap-10 py-4 rounded-3xl bg-red-300 border-2">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-2  rounded-full border-pink-800 bg-blue-400 border-dashed"/>
           <div className="flex flex-col gap-5 items-center">
            <h2 className="font-bold text-lg text-blue-500 text-center"> product1</h2>
            <p className="text-xl text-gray-700 text-center">this is a sample product</p>
            <p className="text-2xl font-bold text-green-800">$2.99</p>
            </div>
            <button className="bg-green-900 font-bold w-[50%] py-2 rounded-3xl cursor-pointer hover:bg-green-600">add to cart</button>
        </div>
    )

}
export default ProductCard