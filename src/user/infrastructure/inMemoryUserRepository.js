import { User } from "../domain/user.js";

const users =[
    {
        id: 1,
        email: "juan@gmail.com",
    },
    {
        id: 2,
        email: 'carlo@gmail.com'
    }
]

export class InMemoryUser{
    getById(userId){
        const user = users.find(({id}) => id === parseInt(userId))
        if(!user) return null;
        return new User(user.id,user.email);
    }
}