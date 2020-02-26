import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
	typeDefs: "graphql/schema.graphql",
	resolvers
});

console.log("graphql");

server.start(() => console.log("Graphql Server Running"));
