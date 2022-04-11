import {Component, OnInit} from '@angular/core';
import {GetUserUcService} from "../../domain/user/usecase/get-user-uc.service";
import {UserVo} from "../../domain/user/usecase/user-vo";

@Component({
  selector: 'dlr-page-for-home',
  template: `
    <p>
      User: '{{user?.name}}'
    </p>
  `,
  styles: []
})
export class PageForHomeComponent implements OnInit {

  public user?: UserVo;

  constructor(private readonly getUserUc: GetUserUcService) {
  }

  ngOnInit(): void {
    this.user = this.getUserUc.exec();
  }

}
