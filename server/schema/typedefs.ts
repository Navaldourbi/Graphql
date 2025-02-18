export const typedefs=`
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
deleteUser(id:ID!):boolean
}
`
module.exports=typedefs