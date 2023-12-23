const database = require("./database/database");

var dataAssociated = {
  name: "Matematica",
  teacher: "Tadeu",
};
var data = {};
async function Create() {
  try {
    const query = await database.insert(dataAssociated).into("materias");
    console.log(query);
  } catch (err) {
    console.error(err);
  }
}
async function SelectJoin() {
  try {
    const data = await database
      .select([
        "user.*", "materias.name as mater_name"
    ]).table("users_materias")
      .innerJoin("user", "user.id", "users_materias.user_id")
      .innerJoin("materias", "materias.id", "users_materias.materia_id")
      .where("user.id", 3);
    var user = {
      id: data[0].id,
      name: data[0].name,
      materias: [],
    };
    data.forEach(({ mater_name }) => {
      user.materias.push({ name: mater_name });
    });
    console.log(user);
  } catch (err) {
    console.error(err);
  }
}

async function testeTransaction(){
    try{

        await database.transaction(async trans =>{
            const data = await database.select(['user.*', 'classroom.name as class_name']).table('classroom').innerJoin('user', 'user.classroom_id', 'classroom.id').where('classroom.id', 1)
            await database.insert({name:'Historia'}).table('materias')
            var classroom = {
                id: data[0].classroom_id,
                name: data[0].class_name,
                users:[]
            }
    
            data.forEach(({name, email, password, id}) => {
                classroom.users.push({name, email, password, id})
            })
            console.log(classroom)    
        })
    }catch(err){
        console.error(err)
    }
  }
