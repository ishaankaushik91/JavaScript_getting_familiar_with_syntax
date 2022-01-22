var users = [
    {username : 'amy', admin : false},
    {username : 'bob', admin: true },
    {username : 'helen', admin: true },
    {username : 'amir', admin: false },
    {username : 'carmen', admin: false },
];

function isAdmin(user) { 
    return user.admin;
}
var admins = users.filter(isAdmin); 
var result = admins[0].username;
console.log(result);