import LoginLinks from "@/app/LoginLinks";


export const metadata = {
    title: 'SideBam',
}

const Home = () => {
    return (
        <>
            <div className="bg-white relative overflow-hidden">
                <LoginLinks />
                <video className="absolute h-full w-full object-cover" autoPlay loop muted>
                    <source src="/videoBg.mp4" type="video/mp4" />
                </video>
                <div className="absolute h-full w-full bg-black opacity-50"></div>
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 relative">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">ساید ‌بام</h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">خرید، فروش، اجاره و مشاوره توسط کارشناسان آژانس</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home