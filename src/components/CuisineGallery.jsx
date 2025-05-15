function CuisineGallery({ images }) {
  return (
    <div className="w-full h-full flex flex-wrap justify-center gap-2 md:gap-4 px-2 md:px-4">
      {images.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          className="object-cover aspect-[3/2] rounded-lg shadow-md flex-grow basis-0 max-w-[calc(50%-0.5rem)] sm:max-w-[calc(33%-0.75rem)] "
        />
      ))}
    </div>
  );
}

export default CuisineGallery;
