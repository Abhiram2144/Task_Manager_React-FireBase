import React, { useEffect, useState } from "react";
import "../styles/Todo.css";
import { auth, db } from "../config/firebase.config";
// import tasksServices from "../services/tasks.services";
import { addDoc, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

function Todo() {
  window.onload = function () {
    alert(
      "Click on Refresh to see your task if this is not your first time here"
    );
  };

  const name = auth.currentUser.email.split("@")[0].toUpperCase();
  const email = auth.currentUser.email;
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const taskRef = collection(db, "todo-space");
  const [ediarr, setEdiarr] = useState([]);

  const getTasks = async () => {
    const data = await getDocs(taskRef);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(ediarr);
    getArr();
    setEdiarr(arr);
  };
  var arr = [];

  const getArr = () => {
    tasks.forEach((t) => {
      if (t.email === email) {
        arr.push(t);
      }
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  const submitHandler = () => {
    console.log(task);
    addDoc(taskRef, { task: task, email: email });
    getTasks();
    setTask(" ");
    alert("Click on Refresh to see your task");
  };

  // const checkboxevent = (t) => {
  //   document.getElementById("task-id").style.textDecoration = "line-through";
  //   document.getElementById("task-id").style.transition = "ease-in-out 0.5s";
  // };

  const confettiFun = ()=>{
      setTimeout(()=>{jsConfetti.addConfetti()},4000)
  }

  return (
    <div>
      <section>
        <div className="num-div">
          <p className="num-05">05</p>
        </div>
        <div className="todo-space-heading">
          <h1 style={{color:"#DDBF1B"}}>
            <span style={{ fontSize: 64 }}>Hello,</span> &nbsp;{name}
          </h1>
          <h1>Your ToDo-Space is here:</h1>
        </div>
        <div className="top-contents">
          <div className="todo-list" style={{ zIndex: 999999 }}>
            <input
              type="text"
              name="text"
              class="input"
              placeholder="Enter your task"
              onChange={(e) => {
                setTask(e.target.value);
              }}
              value={task}
              autoComplete="off"
            />
          </div>
          <div>
            <button id="add-to-db" onClick={submitHandler}>
              Add
            </button>
            <button onClick={getTasks}>Refresh</button>
          </div>
        </div>

        <div id="database-data">
          <table style={{marginBottom:50}}>
            {ediarr.map((t, index) => {
              // if (t.completed) {
              //   document.getElementById("task-id").style.textDecoration =
              //     "line-through";
              // }
              return (
                <div className="data">
                  <h3>{index + 1}</h3>
                  <h3 id="task-id">{t.task.toUpperCase()}</h3>
                  <label class="check-cont">
                    <input type="checkbox" onClick={confettiFun}/>
                    <svg
                      height="24px"
                      id="Layer_1"
                      version="1.2"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g>
                        <g>
                          <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                        </g>
                      </g>
                    </svg>
                  </label>
                </div>
              );
            })}
          </table>
        </div>
      </section>
    </div>
  );
}

export default Todo;
