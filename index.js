const database = require("./database/database");

var data = {
  name: "Gustavo",
  email: "gustavo@gmail.com",
  password: "gustavo",
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

Select()
