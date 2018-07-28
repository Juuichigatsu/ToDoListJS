/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function () {
    // TASKCOUNTER AND INPUTS RESET
    var taskCounter = document.querySelector("#taskCounter");
    taskCounter.innerText = parseInt(taskCounter.innerText);
    taskInput.value = "";
    var taskList = document.querySelector("#taskList");
    //add button
    var addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.addEventListener("click", function () {
        var li = document.createElement("li");
        var taskInput = document.querySelector("#taskInput").value;
        var t = document.createTextNode(taskInput);
        li.appendChild(t);
        if (taskInput.length < 5 || taskInput.length > 101) {
            alert("Your text need to have 5 to 100 characters ")
        }
        else {
            document.getElementById("taskList").appendChild(li);
            taskCounter.innerText = parseInt(taskCounter.innerText) + 1;
            document.querySelector("#taskInput").value = "";
        }
        //delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
                if (!li.classList.contains("completed")) {
                    taskCounter.innerText = parseInt(taskCounter.innerText) - 1;
                }
            })
            // COMPLETE BUTTON
        var completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        li.appendChild(completeButton);
        completeButton.addEventListener("click", function () {
            console.log(li);
            li.classList.toggle("completed");
            if (li.classList.contains("completed")) {
                taskCounter.innerText = parseInt(taskCounter.innerText) - 1;
            }
            else {
                taskCounter.innerText = parseInt(taskCounter.innerText) + 1;
            }
        })
        var removeFinishedTasksBtn = document.getElementById("removeFinishedTasksButton");
        removeFinishedTasksBtn.addEventListener("click", function () {
            var completedTasks = document.getElementsByClassName("completed");
            if (li.classList.contains("completed")) {
                taskList.removeChild(li);
            }
        })
    })
})