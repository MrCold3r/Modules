import { myUserObject } from "./modules/UserConfig.js";

class User {
    constructor(name, email, avatar, role, login){
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.role = role;
        this.login = login;
    }
    Role(){
       return this.role ? 'Admin' : 'User';
    }
    Login(){
        return this.login
    }
}

User.myUserObject = myUserObject;

let user = new User('Giorgi', 'ggaiparashvili@gmail.com', 'https://i.ibb.co/TY0tnw7/1NSPIR3D.jpg', User.myUserObject.role, User.myUserObject.login );

document.querySelector('.name').innerHTML ='Name: ' + user.name;
document.querySelector('.email').innerHTML ="Email: " + user.email
let userRole = document.querySelector('.role');
userRole.innerHTML = user.Role();

if(user.Login()){
    userRole.style = "border-bottom: 2px solid green";
    userRole.style.width = "45px";
}else{
    userRole.style = "border-bottom: 2px solid red";
    userRole.style.width = "45px";
}