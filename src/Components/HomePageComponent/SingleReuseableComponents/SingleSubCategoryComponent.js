import Image from "next/image";

export default function SingleSubCategoryComponent({productImage, productDescription, productQuantity, productPrice })
{
    const productDisplayPrice = "₹ "+productPrice
    return(
        <div className={"border-2 bg-white border-gray-300 rounded-lg hover:border-wGreen hover:drop-shadow-2xl transition-all w-48 px-3 pb-3 mx-10"}>

            {/* Image of Product */}
            <div>

                <Image src={productImage} className={"h-36 mx-auto"} alt={"Product Image"}/>

            </div>

            {/* It's Description */}
            <div className={"mt-2 text-[16px]"}>
                <p > {productDescription} </p>
            </div>

            {/* Quantity */}
            <div>

                <p className={"text-[14px]"}> {productQuantity} </p>

            </div>

            {/* Price and Add Button */}
            <div className={"flex flex-row justify-between"}>

                <div className={"flex items-center"}>
                    <p> {productDisplayPrice} </p>
                </div>

                <button className={"bg-green-100 text-green-700 text-xl font-bold px-6 py-1 border-2 border-green-700 rounded-lg"}> Add </button>

            </div>


        </div>
    );
}