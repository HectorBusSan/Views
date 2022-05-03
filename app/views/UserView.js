const User= require('./user');
class UserView{
    static createUser(playload){
        if(playload===null){
            return {error: "/playload no existe/"};
        }else{
            return "Completo";
        }
    }
}
module.exports= UserView;