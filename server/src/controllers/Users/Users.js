class Users {
    constructor(first_name, last_name, email, password, id){
        this.identtity = id
        this.f_name = first_name;
        this.l_name = last_name;
        this.mail = email;
        this.pass = password;
       
    }
    
}
let user = new Users("chuks","amaechi","amaechichuks200@yahoo.com", "secret", 1);
module.exports = user;
