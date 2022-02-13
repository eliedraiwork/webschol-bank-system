export class Bank {
	name;
	bankNumber;
	website;

	constructor(n, bNumber, wSite) {
		this.name = n;
		this.bankNumber = bNumber;
		this.website = wSite;
	}

	sendMessage(message, senderName, senderEmail, senderPhone) {
		console.log('Sending message to ' + this.name + '...');
		console.log('Message: ' + message);
		console.log('Sender: ' + senderName + ' (' + senderEmail + ')');
		console.log('Phone: ' + senderPhone);
	}
}
