/**
 * Page d'accueil
 */
export class HomePage {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    greetUser() {
        return `Salut, ${this.username} !`;
    }

    grantAccess() {
        return this.age >= 18;
    }
}