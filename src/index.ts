import { User } from './models/User';

const user = new User({ name: 'eviscerate', age: 10});

user.save();