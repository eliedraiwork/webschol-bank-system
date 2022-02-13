import { Bank } from './bank.js';
import { BankSnif } from './bank-snif.js';
import { Owner } from './owner.js';
import { BankAccount, AccountType } from './bank-account.js';

const bank = new Bank('Bank of America', '123456789', 'www.bankofamerica.com');

const snif1 = new BankSnif(bank, '123 Main St', '123456789');
const snif2 = new BankSnif(bank, 'King Georges 23', '456789');

const owner = new Owner(
	'123456789',
	'John',
	'Smith',
	'john.doe@g.com',
	'09875363',
	'123 Main St'
);

const account = new BankAccount(snif1, owner, '2000', AccountType.PERSONNAL);
const account2 = new BankAccount(snif2, owner, '5000', AccountType.BUSINESS);
