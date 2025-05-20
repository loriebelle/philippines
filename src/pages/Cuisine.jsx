import CuisineGallery from "../components/CuisineGallery";
import { streetFoods, mainDishes, desserts } from "../data/CuisineImages";

function Cuisine() {
  return (
    <>
      <section className="hero flex-center flex-col text-center gap-5 fade-in-up">
        <h1 className="text-blueish">Filipino Cuisine</h1>
        <p className="text-maroonish font-medium">- A taste of home</p>
        <p>
          From savory classics to sweet delicacies, each dish carries with it a
          taste of the archipelago's diverse culture.
        </p>
      </section>
      <section className="lg:h-[50vh] relative flex-center flex-col">
        <img
          src="media/kaldereta.jpg"
          alt="Kaldereta in a white ceramic bowl"
          className="absolute bottom-1/2 -left-10 md:left-4 aspect-3/4 object-cover w-30 md:w-40 lg:w-60 rounded-lg shadow-md"
        />
        <p className="text-center w-1/2 bg-gradient-to-r from-[#f7f1e1] to-[#f3e9dc] bg-opacity-80 p-6 rounded-lg shadow-md z-10">
          Filipino cuisine is a fusion of indigenous, Spanish, Chinese, and
          American influences, creating a unique flavor profile that's rich,
          hearty, and full of soul.
        </p>
        <img
          src="media/bulalo.jpg"
          alt="Bulalo in a bowl"
          className="absolute top-1/2 -right-10 md:right-4 aspect-3/4 object-cover w-30 md:w-40 lg:w-60 rounded-lg shadow-md"
        />
      </section>
      <section className="pt-30 space-y-16">
        {/* STREET FOODS */}
        <div className="flex-center flex-col text-center gap-4 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-maroonish">
              Street Foods
            </h2>
            <p className="max-w-xl">
              Explore iconic street-side bites that define local flavor—from
              skewers to deep-fried delights.
            </p>
          </div>
          <CuisineGallery images={streetFoods} />
        </div>

        {/* MAIN DISHES */}
        <div className="flex-center flex-col text-center gap-4 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-maroonish">
              Main Dishes
            </h2>
            <p className="max-w-xl">
              The soul of Filipino meals: savory, saucy, and perfect with rice.
            </p>
          </div>
          <CuisineGallery images={mainDishes} />
        </div>

        {/* DESSERTS */}
        <div className="flex-center flex-col text-center gap-4 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-maroonish">
              Desserts
            </h2>
            <p className="max-w-xl">
              End your culinary journey on a sweet note with tropical-inspired
              desserts.
            </p>
          </div>
          <CuisineGallery images={desserts} />
        </div>
      </section>
    </>
  );
}

export default Cuisine;
