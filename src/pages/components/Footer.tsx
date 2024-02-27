import Spline from '@splinetool/react-spline';

export default function Footer() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row bg-[#40c998] rounded-full text-white mt-10 py-4 items-center justify-between px-8">
                <p className="font-white mb-4 lg:mb-0">PocketForecast</p>
                <div className="flex">
                    <p className="mr-4">&copy; By Madhu</p>
                    <a href='https://github.com/Civic86/Adv-final-Project.git' target='_blank' className="text-white">Github</a>
                </div>
            </div>
        </div>
    );
}
