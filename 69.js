var users = [];

function addUsers(users, newUsers)
{
    return [].concat(users, newUsers);
}

users = addUsers(users, 'bob');
users = addUsers(users, 'amy');
users = addUsers(users, 'will');
users = addUsers(users, 'lin');

let result = users.length;
console.log(result);