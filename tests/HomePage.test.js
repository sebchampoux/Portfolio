import { HomePage } from '../src/js/src/HomePage';

describe('homepage interacts with user correctly', () => {

	test('construct homepage object', () => {
		let homepage = new HomePage('Sébastien', 21);
		expect(homepage).toEqual({ username: 'Sébastien', age: 21 });
	});

	test('greet user', () => {
		let homepage = new HomePage('Sébastien');
		expect(homepage.greetUser()).toEqual('Salut, Sébastien !');
	});

	test('grant access if old enough', () => {
		let hp1 = new HomePage('Sébastien', 21);
		let hp2 = new HomePage('Alexandre', 18);
		let hp3 = new HomePage('Julien', 16);
		expect(hp1.grantAccess()).toBeTruthy();
		expect(hp2.grantAccess()).toBeTruthy();
		expect(hp3.grantAccess()).toBeFalsy();
	});
});
