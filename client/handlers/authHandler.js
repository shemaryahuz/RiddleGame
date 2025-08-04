// handler for user authentication
import { question } from "readline-sync";
import { login, signup } from "../services/authService.js";

function getUsernameAndPassword() {
    const username = question("Enter username: ");
    const password = question("Enter password: ");
    return { username, password };
}

export async function loginByUserData() {
    const userData = getUsernameAndPassword();
    const response = await login(userData);
    if (!response) {
        console.log("error login player");
    }
    console.log(response.message);
    return response.token;
}

export async function signupByUserData() {
    const userData = getUsernameAndPassword();
    const response = await signup(userData);
    if (!response) {
        console.log("error signup player");
    }
    console.log(response.message);
    return response.token;
}