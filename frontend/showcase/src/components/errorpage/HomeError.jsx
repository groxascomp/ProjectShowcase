import Footer from "../Footer"
import Hero from "../Hero"

function HomeError(){
    return(
        <>
            <Hero />


                <div className="flex-1 px-6 pt-30 pb-67 md:px-16">
            <div className="mx-auto max-w-6xl border border-red-400/30 bg-[#0e0e16] p-8 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                Oops!
              </p>
              <section>
                    <p className="text-gray-400 text-lg mb-4 tracking-widest font-light text-center pt-5">
                    Glad you stopped by.
                    </p>
                </section>
              <p className="mt-3 text-gray-400">
                Unfortunately, we’re having an error on our end — but we’ll fix it soon.
              </p>
            </div>
          </div>
      

      <Footer />
        </>
    )
}

export default HomeError