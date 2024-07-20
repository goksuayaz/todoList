const inp = document.getElementById("task");
const lst = document.getElementById("list");

function newElement() {
  if (inp.value === '') {
    showToast('error'); 
  } else {
    let li = document.createElement("li");
    li.innerHTML = inp.value;
    lst.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    span.className = "close";
    li.appendChild(span);
    
    span.onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
    
    showToast('success'); 
  }

  inp.value = "";
  saveData();
}

lst.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", lst.innerHTML);
}

function showTask() {
  lst.innerHTML = localStorage.getItem("data");
}

function showToast(type) {
  const successToast = document.getElementById('liveToast');
  const errorToast = document.getElementById('liveToast2');

  if (type === 'success') {
    $(successToast).toast('show');
  } else if (type === 'error') {
    $(errorToast).toast('show');
  }
}

showTask();