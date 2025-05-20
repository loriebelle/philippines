function Culture() {
  return (
    <>
      <section className="hero flex-center flex-col text-center gap-5 fade-in-up">
        <h1 className="text-blueish">Culture and Traditions</h1>
        <p>
          The Philippines is a country rich in culture and traditions shaped by
          its diverse history, indigenous roots, and foreign influences.
        </p>
        <p>
          From colorful festivals to deep-rooted family values, Filipino culture
          reflects warmth, resilience, and a strong sense of community.
        </p>
      </section>
      <section>
        <div className="headline">
          <div className="line w-1/5 hidden lg:block" aria-hidden="true"></div>
          <h2>Bayanihan</h2>
          <p>represents the strong sense of community among Filipinos.</p>
          <div className="line w-1/5 hidden lg:block" aria-hidden="true"></div>
        </div>
        <div className="grid bayanihan-grid">
          <img
            src="media/bayanihan.jpg"
            alt="Group of people moving a nipa hut"
          />
          <img
            src="media/bayanihan(2).jpg"
            alt="People with face shields packing relief goods"
          />
          <img
            src="media/bayanihan(3).jpg"
            alt="People with bags of relief goods"
          />
          <img
            src="media/bayanihan(4).jpg"
            alt="A woman and her baby receving a plate of food and water"
          />
        </div>
      </section>
      <section>
        <div className="headline">
          <p>Filipinos are known worldwide for their</p>
          <h2>Hospitality</h2>
          <div className="line w-1/5 hidden lg:block" aria-hidden="true"></div>
        </div>
        <div className="grid hospitality-grid">
          <img
            src="media/hospitality.webp"
            alt="A picture of children with a man"
          />
          <img
            src="media/hospitality(2).webp"
            alt="A picture of children with a tourist"
          />
          <img
            src="media/hospitality(3).jpg"
            alt="A group of people in a hospitality field"
          />
          <img
            src="media/hospitality(4).jpg"
            alt="A man with children holding US and Philippine flags"
          />
        </div>
      </section>
      <section>
        <div className="headline">
          <div className="line w-1/5 hidden lg:block" aria-hidden="true"></div>
          <h2>Respect</h2>
          <p className="text-center">
            is deeply ingrained in Filipino culture and is reflected in the way
            people interact with elders, family members, and even strangers.
          </p>
        </div>
        <div className="grid respect-grid">
          <img
            src="media/respect.jpg"
            alt="A girl performing 'mano po' gesture to an elder"
          />
          <div>
            <p className="text-center p-2">
              "Mano Po" is a traditional Filipino gesture of respect, especially
              toward elders.
            </p>
            <p className="text-center p-2">
              A younger person takes the hand of an elder and gently touches it
              to their own forehead, often while saying "Mano po."
            </p>
          </div>
          <img
            src="media/respect(2).webp"
            alt="Child showing respect with mano po - a traditional Filipino gesture"
          />
        </div>
      </section>
      <section className="text-center py-10">
        <h3 className="text-4xl font-semibold text-maroonish mb-4">
          Proudly Filipino
        </h3>
        <p className="mb-6 max-w-xl mx-auto">
          These cultural values form the heart of the Filipino identity — a
          blend of warmth, community, and enduring spirit.
        </p>
        <a
          href="/symbols"
          className="bg-[#810303] text-white px-6 py-2 rounded-lg shadow hover:bg-[#a40000] transition"
        >
          Explore National Symbols
        </a>
      </section>
    </>
  );
}

export default Culture;
