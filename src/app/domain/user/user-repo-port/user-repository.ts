import {UserDto} from "./user-dto";

export abstract class UserRepository {
  abstract getUser(): UserDto;
}
