const add = document.getElementById("add");
const text = document.getElementById("text");
const ul = document.getElementById("list");

add.onclick = function() {
    
    let btn = document.createElement("BUTTON");
    let label = document.createElement("p");
    

    label.className = "switch";
    btn.id = 'delete';
    btn.innerHTML = "delete";                   

    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = text.value;
    
    text.value = "";
   
    li.innerHTML += '<label class="switch"><input type="checkbox"><span class="slider round"></span></label> ';
    li.appendChild(btn);

    btn.onclick = function() {
        li.parentNode.removeChild(li);
    }
}

