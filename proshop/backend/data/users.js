import bcrypt from 'bcryptjs';
const users = [{
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
}, 
{
    name: 'Krisana Arunyamitanon',
    email: 'Krisana@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
}, 
{
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
}]

export default users