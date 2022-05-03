const User= require('./user');
class UserView{
    static createUser(playload){
        if(playload===null){
            return {error: "/playload no existe/"};
        }
        else if((typeof playload.username !== 'string' || playload.username === null) || (typeof playload.user !== 'string' || playload.user === null) || (typeof playload.id !== 'number' || playload.id === null)){
            return {error: "/necesitas un valor valido/"};
        }
        else{
            // play=playload.username,playload.name,playload.id;
            return new User(playload.id,playload.username,playload.name);
        }
    }
}
module.exports= UserView;