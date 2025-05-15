import CuisineGallery from "../components/CuisineGallery";
import { streetFoods, mainDishes, desserts} from "../data/CuisineImages";

function Cuisine() {
  return (
    <>
      <section className="hero flex-col text-center gap-5">
        <h1 className="text-blueish">Filipino Cuisine</h1>
        <p className="text-maroonish font-medium">- A taste of home</p>
        <p>
          From savory classics to sweet delicacies, each dish carries with it a
          taste of the archipelago's diverse culture.
        </p>
      </section>
      <section className="h-[50vh] md:h-[70vh] relative flex-col items-center">
        <img
          src="media/kaldereta.jpg"
          alt="Kaldereta in a white ceramic bowl"
          className="absolute bottom-1/2 -left-10 md:left-4 aspect-3/4 object-cover w-30 md:w-40 lg:w-60 rounded-lg shadow-md"
        />
        <p className="text-center w-1/2">
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
      <section className="street-foods flex-col pt-20">
        <p className="text-center py-2">
          Explore iconic street-side bites that define local flavor—from skewers
          to deep-fried delights.
        </p>
        <CuisineGallery images={streetFoods} />
        <p className="text-center p-4">
          The soul of Filipino meals: savory, saucy, and perfect with rice.
        </p>
        <CuisineGallery images={mainDishes} />
        <p className="text-center p-4">
          End your culinary journey on a sweet note with tropical-inspired
          desserts.
        </p>
        <CuisineGallery images={desserts} />
      </section>
    </>
  );
}

export default Cuisine;
