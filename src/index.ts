import { User } from './models/User';

const user = new User({ name: 'becl', age: 20});

user.on('change', () => {
  console.log('change #1')
});

user.on('save', () => {
  console.log('Save was triggered')
});

user.trigger('hghjg');