import { MovieCard } from './MovieCard'


export function Content({ movies, selectedGenre }) {


  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.name}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}