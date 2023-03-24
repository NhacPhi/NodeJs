const express = require('express');
const app = express();
const port = 8080;

app.get('/',function(req,res){
	//res.send("Hello world");
	res.send("<h2>This is my first app</h2>")
})
var users = [
	{name: "User1", email: "user1@gmail.com"}, 
	{name: "User2", email: "user2@gmail.com"}
];
app.set('views', './views');

app.set('view engine', 'pug'); // Sử dụng pug làm view engine.

app.get('/users', function(req,res){
	res.render('users/index',{users:users});
})
app.get('/users/search', (req,res)=>{
	// search and return here.
	console.log(req.query);
	var name_search = req.query.name; // Lấy giá trị của key trong query parame mà client gửi lên.
	var result = users.filter( (user)=>{
		// Chuyển tên về cùng in thường hoặc in hoa để không phân biệt
		return user.name.toLowerCase().indexOf(name_search.toLowerCase()) !== -1
	})
	
	res.render('users/index', {users:result});
})

app.get('users/create', (req,res) => {
	res.render('users/create')
})

app.post('users/create',(req,res)=>{
	// Add new user here
})
app.listen(port,function(){
	console.log("Your app running on port " + port);
})