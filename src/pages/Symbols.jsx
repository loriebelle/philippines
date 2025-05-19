function Symbols() {
  return (
    <>
      <section className="hero flex-center flex-col text-center gap-5 fade-in-up">
        <h1 className="text-maroonish">National Symbols</h1>
        <p>
          The national symbols of the Philippines represent the country's
          identity, culture, and heritage.
        </p>
        <p>
          Each symbol reflects the history, values, and traditions of the
          Filipino people, officially recognized for their significance in
          shaping our nation.
        </p>
      </section>
      <section className="flex-center flex-col text-center">
        <h2>Philippine Eagle</h2>
        <p className="pb-4">(Pithecophaga jefferyi)</p>
        <img
          className="w-sm rounded-md"
          src="media/ph-eagle.jpg"
          alt="Philippine eagle"
        />
        <p className="p-4">also known as the "Monkey-Eating Eagle”</p>
        <p>One of the world's rarest and most powerful birds of prey.</p>
        <p>
          Found only in the Philippines, it symbolizes strength, resilience, and
          national pride.
        </p>
      </section>
      <hr className="my-12 border-t border-gray-300 w-1/2 mx-auto" />
      <section className="flex-center flex-col text-center lg:gap-8 gap-4">
        <div className="motto gap-4 lg:gap-20">
          <img
            className="motto-img rounded-md"
            src="media/maka-Diyos.webp"
            alt="A bishop with people holding palm leaves"
          />
          <img
            className="motto-img rounded-md"
            src="media/makatao.jpg"
            alt="Rescue team during a flood"
          />
        </div>
        <div className="text">
          <h2>Motto</h2>
          <p>"Maka-Diyos, Maka-Tao, Makakalikasan, at Makabansa”</p>
          <p>“For God, People, Nature, and Country.”</p>
          <p className="pt-4">
            This serves as a guiding principle for all Filipinos, encouraging
            them to uphold these values in daily life.
          </p>
        </div>
        <div className="motto gap-4 lg:gap-20">
          <img
            className="motto-img rounded-md"
            src="media/makakalikasan.jpg"
            alt="Children with a plant"
          />
          <img
            className="motto-img rounded-md"
            src="media/makabansa.jpg"
            alt="People holding filipino flags"
          />
        </div>
      </section>
      <hr className="my-12 border-t border-gray-300 w-1/2 mx-auto" />
      <section className="flex-center flex-col text-center gap-4">
        <img
          className="w-lg rounded-md"
          src="media/sampaguita.jpg"
          alt="Sampaguita"
        />
        <div>
          <h2>Sampaguita</h2>
          <p>(Jasminum sambac)</p>
        </div>
        <div>
          <p>known for its small, white, and fragrant flowers</p>
          <p>
            The name "Sampaguita" comes from the Filipino phrase "Sumpa kita,"
            which means "I promise you."
          </p>
          <p>
            It symbolizes purity, humility, and simplicity—qualities deeply
            rooted in Filipino culture.
          </p>
        </div>
      </section>
      <hr className="my-12 border-t border-gray-300 w-1/2 mx-auto" />
      <section className="flag flex-center  flex-col text-center gap-8">
        <img
          className="sm:w-1/3 rounded-md"
          src="media/ph-flag.jpg"
          alt="Philippine flag"
        />
        <div>
          <h2>Philippine flag</h2>
          <div className="bg-[#d9d9d984] p-4 m-4">
            <p>
              <span className="inline-block w-2 h-2 rounded-full bg-[#024BB4] align-middle mr-3"></span>
              peace, truth, and justice
            </p>
            <p>
              <span className="inline-block w-2 h-2 rounded-full bg-[#810303] align-middle mr-3"></span>
              bravery, patriotism, and the sacrifices of Filipino heroes
            </p>
            <p>
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFFFFF] align-middle mr-3"></span>
              purity and equality
            </p>
            <p>
              <span className="inline-block w-2 h-2 rounded-full bg-[#F3EF0C] align-middle mr-3"></span>
              The golden sun represents freedom, independence, and democracy
            </p>
          </div>
          <p>
            The eight rays symbolize the first eight provinces that revolted
            against Spanish rule:
          </p>
          <ul className="grid grid-cols-2 m-2">
            <li>Manila</li>
            <li>Cavite</li>
            <li>Batangas</li>
            <li>Bulacan</li>
            <li>Pampanga</li>
            <li>Nueva Ecija</li>
            <li>Tarlac</li>
            <li>Laguna</li>
          </ul>
          <p className="border-t pt-2 pb-2">
            The 3 golden stars represent the three main geographical divisions
            of the Philippines:
          </p>
          <div className="flex-center flex-row justify-center items-center gap-8">
            <p>Luzon (North)</p>
            <p>Visayas (Central)</p>
            <p>Mindanao (South)</p>
          </div>
        </div>
      </section>
      <hr className="my-12 border-t border-gray-300 w-1/2 mx-auto" />
      <section className="flag flex-center flex-col gap-4 lg:gap-8 text-center">
        <div>
          <h2>South Sea Pearl</h2>
          <p>(Pinctada maxima)</p>
          <p>
            It symbolizes beauty, purity, and the country's rich marine
            biodiversity.
          </p>
        </div>
        <img
          className="motto-img rounded-md"
          src="media/ph-pearl.webp"
          alt="Philippine pearl"
        />
      </section>
    </>
  );
}

export default Symbols;
