'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../_components/button";
import { getProduct } from '@/app/_utils/getters';
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from '../../_redux/features/cartSlice';

const Product = ({ params }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const product = getProduct(params.productid);
    
    useEffect(() => {
        const cartProduct = cart.products.find(cartProduct => cartProduct.id === product.id);
        const cartQuantity = cartProduct?.quantity;
        if (cartQuantity) setQuantity(cartQuantity);
        else setQuantity(1);
    }, [cart])


    const handleQuantityClick = (type) => {
        if (quantity <= 1 && type === 'decrement' || quantity >= 10 && type === 'increment')
            return;
        if (type === 'increment') setQuantity(quantity + 1);
        else setQuantity(quantity - 1);
    }

    return (
        <div className="flex flex-col lg:flex-row p-4 pb-8 lg:gap-10 lg:pt-10 lg:max-w-[90%] lg:justify-between lg:mx-auto">
            <div className='grid grid-cols-2 gap-4 lg:w-[45%] lg:p-10'>
                {
                    product.images.map((image, index) => (
                        <div key={index} className="w-full min-w-[10rem] h-full min-h-[10rem] relative border shadow-md">
                            <Image src={image} alt="food" fill objectFit="fill" />
                        </div>
                    ))
                }
            </div>
            <div className="lg:w-[45%]">
                <p className="text-3xl font-bold mt-4 mb-1">{product.name}</p>
                <p className="font-light mt-4">
                    <span>₹</span>
                    <span className="text-4xl">{product.price}</span>
                    {product.unit && <span> /{product.unit}</span>}
                </p>
                <p className="mt-4 lg:mt-6 text-justify">{product.description}</p>
                <div className="mt-6 lg:mt-10 lg:flex lg:items-center lg:gap-5 ">
                    <span className="text-lg font-semibold">Quantity</span>
                    <div className="border w-max flex gap-6 items-center p-3 mt-3">
                        <button onClick={() => handleQuantityClick('decrement')}>-</button>
                        <span className="inline-block min-w-[3rem] text-center">{quantity}{product.unit && <span>&nbsp;&nbsp;{product.unit}</span>}</span>
                        <button className="relative -mt-1" onClick={() => handleQuantityClick('increment')}>+</button>
                    </div>
                </div>
                {
                    cart.products.find(cartProduct => cartProduct.id === product.id) ?
                        <Button
                            onClick={() => dispatch(remove(product.id))}
                            text={`Remove from Cart`}
                            className="block w-full mt-8 lg:mt-12 mx-auto"
                        /> :
                        <Button
                            onClick={() => dispatch(add({ ...product, quantity }))}
                            text={`Add to Cart - ₹${(quantity * parseFloat(product.price)).toFixed(2)}`}
                            className="block w-full mt-8 lg:mt-12 mx-auto"
                        />

                }
                <p className="text-xs mt-2 text-center">Free Standard Shipping</p>
            </div>
        </div>
    )
}

export default Product