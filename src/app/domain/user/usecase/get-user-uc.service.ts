import {UserRepository} from "../user-repo-port/user-repository";
import {UserVo} from "./user-vo";

export class GetUserUcService {

  constructor(private readonly userRepository: UserRepository) {
  }

  public exec(): UserVo {
    return this.userRepository.getUser();
  }
}
