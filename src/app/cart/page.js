'use client';
import Image from "next/image";
import { useSelector } from "react-redux"
import Button from "../_components/button";
import Link from "next/link";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <section className="py-6 px-4 lg:max-w-[70vw] lg:mx-auto">
            <h2 className="text-3xl font-bold">Your Cart ({cart.products.length})</h2>
            <div className="flex flex-col lg:flex-row pt-8 lg:pt-16 gap-10 lg:justify-between">
                <div className="flex flex-col gap-4">
                    {
                        cart.products.map((product, index) => (
                            <div key={index} className="flex gap-5">
                                <div className="w-32 h-32 lg:w-24 lg:h-24 relative border-2">
                                    <Image src={product.images[1]} alt="food" fill objectFit="fill" />
                                </div>
                                <div className="mt-3 lg:mt-0 text-sm">
                                    <p className="text-xl lg:text-lg font-semibold">{product.name}</p>
                                    <p className="mt-1">Quantity: {product.quantity}</p>
                                    <p className="mt-2">₹<span>{product.price}</span> {product.unit && <span>/{product.unit}</span>}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    cart.products.length > 0 && (
                        <div className="text-lg mt-5 lg:mt-0 lg:mr-36">
                            <p className="text-xl font-bold">Order Summary:</p>
                            <table className="table-auto w-full">
                                <tr>
                                    <td className="pt-2">SubTotal:</td>
                                    <td align="right">₹{cart.total.toFixed(2)}</td>
                                </tr>
                                <tr className="mt-4 border-b">
                                    <td className="pt-2 py-4">Shipping: <span className="text-sm">(Free Shipping)</span></td>
                                    <td align="right">₹0</td>
                                </tr>
                                <tr className="mt-4">
                                    <td className="pt-2">Total:</td>
                                    <td align="right">₹{cart.total.toFixed(2)}</td>
                                </tr>
                            </table>
                        </div>
                    )
                }
            </div>
            {
                cart.products.length > 0 ? (
                    <>
                        <Link href='/payment'>
                            <Button text="Proceed to Payment" className="mx-auto block mt-8" />
                        </Link>
                        <p className="text-xs mt-2 text-center">Development phase: only direct payment</p>
                    </>
                ) :
                (
                    <p><span className="text-2xl">No items it cart 👉</span><Link href='/' className="text-primary text-md underline">Order Now</Link></p>
                )
            }
        </section>
    )
}

export default Cart