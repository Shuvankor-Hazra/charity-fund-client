
// import Img1 from '../../assets/image1.png';
import Img2 from '../../assets/image2.png';

const Banner = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
            <div className="container md:h-[500px] flex items-center justify-center py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    {/* Img Container */}
                    <div>
                        <img
                            src={Img2}
                            alt=""
                            className='mx-auto w-full p-4 md:max-w-full h=[300px] md:h-[350px] object-cover rounded-3xl'
                        />
                    </div>
                    {/* Text Container */}
                    <div className='lg:max-w-[400px] space-y-6'>
                        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>Help the Needy People</h2>
                        <ul className='flex flex-col gap-2 md:gap-4 list-inside list-disc'>
                            <li className='font-medium'>Always give without remembering and always receive without forgetting</li>
                            <li className='font-medium'>Giving does not only rather precede receiving; it is the reason for it.</li>
                            <li className='font-medium'>Objectively predominate mission-critical functionalities rather methods of.</li>
                        </ul>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
