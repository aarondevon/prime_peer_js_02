function Person(name, lastName, corgis, kittens) {
	this.name = name;
	this.lastName = lastName;
	this.corgis = corgis;
	this.kittens = kittens;

	
}

var person1 = new Person("Jeanne", "Erickson Cooley", getCorgis(), getKittens());
var person2 = new Person("Tracy", "Fuller", getCorgis(), getKittens());
var person3 = new Person("Michelle", "Funk", getCorgis(), getKittens());
var person4 = new Person("Claire", "Jacky", getCorgis(), getKittens());
var person5 = new Person("Steve", "Martin", getCorgis(), getKittens());
var person6 = new Person("Kaitlin", "Muth", getCorgis(), getKittens());
var person7 = new Person("Aaron", "Sawyer", getCorgis(), getKittens());
var person8 = new Person("Alicia", "Smith", getCorgis(), getKittens());
var person9 = new Person("Rom", "Stevens", getCorgis(), getKittens());
var person10 = new Person("Kelly", "Johnson", getCorgis(), getKittens());
var person11= new Person("Vincent", "Jones", getCorgis(), getKittens());
var person12= new Person("Michael", "Liquori", getCorgis(), getKittens());
var person13= new Person("Mary", "White", getCorgis(), getKittens());
var person14= new Person("Terry", "Gunderson", getCorgis(), getKittens());
var person15= new Person("Cody", "Misura", getCorgis(), getKittens());
var person16= new Person("Erik", "Johnson", getCorgis(), getKittens());
var person17= new Person("Brian", "Aamodt", getCorgis(), getKittens());
var person18= new Person("Casie", "Lynch", getCorgis(), getKittens());
var person19= new Person("Luke", "Poppe", getCorgis(), getKittens());
var person20= new Person("Chelsea", "Okey", getCorgis(), getKittens());

var array = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12, person13, person14, person15, person16, person17, person18, person19, person20];

for(var i=0; i < array.length; i++){
	console.log(array[i].name);
	console.log(array[i].lastName);
	console.log("Has "+array[i].corgis+" hungry corgis and");
	console.log(" "+array[i].kittens+" fluffy kittens.");
}

function getCorgis(){

	var corgis = randomNumber(1,10);
	return corgis;
};

function getKittens() {
	var kittens = randomNumber(16,105);
	return kittens;
};

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
};


