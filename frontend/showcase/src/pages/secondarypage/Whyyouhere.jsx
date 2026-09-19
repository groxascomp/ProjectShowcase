

function Whyyouhere(){

    return(
        <>
             <Hero/>
                <div className="flex justify-center pt-14 pb-6 ">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-purple-500 text-5xl text-purple-500">
                    ✋
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-sm tracking-[0.3em] uppercase mb-4">
                        // WAIT !!!
                    </div>
                    <div className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Bat ka andito? 💢💢💢
                    <span
                        className="mt-6 inline-block h-3 w-3 rounded-full bg-purple-500 align-middle"
                        aria-hidden="true"
                    ></span>
                </div>
                <div className="text-gray-400 text-lg mb-2">
                    Wala sa options to ha, balik ka dun sa link wag dito. 💢💢💢
                        </div>
                        <div className="text-gray-600 text-sm mb-12">
                    I watch you
                    </div>
                </div>

                <NavLink
                    to="/home"
                    className="mx-auto mb-22 leading-relaxed  flex w-73 items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-950/40"
                >
                    <span className="text-purple-500">◀</span> BACK TO HOME
                </NavLink>

      <Footer />
        </>
    )

}

export default Whyyouhere