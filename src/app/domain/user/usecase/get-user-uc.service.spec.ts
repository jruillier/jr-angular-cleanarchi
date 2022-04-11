import {GetUserUcService} from './get-user-uc.service';
import {UserRepository} from "../user-repo-port/user-repository";

describe('GetUserUCService', () => {
  let service: GetUserUcService;

  beforeEach(() => {
    service = new GetUserUcService(jasmine.createSpyObj<UserRepository>({getUser: {name: "toto"}}));
  });

  it('should return user from repo', () => {
    expect(service.exec().name).toEqual("toto");
  });
});
