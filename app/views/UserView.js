const User= require('./user');
class UserView{
    static createUser(playload){
        if(playload===null){
            return {error: "/playload no existe/"};
        }else if(playload.username===null || playload.name===null ||playload.id===null || typeof(playload.username==="string") || typeof(playload.name!=="string") || typeof(playload.id!=="int")){
            return {error: "/necesitas un valor valido/"};
        }else{
            return new User(playload);
        }
    }
}
module.exports= UserView;