import { User } from './models/User';

const user = new User({
  name: 'douwahuiodhsakdhaksjhdakjlcbmznxbczm',
  age: 12,
  id: 3,
});

user.on('change', () => {
  console.log(user);
});

user.save();

user.fetch();
