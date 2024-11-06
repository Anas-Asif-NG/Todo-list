import { db, app, analytics } from "./firebase.mjs";
import { collection,query, where, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


var addBtn = document.getElementById('add');
var input = document.getElementById('input');
var todoBox = document.getElementById('todoBox')

async function getTodo() {
    const querySnapshot = await getDocs(collection(db, "todolist"));
    todoBox.innerHTML = ""
    querySnapshot.forEach((doc) => {
        todoBox.innerHTML += `
        <div class="todo-list">
                            <div class="left-part">
                                ${doc.data().todo}
                            </div>
                            <div class="right-part">
                                <div class="icon-2" onclick="update('${doc.id}')"><i class="fa fa-pen"></i></div>
                                <div class="icon-3" onclick="del('${doc.id}')"><i class="fa fa-trash"></i></div>
                            </div>  
        </div>
      `
    });
}


addBtn.addEventListener(('click'), async () => {
    console.log(input.value)
    try {
        const docRef = await addDoc(collection(db, "todolist"), {
            todo: input.value,
            status: "pending"
        });
        input.value = ""
        getTodo()
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})

async function del(id) {
    console.log(id)
    await deleteDoc(doc(db, "todolist", id));
    getTodo()
}

async function update(id, ) {
    console.log(id)
    const todoRef = doc(db, "todolist", id);
  
        var updatedText = prompt("Enter Updated Text ...");
        // Set the "capital" field of the city 'DC'
        await updateDoc(todoRef, {
            todo: updatedText,
        }).then((res) => {
            alert("text Updated");
            getTodo();
        }).catch((e) => {
            console.log(e)
        });
   
}

window.del = del;
window.update = update;
getTodo()