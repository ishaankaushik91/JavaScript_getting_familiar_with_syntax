function getLogin(user) {
    let login;
    if (!user.admin) {
        login = user.email;
    }
    else {
        login = user.username;
    }
    return login;
}
var user = {
    username: 'jane',
    admin: true,
    email: 'jane@example.com'
};
let result = getLogin(user);
console.log(result);