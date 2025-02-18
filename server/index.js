const express = require("express");
const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");
const app = express();
const PORT = 9999;

app.use(express.json());
const typeDefs=`
type User{
id:ID!
name:String!,
gender:String!,
}

type Query{
getUser:[User],
getUserById(id:ID!):User
}

type Mutation{
createUser(name:String!,gender:String!):User,
updateUser(id:ID!,name:String!,gender:String!):User,
deleteUser(id:ID!):Boolean
}
`

const Users=[{id:"1",name:"john",gender:"male"},{id:"2",name:"Max",gender:"male"},{id:"3",name:"Nina",gender:"female"}]

const resolvers={
   Query:{
       getUser:()=>Users,
       getUserById:(_ ,{id}) => { return Users.find((user )=>user.id===id)}
   },

   Mutation:{
        createUser:(_,{name,gender})=>{const id = `${Users.length + 1}`; // Create new ID dynamically
         const newUser = { id, name, gender };
         Users.push(newUser);
         return newUser;}, 
        updateUser:(id ,name ,gender )=>{ const user=Users.find((user )=>{user.id===id});user.name=name;user.gender=gender;
           Users.push(user);return user},  
        deleteUser:(id )=>{  const index = Users.findIndex((user ) => user.id === id);
           if (index === -1) return "User not found!"; 
     
           Users.splice(index, 1); 
           return `User with ID ${id} deleted successfully!`;}   
   }
}

const Server = new ApolloServer({ typeDefs, resolvers });

Server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
