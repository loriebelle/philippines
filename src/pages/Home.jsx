function Home() {
  return (
<section className="h-[calc(100vh-120px)] md:h-[calc(100vh-180px)] flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16">
  <div className="text-center md:w-1/2 flex flex-col justify-center items-center">
    <h1 className="text-maroonish mb-2">Philippines at a Glance</h1>
    <p className="text-gray-600">Archipelago of Beauty and History</p>
  </div>
  <div className="md:w-1/2 flex justify-center items-center">
    <iframe
      className="w-full aspect-video max-w-3xl rounded-2xl shadow-lg"
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
