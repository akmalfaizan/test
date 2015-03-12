document.addEventListener("deviceready", onDeviceReady, false);

var db;


function getDatabase()
{
	
	return window..openDatabase("mytodo","1.0","myTodo Database",200000);
}

function onDeviceReady() {
        db =getDatabase();
		db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS tasks ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
		}, databaseError, getItems);
}


function getItems()
{
	console.log("Entering get Items..!!");
	db.transaction(function (tx) {
		tx.executeSql('SELECT * FROM tasks',[],querySuccess,databaseError);
		}, databaseError);
	console.log("Leaving get Items..!!");
}

function querySuccess(tx,results)
{
	cosole.log("Entering querySuccess");
	var len = results.rows.length;
	var output = '';
	for(var i=0; i < len ; i++)
	{
		output = output + '<li id="' + results.rows.item(i).id + '">' + results.rows.item(i).name + '</li>';
	}
	alert(output);
}

function insertItem()
{
	console.log("Entering insertItem");
	var insertValue = document.getElementById("mother_name").value;
	
	db.transaction(function (tx) {
		tx.executeSql('INSERT INTO tasks(name) VALUES('+ insertValue+')');
		}, databaseError,getItems);

}   

fumction databaseError(error)
{
	messageElement.html("Error:"+ error.code);
	
}

   
$(document).ready(function(){
	

});

function save_data()
{
	console.log("Got Tasks..!!");
	
insertItem();
	
var mother_name = document.getElementById("mother_name").value;
var baby_name = document.getElementById("baby_name").value;

localStorage.setItem('mother_name', mother_name);
localStorage.setItem('baby_name', baby_name);

alert(baby_name);
}
