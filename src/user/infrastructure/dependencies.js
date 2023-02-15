import { WelcomeEmailSender } from "../application/welcomeEmailSender.js"
import { UserController } from "./user-controller.js";
import { InMemoryUser } from "./inMemoryUserRepository.js";
import { FakeEmailSender } from "./fakeEmailSender.js";

export const fakeEmailSender = new FakeEmailSender()
export const inMemoryUser = new InMemoryUser();
export const welcomeEmailSender = new WelcomeEmailSender(inMemoryUser,fakeEmailSender);
export const userController = new UserController(welcomeEmailSender);