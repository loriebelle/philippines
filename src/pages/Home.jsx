function Home({ setIsNavOpen }) {
  return (
    <>
      <section className="hero flex-center flex-col gap-5 fade-in-up">
        <div className="text-center md:w-1/2 flex-col">
          <h1 className="text-maroonish mb-2">Philippines at a Glance</h1>
          <p className="text-gray-600">Archipelago of Beauty and History</p>
        </div>
        <div className="md:w-1/2 flex-center">
          <iframe
            className="w-full aspect-video max-w-2xl rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/eSUmkFPln_U?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=eSUmkFPln_U"
            title="Philippines tourism video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <div className="bg-[#f3e9dc] flex-center flex-col p-10 text-center shadow-md mx-auto my-10">
        <blockquote className="text-xl md:text-2xl italic text-maroonish leading-relaxed mb-6">
          "Our sense of humor, love for music and dance, and ability to turn
          even the smallest of gatherings into a celebration all contribute to a
          joyful spirit that perseveres regardless of circumstances."
        </blockquote>
        <cite className="block text-right text-sm md:text-base text-gray-700 font-semibold">
          — Armari Pilane
        </cite>
      </div>

      <section className="flex-center flex-col gap-5 p-2 md:p-10">
        <h2 className="text-center text-maroonish ">Quick Facts</h2>
        <div className="flex-center gap-6 border-b pb-4">
          <img
            src="media/island.svg"
            className="w-[80px] md:w-[100px]"
            alt="Illustration of an island"
          />
          <p>
            The Philippines is a Southeast Asian archipelago made up of
            approximately
            <strong> 7,641 islands</strong>, each with its own unique
            biodiversity and history.
          </p>
        </div>
        <div className="flex-center gap-6 border-b pb-4">
          <img
            src="media/family.svg"
            className="w-[80px] md:w-[100px]"
            alt="Illustration of a family"
          />
          <p>
            As of <strong>May 15, 2025</strong>, the population of the
            Philippines is around{" "}
            <a
              href="https://www.worldometers.info/world-population/philippines-population/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blueish underline ml-1"
            >
              <strong>116.7 million</strong>
            </a>
            , making it one of the most populous countries in Asia.
          </p>
        </div>
        <div className="flex-center gap-6 border-b pb-4">
          <img
            src="media/sunny.svg"
            className="w-[80px] md:w-[100px]"
            alt="Illustration of a sunny day on a beach"
          />
          <p>
            The country experiences a <strong>tropical maritime climate</strong>{" "}
            with three main seasons:
            <em> tag-init</em> (hot dry), <em>tag-ulan</em> (rainy), and{" "}
            <em>tag-lamig</em> (cool dry).
          </p>
        </div>
        <div className="flex-center gap-6">
          <img
            src="media/city.svg"
            className="w-[80px] md:w-[100px]"
            alt="Illustration of a city with buildings"
          />
          <p>
            The capital city is <strong>Manila</strong>, while the largest city
            by population is <strong>Quezon City</strong>.
          </p>
        </div>
      </section>
      <section className="flex-center flex-col text-center p-10">
        <h3 className="mb-4 text-blueish">
          Curious to Learn More?
        </h3>
        <p className="mb-6">
          Explore the national symbols, history, and culture of the Philippines
          through our featured sections.
        </p>
        <button
          onClick={() => setIsNavOpen(true)}
          className="bg-[#810303] text-white px-6 py-2 rounded-lg shadow hover:bg-[#a40000] transition"
        >
          Discover More
        </button>
      </section>
    </>
  );
}

export default Home;
