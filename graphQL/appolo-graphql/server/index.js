const Koa = require('koa');
const {readFile} = require('./utils')
const { ApolloServer, gql} = require('apollo-server-koa');
const cors = require('@koa/cors');


const typeDefs = gql`
    type TodoItem{
        id: ID
        content: String
        checked: Boolean
    }
    type Query{
        TodoList: [TodoItem!]
    }
`
const resolvers = {
    Query: {
        TodoList: async () => {
            const data = await readFile('./mock/index.json');
            return JSON.parse(data)
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = new Koa();
server.applyMiddleware({app})
app.use(cors())
app.listen(3001)