const database = require("./database/database");

var dataAssociated = {
name:'Gustavo',
email:'gustavo@gmail.com',
password:'gustavo',
classroom_id:1

};
var data = {

}
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
      const data = await database.where({name:"Gustavo"}).delete().table('user')
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
async function SelectOrder(){
  try{
      const data = await database.select(['id', 'name']).orderBy('name', 'asc').table('user') // DESC do maior ao meno 5 4 3 2 1 ASC do menor ao maior 1 2 3 4 5
      console.log(data)
  
  }catch(err){
      console.error(err)
  }
}
async function SelectJoin(){
  try{
      const data = await database.select(['user.*', 'classroom.name as class_name']).table('classroom').innerJoin('user', 'user.classroom_id', 'classroom.id') // DESC do maior ao meno 5 4 3 2 1 ASC do menor ao maior 1 2 3 4 5
      console.log(data)
  
  }catch(err){
      console.error(err)
  }
}
async function SelectJoinWhere(){
  try{
      const data = await database.select(['user.*', 'classroom.name as class_name']).table('classroom').innerJoin('user', 'user.classroom_id', 'classroom.id').where('user.id', 3)
      console.log(data)
  
  }catch(err){
      console.error(err)
  }
}
SelectJoinWhere()