
console.log("HI")

$("#add-task-button").click(function() {
//This declares task
	let task = $("#add-task-input").val()
	//put conditional here
	if (task === "") {
		alert ("Task cannot be blank")
	} else 
		console.log('i have been clicked')
		let $li = $("<li>" + task + "</li>")
		$("#to-do-list").append($li)
		$("#add-task-input").val("")
})