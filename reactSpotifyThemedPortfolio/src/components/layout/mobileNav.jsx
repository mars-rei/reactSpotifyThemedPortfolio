const MobileNav = () => {
    return (
        <nav className="mobileNav md:hidden">
            <div className="flex w-full fixed bottom-0 py-3 z-20 bg-[#121212] text-[#B3B3B3]">
                <a href="" className="flex-1">
                <div className="flex flex-col justify-center items-center">
                    <span className="fa fa-home text-2xl mb-2" aria-hidden="true"></span>
                    <span className="text-xs">Home</span>
                </div>
                </a>
                <a href="" className="flex-1">
                <div className="flex flex-col justify-center items-center">
                    <span className="fa fa-user text-2xl mb-2" aria-hidden="true"></span>
                    <span className="text-xs">About</span>
                </div>
                </a>
                <a href="" className="flex-1">
                <div className="flex flex-col justify-center items-center">
                    <span className="fa fa-folder text-2xl mb-2" aria-hidden="true"></span>
                    <span className="text-xs">Projects</span>
                </div>
                </a>
                <a href="" className="flex-1">
                <div className="flex flex-col justify-center items-center">
                    <span className="fa fa-certificate text-2xl mb-2" aria-hidden="true"></span>
                    <span className="text-xs">Certs</span>
                </div>
                </a>
                <a href="" className="flex-1">
                <div className="flex flex-col justify-center items-center">
                    <span className="fa fa-address-card text-2xl mb-2" aria-hidden="true"></span>
                    <span className="text-xs">Contact</span>
                </div>
                </a>
            </div>
        </nav>

    );
};

export default MobileNav;