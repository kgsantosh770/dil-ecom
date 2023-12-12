'use client';
import { useState } from "react";
import Input from "../_components/input"
import Link from "next/link";
import Button from "../_components/button";

const Payment = () => {
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const currentYear = new Date().getFullYear();
    const next10Years = Array.from({ length: 20 }, (_, index) => currentYear + index + 1);

    return (
        <div className='px-4 py-6 lg:max-w-2xl'>
            <h2 className='text-2xl font-bold'>Checkout</h2>
            <div className='flex items-center gap-3 mt-3'>
                <span>Address</span>
                <span className='inline-block border w-6 mt-1'></span>
                <span>Shipping</span>
                <span className='inline-block border w-6 mt-1'></span>
                <span className='font-bold text-primary'>Payment</span>
            </div>
            <p className='text-xl mt-10'>Payment Details</p>
            <form className="mt-4 flex flex-col gap-4">
                <Input className='w-full' type="text" placeholder="Card Holder Name" />
                <Input className='w-full' type="tel" maxLength={12} placeholder="Card Number" />
                <div className="flex gap-3 justify-between">
                    <Input className='w-full' type="dropdown" placeholder="Month" options={months} />
                    <Input className='w-full' type="dropdown" placeholder="Year" options={next10Years} />
                </div>
                <Input className="w-full" type="tel" maxLength={3} placeholder="CVV" />
            </form>
            <Link href="/payment/success">
                <Button text="Pay" className="block mx-auto mt-8 w-full"/>
            </Link>
        </div>
    )
}

export default Payment