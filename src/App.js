import React, { useEffect, useState } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoService from "./services/todoService";

const UNAUTHORISED = 401;

const App = () =>{
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const service = new TodoService();

    useEffect(() => {
        let mounted = true;
        getUser().then(user => {
            if(mounted) {
                setUser(user?.data?.data);
                setLoading(false);
            }
          }).catch(() => {
              // set error message
          });
        return () => mounted = false;
    }, []);

    useEffect(() => {
        let mounted = true;
        getTodos().then(listItems => {
            console.log(listItems);
            if(mounted) {
                setList(listItems?.data?.data);
            }
            }).catch(() => {
                // set error message
            });
        return () => mounted = false;
    }, [user]);

    async function getUser() {
        if (user == undefined) {
            await service.login();
        }

        return service.get('/api/me');
    }

    async function setItem(todoName) {
        const todo = {'name': todoName, 'completed': false};

        service.post('/api/todos', todo).then((item) => {
            console.log("item = ", item.data.data);
            setList([...list, item.data.data]);
        }).catch((e) => {
            // set error message
        });
    }

    async function deleteItem(id) {
        const todo = {'id': id};

        service.delete(`/api/todos/${id}`).then(() => {
            getTodos().then(listItems => {
                setList(listItems?.data?.data);
            });
        }).catch((e) => {
            // set error message
        });
    }

    async function toggleCompleteItem(id, item) {
        const todo = {completed: !item.completed};
        service.put(`/api/todos/${id}`, todo).then((item) => {
            console.log("item = ", item.data.data);
            getTodos().then(listItems => {
                setList(listItems?.data?.data);
            });
        }).catch((e) => {
            // set error message
        });
    }

    function getTodos() {
        return service.get('/api/todos');
    }

    if (loading) {
        return <div className="todoapp stack-large">Loading...</div>;
    }

    return (
        <div className="todoapp stack-large">
            <h1>To do list</h1>
            <TodoForm setItem={setItem} />
            <TodoList list={list} deleteItem={deleteItem} toggleCompleteItem={toggleCompleteItem} />
        </div>
    )
}

export default App;