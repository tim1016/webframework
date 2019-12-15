import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  }
}
