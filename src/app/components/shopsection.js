import Button from './button'
import Image from 'next/image'

const ShopSection = (props) => {
    return (
        <section className={`text-center ${props.className}`}>
            <h1 className={`text-5xl font-extrabold ${props.optionalHeadline ? 'mb-1' : 'mb-5'}`}>{props.headline}</h1>
            {
                props.optionalHeadline &&
                <h2 className='text-5xl font-extrabold mb-4'>{props.optionalHeadline}</h2>
            }
            {
                props.description &&
                <h3 className='mb-6 lg:max-w-[50%] mx-auto'>{props.description}</h3>
            }
            {
                props.btnText &&
                <Button text={props.btnText} />
            }
            {
                props.images && props.images.length > 0 &&
                <div className='mt-8 lg:mt-12 flex gap-3 lg:gap-10 lg:justify-center overflow-x-auto'>
                    {
                        props.images.map((imageUrl, index) => (
                            <div key={index}
                                className="min-h-[20rem] lg:min-h-[30rem] min-w-[70vw] 
                                lg:min-w-[22rem] lg:max-w-[20rem] rounded-2xl relative overflow-hidden">
                                <Image
                                    className='lg:hover:scale-105'
                                    src={imageUrl}
                                    alt="banner"
                                    objectFit='cover'
                                    layout="fill" />
                            </div>
                        ))
                    }
                </div>
            }
        </section>
    )
}

export default ShopSection