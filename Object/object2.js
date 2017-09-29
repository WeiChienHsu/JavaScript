// someObject={
// 	"_name":"Hedwig",
// 	age:6,
// 	"color":"red",
// 	"_123":true
// }

// console.log(someObject._name);
// console.log(someObject.age);
// var porp = "color";
// console.log(someObject[porp]);
// console.log(someObject._123 );

var movieDB=[
	{ seen:"watched",
	  movie:'"In Bruges"',
	  point:5
	},
	{ seen:"not seen",
	  movie:'"In Bruges"',
	  point:4.5
	},
	{ seen:"seen",
	  movie:'"In Bruges"',
	  point:5
	},
	{ seen:"not seen",
	  movie:'"In Bruges"',
	  point:3.5
	}
]

function sen(obj){
	return "You have "+obj[i].seen+" "+obj[i].movie+" - "+obj[i].point+" stars";
}

for(var i=0;i<4;i++){
	console.log(sen(movieDB));
	}