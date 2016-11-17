import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs/Observable';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-home',
  template: `
    <app-search></app-search>
    <div class="row" style="background-color: #F8F8F8; padding-top: 20px;">
      <div class="col-sm-5" style="margin-left: 40px"><app-newsfeed></app-newsfeed></div>
      <div class="col-sm-4"><app-github></app-github></div>
      <div class="col-sm-2"><app-project-sidebar></app-project-sidebar></div>
    </div>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent implements OnInit {

  project = {'name': ''}

  constructor(private homeService: HomeService) { }

      onSubmit(form: NgForm) {
          let projectName = form.value.project;
          console.log(projectName)
          let userId = localStorage.getItem('userid');
          form.reset()
          this.projectSidebarService.importProject(userId, projectName)
            .subscribe(
              data => {
                return data
        })
      }

  ngOnInit() {
    this.homeService.convertCookieToToken()
  }

}
