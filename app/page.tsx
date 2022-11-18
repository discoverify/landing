export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto relative">
        <img
          src="/bg1.svg"
          className="absolute -top-[50px] sm:-top-[150px] md:-top-[250px] lg:-top-[200px] xl:-top-[250px] 2xl:-top-[300px] z-[-1]"
        />
      </div>
      <header>
        <div className="max-w-5xl mx-auto flex p-5 items-center justify-between">
          <a
            href="/"
            className="flex title-font font-medium items-center text-white"
          >
            <span className="w-12 h-12 p-2 rounded-full">
              <svg viewBox="0 0 24 24" className="text-emerald-400">
                <path
                  fill="currentColor"
                  d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z"
                />
              </svg>
            </span>
            <span className="text-2xl">Discoverify</span>
          </a>
          <button className="text-slate-900 inline-flex items-center bg-emerald-500 border-0 py-2 px-5 rounded text-base">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
      <section className="max-w-5xl mx-auto text-center mt-40">
        <h1 className="text-6xl mb-3 font-black">Discover songs you'll love</h1>
        <h2 className="text-2xl inline-flex items-center opacity-70">
          powered by
          <img src="/spotify.png" className="h-[1.5em] ml-2" alt="Spotify" />
        </h2>
        <p className="my-8 leading-relaxed px-20 text-gray-400 text-lg">
          Discoverify makes use of Spotify's recommendation engine to find songs
          you would miss.
          <br />
          It offers a simple and intuitive interface to discover new music.
          <br />
          Find songs, artists, albums and playlists you would miss.
        </p>
        <div className="max-w-5xl mx-auto relative blur-[1000px] -z-[1]">
          <img src="/bg2.svg" className="absolute -top-48 blur-[1000px]" />
        </div>
      </section>
    </>
  );
}
