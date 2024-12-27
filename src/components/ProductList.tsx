import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";


const PRODUCT_PER_PAGE = 20;
const ProductList = async ({ categoryId, limit }: { categoryId: string; limit?: number; }) => {
    const wixClient = await wixClientServer();
    const res = await wixClient.products
        .queryProducts()
        .eq("collectionIds", categoryId)
        .limit(limit || PRODUCT_PER_PAGE)
        .find();

    // console.log(res.items[0].price)
    console.log(res.items);
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {res.items.map((product: products.Product) => (


                <Link href={"/" + product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                    key={product._id}>
                    <div className="relative w-full h-80">
                        <Image src="https://images.pexels.com/photos/21326994/pexels-photo-21326994/free-photo-of-display-of-leather-bags.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                        <Image src="https://images.pexels.com/photos/21326994/pexels-photo-21326994/free-photo-of-display-of-leather-bags.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
                    </div>
                    <div className="flex justify-between ">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">NPR{product.price?.price}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        My Description
                    </div>
                    <button className="rounded-2xl ring-1 ring-niar text-niar w-max py-2 px-4 text-xs hover:bg-niar hover:text-white">Add to cart</button>
                </Link >

            ))
            }
        </div >
    )
}

export default ProductList;