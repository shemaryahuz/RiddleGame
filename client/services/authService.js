// api service for authentication

const authURL = "http://localhost:3000/auth";

export async function login(username, password) {
    try {
        const userData = { username, password };
        const request = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        }
        const response = await fetch(authURL + "/login", request);
        const responseObj = await response.json();
        if (!responseObj.token) {
            console.log("authentication denied");
            return;
        }
        return responseObj.token;

    } catch (error) {
        console.error(`Error login player: ${error}`);
        return;
    }
}

export async function signup(username, password) {
    try {
        const userData = { username, password };
        const request = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        }
        const response = await fetch(authURL + "/signup", request);
        const responseObj = await response.json();
        if (!responseObj.token) {
            console.log("authentication denied");
            return;
        }
        return responseObj.token;

    } catch (error) {
        console.error(`Error signup player: ${error}`);
        return;
    }
}

