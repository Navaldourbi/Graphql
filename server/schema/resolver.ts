
const Users:any=[{id:"1",name:"john",gender:"male"},{id:"2",name:"Max",gender:"male"},{id:"3",name:"Nina",gender:"female"}]

export const resolver={
    Query:{
        getUser:()=>Users,
        getUserById:(_:any,{id}:{id:String}) => { return Users.find((user:any)=>user.id===id)}
    },

    Mutation:{
         createUser:(name:String,gender:String)=>{const id=Users.length;Users.push({id,name,gender})}, 
         updateUser:(id:String,name:String,gender:String)=>{ const user=Users.find((user:any)=>{user.id===id});user.name=name;user.gender=gender;
            Users.push(user);return user},  
         deleteUser:(id:string)=>{  const index = Users.findIndex((user:any) => user.id === id);
            if (index === -1) return "User not found!"; // ❌ ID does not exist
      
            Users.splice(index, 1); // ✅ Remove user from the array
            return `User with ID ${id} deleted successfully!`;}   
    }
}