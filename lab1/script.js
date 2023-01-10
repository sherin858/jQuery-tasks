/////// Code it yourself :)
$("#btnAdd").click(function () {
  let toDoContainer = $("<div></div>");
  let toDo = $(`<div>${$("#taskInput").val()}</div>`);
  toDo.addClass("task");
  let doneBtn = $("<button>Done</button>");
  doneBtn.addClass("done");
  let deleteBtn = $("<button>Delete</button>");
  deleteBtn.addClass("delete");
  deleteBtn.click(function () {
    $(this).parent().remove();
  });
  doneBtn.click(function () {
    $(this).parent().addClass("TaskDone");
  });
  toDoContainer.append(toDo, doneBtn, deleteBtn);
  $(".tasksBox").append(toDoContainer);
});
