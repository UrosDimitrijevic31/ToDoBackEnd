import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo, deleteToDo } from "../utilities/todo-service";
import { addToDo } from "../utilities/todo-service";
import { UserName } from "../components/userName";

class Main {
    constructor() {
        let inputForm = new InputForm();
        let taskList = new TaskList();
        let userName = new UserName();
       
        
        this.node = document.createElement('main');
        this.node.appendChild(userName.getNode());
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(taskList.getNode());

       //add task
        inputForm.setBtnAddOnClick(() => {
            let text = inputForm.txtTitle.value;
            text = text.trim();
            if (text == '') return;

            addToDo(userName.username.value, text).then( () =>{ 
                let task = new Task(text);
                task.setBtnDeleteClickEvent(()=>{
                    deleteToDo(userName.username.value, text).then(() => {
                        console.log(text);
                        task.deleteItem();
                    }) 
                })
                taskList.addTask(task);
            });          
        });

        //select all tasks
        userName.selectBtnOnClick(() => {
            getToDo(userName.username.value).then(data =>{ 
                let items = data.items; // ovo je niz iz jsona 
                items.forEach(item => {
                    let task = new Task(item.title);
                    task.setBtnDeleteClickEvent(()=>{
                        deleteToDo(userName.username.value, item.title).then(() => {
                            console.log(item.title);
                            task.deleteItem();
                        })
                    })
                    taskList.addTask(task);
                });
            });
        })

        //delete task


    
    }

    getNode() {
        return this.node;
    }

}

export {
    Main
}