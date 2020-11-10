import { User } from './models/User';

const user = User.buildUser({
  name: 'NEWER NAME LMAO',
});

user.on('change', () => {
  console.log(user);
});

user.save();

console.log(user.hasAge());

user.fetch();
