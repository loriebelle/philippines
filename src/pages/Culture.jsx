function Culture() {
  return (
    <>
      <section className="hero flex-col text-center gap-5">
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
          <h2>Bayanihan</h2>
          <p>represents the strong sense of community among Filipinos.</p>
        </div>
        <div className="grid bayanihan-grid">
          <img src="media/bayanihan.jpg" alt="Group of people moving a nipa hut" />
          <img src="media/bayanihan(2).jpg" alt="People with face shields packing relief goods" />
          <img src="media/bayanihan(3).jpg" alt="People with bags of relief goods" />
          <img src="media/bayanihan(4).jpg" alt="A woman and her baby receving a plate of food and water" />
        </div>
      </section>
      <section>
        <div className="headline">
          <p>Filipinos are known worldwide for their</p>
          <h2>Hospitality</h2>
        </div>
        <div className="grid hospitality-grid">
          <img src="media/hospitality.webp" alt="bayanihan" />
          <img src="media/hospitality(2).webp" alt="bayanihan" />
          <img src="media/hospitality(3).jpg" alt="bayanihan" />
          <img src="media/hospitality(4).jpg" alt="bayanihan" />
        </div>
      </section>
      <section>
        <div className="headline">
          <h2>Respect</h2>
          <p className="text-center">
            is deeply ingrained in Filipino culture and is reflected in the way
            people interact with elders, family members, and even strangers.
          </p>
        </div>
        <div className="grid respect-grid">
          <img src="media/respect.jpg" alt="bayanihan" />
          <p className="text-center">
            Filipinos also show deep respect for elders by using 'po' and 'opo' when speaking.
          </p>
          <img src="media/respect(2).webp" alt="bayanihan" />
        </div>
      </section>
    </>
  );
}

export default Culture;
