const UserView= require('./../../app/views/UserView')
describe("Test for UserView",()=>{
    test('Return an error object when try to create a new user with null payload',()=>{
        const playload=null;
        const result= UserView.createUser(playload)
        expect(result.error).toMatch(/playload no existe/)
    })
})