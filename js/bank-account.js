export const AccountType = {
	PERSONNAL: 'PERSONNAL',
	BUSINESS: 'BUSINESS',
};

export class BankAccount {
	snif;
	owner;
	amount;
	number;
	accountType;

	constructor(snif, owner, amount, number, accountType) {
		this.snif = snif;
		this.owner = owner;
		this.amount = amount;
		this.number = number;
		this.accountType = accountType;
	}
}
