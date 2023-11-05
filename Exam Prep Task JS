// window.addEventListener('load', solution);

// function solution() {

//     const employeesRef = document.getElementById("employee")
//     const categoryRef = document.getElementById("category");
//     const urgencyRef = document.getElementById("urgency");
//     const assignedTeamRef = document.getElementById("team");
//     const descRef = document.getElementById("description");

//     const ulRef = document.getElementById("ulRef");

//     const addBtnRef = document.getElementById("add-btn");

//     addBtnRef.addEventListener("click", onSubmit);

//     function onSubmit() {

//         let employees = employeesRef.value
//         let category = categoryRef.options[categoryRef.selectedIndex].value;
//         let urgency = urgencyRef.options[urgencyRef.selectedIndex].value;
//         let assignedTeam = assignedTeamRef.options[assignedTeamRef.selectedIndex].value;
//         let description = descRef.value

//         if (!employees || !category || !urgency || !assignedTeam || !description) {
//             return;
//         }

//         let li = createLi(employees, category, urgency, assignedTeam, description);
//         ulRef.appendChild(li)
//         clearInputFields()
//         addBtnRef.disabled = true

//     }

//     function createLi(employees, category, urgency, assignedTeam, description) {

//         let li = document.createElement("li");
//         li.classList.add("problem-content");
//         let article = document.createElement("article");
//         let par1 = document.createElement("p");
//         par1.textContent = `From: ${employees}`
//         let par2 = document.createElement("p");
//         par2.textContent = `Category: ${category}`
//         let par3 = document.createElement("p");
//         par3.textContent = `Urgency: ${urgency}`;
//         let par4 = document.createElement("p");
//         par4.textContent = `Assigned to: ${assignedTeam}`;
//         let par5 = document.createElement("p");
//         par5.textContent = `"Description: ${description}"`

//         const editButnEl = document.createElement("button");
//         editButnEl.textContent = `Edit`;
//         editButnEl.className = "edit-btn";
//         const competeButnEl = document.createElement('button');
//         competeButnEl.textContent = `Continue`
//         competeButnEl.className = "complete-btn";


//         article.appendChild(par1)
//         article.appendChild(par2)
//         article.appendChild(par3)
//         article.appendChild(par4)
//         article.appendChild(par5)

//         li.appendChild(article);
//         li.appendChild(createBtn("add-btn", "Add"));


//         return li
//     }

//     function createBtn(styleClass, text) {
//         let btn = document.createElement("button");
//         btn.classList.add(styleClass);
//         btn.textContent = text
//         return btn
//     }

//     function clearInputFields() {
//         employeesRef.value = "";
//         categoryRef.value = 0;
//         urgencyRef.value = 0;
//         assignedTeamRef.value = 0;
//         descRef.value = "";
//     }

// }
function solve() {
  const employeeInput = document.getElementById("employee")
  const categoryInput = document.getElementById("category")
  const urgencyInput = document.getElementById("urgency")
  const teamInput = document.getElementById("team")
  const descriptionInput = document.getElementById("description")
  const addBtnRef = document.getElementById("add-btn")
  const firstUlRef = document.querySelector('.preview-list')
  const secondUlFef = document.querySelector('.pending-list')
 
  addBtnRef.addEventListener("click", ToPreview)
 
  function ToPreview(event){
    let employee = employeeInput.value;
    let category = categoryInput.value;
    let urgency = urgencyInput.value;
    let team = teamInput.value;
    let description = descriptionInput.value;
 
    if(!employee || !category || !urgency || !team || !description){
      return;
    }
 
    let li = createLi(employee, category, urgency, team, description)
    firstUlRef.appendChild(li)
    clearInput()
    addBtnRef.disabled = true;
  }
 
  function createLi(employee, category, urgency, team, description){
    let li = document.createElement("li");
    li.classList.add("problem-content");
 
    let article = document.createElement("article");
 
    let pFrom = document.createElement("p");
    pFrom.textContent = `From: ${employee}`
 
    let pCategory = document.createElement("p");
    pCategory.textContent = `Category: ${category}`;
 
    let pUrgency = document.createElement("p");
    pUrgency.textContent = `Urgency: ${urgency}`
 
    let pTeam = document.createElement("p");
    pTeam.textContent = `Assigned to: ${team}`;
 
    let pDescription = document.createElement("p");
    pDescription.textContent = `Description: ${description}`
 
    article.appendChild(pFrom);
    article.appendChild(pCategory);
    article.appendChild(pUrgency);
    article.appendChild(pTeam);
    article.appendChild(pDescription);
 
    li.appendChild(article);
    li.appendChild(createBtn("edit-btn", "Edit", onEdit));
    li.appendChild(createBtn("continue-btn", "Continue", toContinue))
 
    return li;
  }
  function createBtn(styleClass, text, callBack){
    let btn = document.createElement("button");
    btn.classList.add(styleClass);
    btn.textContent = text;
    btn.addEventListener("click", callBack)
    return btn;
  }
  function clearInput(){
    categoryInput.value = ""
    employeeInput.value = ""
    urgencyInput.value = ""
    teamInput.value = ""
    descriptionInput.value = ""
  };
  function propogateValue(employee, category, urgency, team, description){
    categoryInput.value = employee;
    employeeInput.value = category;
    urgencyInput.value = urgency;
    teamInput.value = team;
    descriptionInput.value = description;
  }
  function onEdit(event){
    let article = event.target.parentElement.children[0];
    let employee = article.children[0].textContent.split(" ")[1];
    let category = article.children[1].textContent.split(" ")[1];
    let urgency = article.children[2].textContent.split(" ")[1];
    let team = article.children[3].textContent.split(": ")[1];
    let description = article.children[4].textContent.split(" ")[1];
    propogateValue(employee, category, urgency, team, description);
    event.target.parentElement.remove();
    addBtnRef.disabled = false;
  }
  function toContinue(event){
    let employee = employeeInput.value;
    let category = categoryInput.value;
    let urgency = urgencyInput.value;
    let team = teamInput.value;
    let description = descriptionInput.value;
 
    let li = createLi(employee, category, urgency, team, description)
    firstUlRef.remove(li)
    secondUlFef.appendChild(li)
 
  }
 
 
}

