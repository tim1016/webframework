import { User } from './src/models/User';

const user = User.buildUser({ id: 7, name: 'newer', age: 0 });
console.log(user);
user.on('change', () => {
  console.log(user);
});

user.save();
