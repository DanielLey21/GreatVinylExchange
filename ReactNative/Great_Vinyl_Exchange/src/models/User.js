class User {

    constructor(email, password, address, name) {
        this.email = email;
        this.password = password;
        this.address = address;
        this.name = name;

        this.creationDate = new Date();
        this.updatedDate = new Date();
    }
}

module.exports = User;