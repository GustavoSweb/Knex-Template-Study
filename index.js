const database = require("./database/database");

var data = {
  name: "Jose",
  email: "jose@gmail.com",
  password: "jose",
};

async function Create() {
  try {
    const query = await database.insert(data).into("user");
    console.log(query);
  } catch (err) {
    console.error(err);
  }
}

async function Select(){
    try{
        const data = await database.select(['id', 'name']).table('user')
        console.log(data)
    
    }catch(err){
        console.error(err)
    }
}
async function SelectWhere(){
  try{
      const data = await database.select(['id', 'name']).whereRaw('name = "Gustavo"').table('user')
      console.log(data)
  
  }catch(err){
      console.error(err)
  }
}
async function Delete(){
  try{
      const data = await database.where({name:"Vitor"}).delete().table('user')
      console.log(data)
  
  }catch(err){
      console.error(err)
  }
}
async function Update(){
  try{
      const data = await database.where({name:"Jose"}).update({email:'joselinho@gmail.com'}).table('user')
      console.log(data)
  
  }catch(err){
      console.error(err)
  }
}
async function SelectOrder(){
  try{
      const data = await database.select(['id', 'name']).orderBy('name', 'asc').table('user') // DESC do maior ao meno 5 4 3 2 1 ASC do menor ao maior 1 2 3 4 5
      console.log(data)
  
  }catch(err){
      console.error(err)
  }
}
SelectOrder()