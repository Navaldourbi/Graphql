
const Users=[{id:"1",name:"john",gender:"male"},{id:"2",name:"Max",gender:"male"},{id:"3",name:"Nina",gender:"female"}]

 const resolver={
    Query:{
        getUser:()=>Users,
        getUserById:(_,{id}) => { return Users.find((user)=>user.id===id)}
    },

    Mutation:{
         createUser:(name,gender)=>{const id=Users.length;Users.push({id,name,gender})}, 
         updateUser:(id,name,gender)=>{ const user=Users.find((user)=>{user.id===id});user.name=name;user.gender=gender;
            Users.push(user);return user},  
         deleteUser:(id)=>{  const index = Users.findIndex((user) => user.id === id);
            if (index === -1) return "User not found!"; 
      
            Users.splice(index, 1); 
            return `User with ID ${id} deleted successfully!`;}   
    }
}

module.exports =resolver