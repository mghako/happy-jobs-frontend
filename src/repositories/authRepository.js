import api from "../api/api"

let baseUrl = "http://happy-jobs.test/api/v1/auth";

const authRepository = {
    createSession() {
        return api.get("http://happy-jobs.test/sanctum/csrf-cookie");
    },
    login(params) {
        return api.post(`${baseUrl}/login`, params);
    },
    logout() {
        return api.delete(`${baseurl}/logout`);
    },
    fetchUsers() {
        return api.get(`${baseUrl}/users`);
    }
}

export default authRepository;