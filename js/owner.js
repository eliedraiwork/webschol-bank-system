export class Owner {
	fName;
	lName;
	email;
	phone;
	id;
	address;

	constructor(id, fName, lName, email, phone, address) {
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.phone = phone;
		this.id = id;
		this.address = address;
	}

	introduce() {
		console.log(
			'Hello, my name is ' +
				this.fName +
				' ' +
				this.lName +
				' and I am the owner of a bank account.'
		);
	}
}
