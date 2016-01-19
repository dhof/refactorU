// var numberVics = prompt("How many disaster victims do you need to register?");
// var numberVols = prompt("How many disaster volunteers do you need to register?");

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



// for (i = 1; i <= numberVics; i++ ) {
// 	var newVictim = new victim(prompt("Please enter the victims name"), prompt("Please enter the victims phone number"), prompt("Please enter the victims street address"), 'Victim ' + victimCounter);
// 	victims.push(newVictim);
// 	victimCounter++;
// };

// for (i = 1; i <= numberVols; i++ ) {
// 	confirm("Would you like to enter a new volunteer?");
// 	var newVolunteer = new volunteer(prompt("Please enter the volunteers name"), prompt("Please enter the volunteers phone number"), prompt("Please enter the volunteers street address"), 'Volunteer ' + volunteerCounter);
// 	volunteers.push(newVolunteer);
// 	volunteerCounter++;
// };

do {
	var newVictim = new victim(prompt("Please enter the victims name"), prompt("Please enter the victims phone number"), prompt("Please enter the victims street address"), 'Victim ' + victimCounter);
	victims.push(newVictim);
	victimCounter++;
}
while (confirm("Would you like to enter a new victim?"));


do {
	var newVolunteer = new volunteer(prompt("Please enter the volunteers name"), prompt("Please enter the volunteers phone number"), prompt("Please enter the volunteers street address"), 'Volunteer ' + volunteerCounter);
	volunteers.push(newVolunteer);
	volunteerCounter++;
}
while (confirm("Would you like to enter a new volunteer?"));

var needsHelp = prompt("Please enter the name of a person in need!");
var output = '';


var vicHelp = function(victimsName) {
	var i = 0;
	var f = 0;
	while (i < volunteers.length) {
		if (victims[f].personName === victimsName) {
			if (victims[f].address === volunteers[i].address) {
			output =  output + '\n' + volunteers[i].counter + ': ' + volunteers[i].personName + ' ' + volunteers[i].phone + ' ' + volunteers[i].address;
			}
		}
		i++;
		f++;
	}
};

vicHelp(needsHelp);
alert(output);

// var output = '';
	
// for (i = 0; i < victims.length; i++) {
// 		output =  output + '\n' + victims[i].counter + ': ' + victims[i].personName + ' ' + victims[i].phone + ' ' + victims[i].address;
// };

// alert(output);




