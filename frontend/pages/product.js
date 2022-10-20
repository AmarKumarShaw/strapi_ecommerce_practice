import React from 'react'
import Link from 'next/link'

const Product = (props) => {

    return (
        <div className="container mx-auto px-4"><section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List- ArMa Shop</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {props.product.data.map((item) => {

                        return (

                            <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                                <div className=" p-6 rounded-lg shadow-xl">
                                    <img className="h-80 rounded w-full object-contain object-cent er mb-2" src={item.attributes.images.data && (`http://localhost:1337${item.attributes.images.data.attributes.url}`)} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
                                    <p className='mb-4 text-lg text-gray-900 font-medium'>{(`Price: ₹${item.attributes.price}`)}</p>
                                    <div className="hidden bg-red-600 bg-yellow-600 bg-blue-600 bg-orange-600"></div>
                                    <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-600`}></button>
                                    <p className="leading-relaxed text-base text-gray-600">{item.attributes.description}</p>
                                    <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now
                                    </button></Link>
                                    
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
        </div>
    )
}
export async function getServerSideProps(context) {
    let headers = { Authorization: "Bearer 63973e53cf6b264ed87701dabd47353a2fc85727d87dc9814261e8915c0e2127c2ce94955e449ae2f5968c26fc47e1b7a64e55f118308eefa3be42708ac57ffd28daf0d6216495fe2b026d99d822bc2cb970f486b14f06e04f0d8db6183d43ebe23d3652e20f7ea91e31d39d2e8d6e727650d240db5edef88b4dd254a3a08d72" }
    let a = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers })
    let product = await a.json()
    console.log(product);
    return {
        props: { product: product },
    }
}

export default Product