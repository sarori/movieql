import { getMovies } from "./db";

const resolvers = {
	Query: {
		movies: (_, { rating, limit }) => getMovies(limit, rating)
		// movie: (_, {id}) => getMovies(id)
	}
};

export default resolvers;
