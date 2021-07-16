/* 
=======================================================================
SHOWTIME()
=======================================================================
*/
function showTime() {
    let hour = document.getElementById("hour")
    let minute = document.getElementById("minute")
    let second = document.getElementById("second")
    let day = document.getElementById("day")
    let am_pm = document.getElementById("am-pm")

    let weekDays = ["Sun","Mon", "Tues", "Wed", "Thur", "Fri", "Sat", ]
    let ampm = ""
    let greeting = document.getElementById('greetings')

    const date = new Date()
    if (date.getHours() > 12) {
        ampm = "PM"
        greeting.innerText = "Good Evening,"
    } else {
        ampm = "AM"
        greeting.innerText = "Good Morning,"
    }
    hour.innerHTML = date.getHours()
    minute.innerHTML = date.getMinutes()
    second.innerHTML = date.getSeconds()
    day.innerHTML = weekDays[date.getDay()]
    am_pm.innerHTML = ampm
}

/* 
=======================================================================
CLEAR()
=======================================================================
*/
function clear() {
    localStorage.clear()
    //Code to make modal show up ( changing z-index)
    getName()
    getItems()
    document.getElementById('modalContainer').style.display="flex"
}


/* 
=======================================================================
GETITEMS()
=======================================================================
*/
function getItems() {
    // let listArray = ["ToDoList","WatchF1", "DataStructure"]
    let listArray = localStorage.getItem('list')
    if (listArray != null) {
        document.getElementById("myList").innerHTML = ""
        listArray = listArray.split(',')
        listArray.forEach(item => {
            let list = document.getElementById("myList")
            let itemElement = document.createElement("li")
            let innerText = document.createTextNode(item)
            itemElement.appendChild(innerText)
            list.appendChild(itemElement)
        });
    }else {
        document.getElementById("myList").innerHTML = ""
    }
}


/* 
=======================================================================
GETNAME()
=======================================================================
*/
function getName() {
    let name = document.getElementById('name')
    localStorage.getItem('user')
    name.innerText = localStorage.getItem('user')
}

/* 
=======================================================================
ADDITMES()
=======================================================================
*/
function addItems() {
    // let listArray = ["ToDoList","WatchF1", "DataStructure"]
    let taskElement = document.getElementById('input')
    let task = taskElement.value 

    if (task.length != 0 ){

        let listArray = localStorage.getItem('list')
        if (listArray != null) {
            listArray = listArray.split(",")
        } else {
            listArray = []
        }
        listArray.push(task)
        localStorage.setItem('list', listArray.toString())
        getItems()
        taskElement.value = ""
    
    }else{
        taskElement.style.borderBottomColor = "red"
        alert("Enter A Task...")
    }

}


//Update Clock time every second
setInterval(showTime, 1000);


//Check if localStorage is empty or not
if (localStorage.length != 0){
    getName()
    getItems()
}else{
    document.getElementById('modalContainer').style.display="flex"
}


let clearName = document.getElementById('clear').addEventListener('click',()=>{
    document.getElementById('nameInput').value = "";
    console.log('clicked')
})


let next = document.getElementById('nextBtn').addEventListener('click',()=>{
    let name = document.getElementById('nameInput').value ;
    if (name.length != 0 ){
        localStorage.setItem('user', name)
        document.getElementById('nameInput').value = "";
        document.getElementById('modalContainer').style.display= "none"
    }else{
        alert('Enter a Name!')
    }
        getName()
        getItems()
})


let clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener("click", clear)


let addTaskBtn = document.getElementById('addBtn')
addTaskBtn.addEventListener('click',addItems)


addEventListener('')