function solve() {
    let formRef = document.querySelector("form");
    let taskRef = document.getElementById("task");
    let taskDeskRef = document.getElementById("description");
    let taskDateRef = document.getElementById("date");
    let section = document.querySelectorAll("section");
    let openRef = section[1];
    let inProgress = section[2];
    let complete = section[3];
 
    formRef.addEventListener("submit", submition);
 
    function submition(event){
        event.preventDefault();
        const task = taskRef.value;
        const description = taskDeskRef.value;
        const date = taskDateRef.value;
 
        if(!task || !description || !date){
            return;
        }
 
        let myArticle = createArticle(task, description, date);
        openRef.children[1].appendChild(myArticle)
        taskRef.value = "";
        taskDeskRef.value = "";
        taskDateRef.value = "";
    }
 
    function createArticle(headline, descr, date){
        let article = document.createElement("article");
        article.innerHTML = `
        <h3>${headline}</h3>
        <p>Description: ${descr}</p>
        <p>Due Date: ${date}</p>
        <div class="flex">
        <button class="green">Start</button>
        <button class="red">Delete</button>
        </div>
        `
        const buttons = article.querySelectorAll("button");
        const startBtn = buttons[0];
        const deleteBtn = buttons[1];
        startBtn.addEventListener("click", moveArticle);
        deleteBtn.addEventListener("click", onDelete)
 
        return article;
    }
 
    function moveArticle(event){
        const article = event.target.parentElement.parentElement;
        let btns = article.querySelectorAll("button");
        let deleteBtn = btns[0];
        let finish = btns[1];
 
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.remove("green");
        deleteBtn.classList.add("red");
 
        finish.textContent = "Finish";
        finish.classList.remove("red");
        finish.classList.add("orange");
 
        deleteBtn.removeEventListener("click", moveArticle);
        deleteBtn.addEventListener("click", onDelete);
 
        finish.removeEventListener("click", onDelete);
        finish.addEventListener("click", toFinish)
 
        inProgress.children[1].appendChild(article)
 
    }
    function onDelete(event){
        event.target.parentElement.parentElement.remove()
    }
    function toFinish(event){
        let article = event.target.parentElement.parentElement;
        event.target.parentElement.remove()
        complete.children[1].appendChild(article)
    }
}