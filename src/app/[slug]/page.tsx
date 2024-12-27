import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* img */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/* text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti temporibus odit earum porro illum nulla vel, id voluptas pariatur doloribus hic perspiciatis eos dolorem qui sunt, repudiandae asperiores ex.
                </p>
                <div className="h-[2px] bg-gray-200" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">Rs.499</h3>
                    <h2 className="font medium text-2xl">Rs.400</h2>
                </div>
                <div className="h-[2px] bg-gray-200" />
                <CustomizeProducts />
                <Add />

                <div className="h-[2px] bg-gray-200" />
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio porro illum velit totam eum illo placeat autem est eos iure cupiditate dolore architecto veritatis non, deserunt minima necessitatibus iusto?</p>
                </div>
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio porro illum velit totam eum illo placeat autem est eos iure cupiditate dolore architecto veritatis non, deserunt minima necessitatibus iusto?</p>
                </div>
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio porro illum velit totam eum illo placeat autem est eos iure cupiditate dolore architecto veritatis non, deserunt minima necessitatibus iusto?</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;