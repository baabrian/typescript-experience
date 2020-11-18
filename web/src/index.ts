import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

const user = User.buildUser({ name: 'Name', age: 20 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error('Root element DNE');
}


