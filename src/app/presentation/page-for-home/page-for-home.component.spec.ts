import {PageForHomeComponent} from './page-for-home.component';
import {GetUserUcService} from "../../domain/user/usecase/get-user-uc.service";

describe('PageForHomeComponent', () => {

  let component: PageForHomeComponent;
  let mockGetUserUc: GetUserUcService;

  beforeEach(async () => {
    mockGetUserUc = jasmine.createSpyObj<GetUserUcService>({exec: {name: "toto"}});
    component = new PageForHomeComponent(mockGetUserUc)
  });

  it('should init view model', () => {
    component.ngOnInit();
    expect(component.user?.name).toEqual("toto");
  });
});
