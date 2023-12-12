import Button from "@/app/_components/button"
import Link from "next/link"

const PaymentSuccess = () => {
  return (
    <div className="mt-[20%] lg:mt-10 px-4 text-center">
        <h1 className="text-3xl font-bold">Payment Success ! </h1>
        <p className="text-6xl mt-4">🎉</p>
        <p className="mt-10">Your order will arrive soon</p>
        <Link href='/'>
            <Button className="mt-6" text="Shop more" />
        </Link>
    </div>
  )
}

export default PaymentSuccess