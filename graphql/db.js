let people = [
	{
		id: "0",
		name: "Star Wars - The new one",
		score: 5
	},
	{
		id: "1",
		name: "Avengers - The new one",
		score: 9
	},
	{
		id: "2",
		name: "The Godfather I",
		score: 11
	},
	{
		id: "3",
		name: "Logan",
		score: 2
	}
];

export const getMovies = () => movies;

export const getById = id => {
	const filteredMovies = movies.filter(movie => movie.id === String(id));
	return filteredMovies[0];
};

export const deleteMovie = id => {
	const cleanedMovies = movies.filter(movie => movie.id !== String(id));
	if (movies > cleanedMovies.length) {
		movie = cleanedMovies;
		return true;
	} else {
		return false;
	}
};
