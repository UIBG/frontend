const API_URL = 'http://localhost:8080/api/v1/auth'; //UNTUK LOCALHOST

export async function register(
    username: string,
    email: string,
    password: string,
) {
    const response = await fetch(`${API_URL}/register`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username,
            email,
            password
        })
    });
    return response.json();
}

export async function login(
    username: string, 
    password: string
) {
    const response = await fetch(`${API_URL}/authenticate`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            username, 
            password 
        })
    });
    return response.json();
}