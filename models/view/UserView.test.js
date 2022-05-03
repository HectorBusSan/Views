const UserView= require('./../../app/views/UserView')
describe("Test for UserView",()=>{
    test('Return an error object when try to create a new user with null payload',()=>{
        const playload=null;
        const result= UserView.createUser(playload)
        expect(result.error).toMatch(/playload no existe/)
    });
    test('Return an error object when try to create a new user with a playoad with invalid properties',()=>{
        const playload={username:null,name:12,id:'id'}
        const result= UserView.createUser(playload);
        expect(result.error).toMatch(/necesitas un valor valido/);
    });
    test('Return an error object when try to create a new user with a playload with missing properties',()=>{
        const playload={username:"Username"};
        const result = UserView.createUser(playload);
        expect(result.error).toMatch(/necesitas un valor valido/);
    });
    test('Create a new User by give valid playload',()=>{
        const playload={username: "username", id: 1, name: "name"};
        const result = UserView.createUser(playload);
        // expect(result.name).toBe("name");
        // expect(result.username).toBe('username');
        // expect(result.id).toBe(1);
        expect(result).toBe(playload)
    })
})