## To do app frontend

For this To do app I used the following technologies:
- [React](https://reactjs.org/docs/getting-started.html).
- [Axios](https://axios-http.com/).

### Running the app

Before running the app I suggest you to add the following in your `/etc/hosts`
```
127.0.0.1    api.todo.local
127.0.0.1    app.todo.local
```
This is in order to avoid cors problems and in order for Laravel sanctum to work. 
`api.todo.local` is for the api, while `app.todo.local` is for the frontend part

To get all dependencies execute the following command
```
npm install
```

In order to run the up on localhost execute
```
npm start
```

The app is configured to use the port `9500`
You can access the app on [http://app.todo.local:9500/](http://app.todo.local:9500/).