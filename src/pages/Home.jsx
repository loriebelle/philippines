function Home() {
  return (
    <section className="h-[80vh] flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center px-6 md:px-16">
      <div className="text-center md:w-1/2 flex flex-col justify-center h-full">
        <h1 className="text-3xl font-bold mb-2">
          Philippines at a Glance
        </h1>
        <p className="text-lg text-gray-600">
          Archipelago of Beauty and History
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <iframe
          className="w-full aspect-video rounded-2xl shadow-lg"
          src="https://www.youtube.com/embed/eSUmkFPln_U?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=eSUmkFPln_U"
          title="Philippines tourism video"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Home;
