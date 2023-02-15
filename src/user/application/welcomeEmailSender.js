export class WelcomeEmailSender{
    #userRepository;
    #fakeEmailSender
    constructor(_userRepository,_fakeEmailSender){
        this.#userRepository = Object.freeze(_userRepository);
        this.#fakeEmailSender = Object.freeze(_fakeEmailSender);
    }
    
    async run(userId){
        const user = await this.#userRepository.getById(userId);
        if(!user){
            throw new Error(`User id not found ${userId}`);
        }
        this.#fakeEmailSender.send(user.email,"hola mundo");
    }
}