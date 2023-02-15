export class UserController {
    #welcomeEmailSender;
    constructor(_welcomeEmailSender){
        this.#welcomeEmailSender = Object.freeze(_welcomeEmailSender);
    }
    run = async (req, res) => {
        const userId = req.params.id;
        await this.#welcomeEmailSender.run(userId);
        res.status(200).send();
    }
}