const User= require('./user');
class UserView{
    static createUser(playload){
        if(playload===null){
            return {error: "/playload no existe/"};
        }else if(playload.username===null || typeOf(playload.name!="string") || typeOf(playload.id!="number")){
            return {error: "/necesitas un valor valido/"};
        }
    }
}
module.exports= UserView;