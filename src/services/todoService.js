import axios from "axios";

export default class TodoService {
    constructor() {
        const service = axios.create({
            // baseURL: process.env.REACT_APP_API_URL,
            baseURL: 'http://api.todo.local',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            withCredentials: true,
        });

        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }
    
    handleError(error) {
        switch (error.response.status) {
            case 401:
                // Token expired
                console.log('The request returned 401 - Unauthorised');
                break;
            case 404:
                // Not found
                console.log('The request returned 404 - Not Found');
                break;
            default:
                // Internal server error
                console.log('The request returned 500 - Internal Server Error');
                break;
        }
        return Promise.reject(error);
    }

    async login(callback = null) {
        const csrf = await this.service.get('/sanctum/csrf-cookie');

        // Should be in env file
        const login = await this.service.post('/login', {
            email: 'todoapp2@gmail.com',
            password: 'secret',
        });

        console.log("login = ", login);

        if (callback != null) {
            callback();
        }
    }

    get(...args) {
        return this.service.get(...args);
    }
    
    post(...args) {
        return this.service.post(...args);
    }
    
    put(...args) {
        return this.service.put(...args);
    }
    
    patch(...args) {
        return this.service.patch(...args);
    }
    
    delete(...args) {
        return this.service.delete(...args);
    }
}