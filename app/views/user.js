class User{
    constructor(username,id,name){
        this.name=name;
        this.username=username;
        this.id=id;
    }
}
// const usuario= new User({username: "username", id: 1, name: "name"});
// console.log(usuario)
module.exports=User;