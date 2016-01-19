var numberVics = prompt("How many disaster victims do you need to register?");
var numberVols = prompt("How many disaster volunteers do you need to register?");

// var vicName = [];
// var vicPhone = [];
// var vicAddress = [];

function victim(name, phone, address, counter) {
	this.personName = name,
	this.phone = phone,
	this.address = address,
	this.counter = counter
};

function volunteer(name, phone, address, counter) {
	this.personName = name,
	this.phone = phone,
	this.address = address,
	this.counter = counter
};


var victimCounter = 1;
var volunteerCounter = 1;
var victims = [];
var volunteers = [];



for (i = 1; i <= numberVics; i++ ) {
	var newVictim = new victim(prompt("Please enter the victims name"), prompt("Please enter the victims phone number"), prompt("Please enter the victims street address"), 'Victim ' + victimCounter);
	victims.push(newVictim);
	victimCounter++;
};

for (i = 1; i <= numberVols; i++ ) {
	var newVolunteer = new volunteer(prompt("Please enter the volunteers name"), prompt("Please enter the volunteers phone number"), prompt("Please enter the volunteers street address"), 'Volunteer ' + volunteerCounter);
	volunteers.push(newVolunteer);
	volunteerCounter++;
};

alert(for (i = 0; i < victims.length; i++) {
	console.log(victims[i].personName);
	console.log(victims[i].phone);
	console.log(victims[i].address);
});

// for (i = 0; i < victims.length; i++) {
// 	console.log(victims[i].personName);
// 	console.log(victims[i].phone);
// 	console.log(victims[i].address);
// };

alert(for (i = 0; i < volunteers.length; i++) {
	console.log(volunteers[i].personName);
	console.log(volunteers[i].phone);
	console.log(volunteers[i].address);
});

// for (i = 0; i < volunteers.length; i++) {
// 	console.log(volunteers[i].personName);
// 	console.log(volunteers[i].phone);
// 	console.log(volunteers[i].address);
// };



