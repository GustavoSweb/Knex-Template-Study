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
      const query = await database.insert(dataAssociated).into("user");
      console.log(query);
    } catch (err) {
      console.error(err);
    }
  }
  async function SelectJoinWhere(){
    try{
        const data = await database.select(['user.*', 'classroom.name as class_name']).table('classroom').innerJoin('user', 'user.classroom_id', 'classroom.id').where('classroom.id', 1)
        var classroom = {
            id: data[0].classroom_id,
            name: data[0].class_name,
            users:[]
        }

        data.forEach(({name, email, password, id}) => {
            classroom.users.push({name, email, password, id})
        })
        console.log(classroom)
    }catch(err){
        console.error(err)
    }
  }

  SelectJoinWhere()