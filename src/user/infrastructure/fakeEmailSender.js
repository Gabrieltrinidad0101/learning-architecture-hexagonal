export class FakeEmailSender{
    async send(email,text){
        console.log(`${email} ${text}`)
    }
}