import {Injectable} from '@angular/core';
import {UserRepository} from "../../domain/user/user-repo-port/user-repository";
import {UserDto} from "../../domain/user/user-repo-port/user-dto";

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryImplService extends UserRepository {

  constructor() {
    super();
  }

  getUser(): UserDto {
    return {name: "jeronimo"};
  }

}
