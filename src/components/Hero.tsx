function Hero(){
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Career . Tech . AI . Growth
          </p>
         <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl medium:text-6xl ">
          Your next chapter starts here.
         </h1>

         <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl-600">Practical insights on building your career, learning technology, using AI and creating better opportunities for your future</p>

         <div className="mt-8 flex flex-col gap-4 sm:flex-row ">
           <a href="#" className="rounded-full bg-gray-900 px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 transition-colors">Explore Articles</a>

        <a href="#" className="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-medium text-gray-700 hover:bg-white transition-colors ">Start Writing</a>
         </div>
        </div>

      </div>


    </section>
  )
}

export default Hero;
