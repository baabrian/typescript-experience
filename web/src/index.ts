import { User } from './models/User';

const user = new User({
  name: 'douwahuiodhsakdhaksjhdakjlcbmznxbczm',
  age: 3,
  id: 3,
});

user.on('change', () => {
  console.log(user);
});

user.save();
user.save();

user.fetch();
