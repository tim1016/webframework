// import { Collection } from './src/models/Collection';
import { User } from './src/models/User';

const collection = User.buildUserCollection();
collection.fetch();

collection.on('change', () => {
  console.log(collection);
});
