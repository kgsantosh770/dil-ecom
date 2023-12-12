'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../_components/input"
import Button from "../_components/button";
import { useDispatch } from "react-redux";
import { removeAll } from "../_redux/features/cartSlice";

const Payment = () => {
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const currentYear = new Date().getFullYear();
    const next10Years = Array.from({ length: 20 }, (_, index) => currentYear + index + 1);
    const cardNameRef = useRef(null);
    const cardNumberRef = useRef(null);
    const cardCvvRef = useRef(null);
    const [error, setError] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const handlePay = () => {
        setError(false);
        const cardName = cardNameRef.current?.value;
        const cardNumber = cardNumberRef.current?.value;
        const cardCvv = cardCvvRef.current?.value;
        if(cardName && cardNumber && cardCvv) {
            dispatch(removeAll());
            router.push('/payment/success');
        }
        else setError(true);
    }

    return router ? (
        <div className='px-4 py-6 lg:max-w-xl lg:mx-auto'>
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
                <Input innerRef={cardNameRef} className='w-full' type="text" placeholder="Card Holder Name" />
                <Input innerRef={cardNumberRef} className='w-full' type="tel" maxLength={12} placeholder="Card Number" />
                <div className="flex gap-3 justify-between">
                    <Input className='w-full' type="dropdown" placeholder="Month" options={months} />
                    <Input className='w-full' type="dropdown" placeholder="Year" options={next10Years} />
                </div>
                <Input innerRef={cardCvvRef} className="w-full" type="tel" maxLength={3} placeholder="CVV" />
            </form>
            {error && <p className="font-bold mt-4 text-md text-primary text-center">Please fill in the details.</p>}
            <Button onClick={()=>handlePay()} text="Pay" className="block mx-auto mt-8 w-full lg:max-w-sm" />
        </div>
    ): 'Loading';
}

export default Payment