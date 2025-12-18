import SearchBar from "./Searchbar";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[550px] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Discover Your Next Great Adventure
        </h1>

        <p className="mt-3 text-lg opacity-90">
          Explore millions of books, authors, and reviews curated just for you.
        </p>

        <div className="mt-6 w-full max-w-2xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
