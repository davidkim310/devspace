import { Component, OnInit } from '@angular/core';
import { ProjectSidebarService } from './project-sidebar.service'
import { Observable } from 'rxjs/Observable';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-project-sidebar',
  templateUrl: './project-sidebar.component.html',
  styleUrls: ['./project-sidebar.component.css']
})
export class ProjectSidebarComponent implements OnInit {

  project = {'name': ''}

  constructor(private projectSidebarService: ProjectSidebarService) { }

    onSubmit(form: NgForm) {
        let projectName = form.value.project;
        console.log(projectName)
        let userId = localStorage.getItem('userid');
        form.reset()
        this.projectSidebarService.importProject(userId, projectName)
          .subscribe(
            data => {
              return data
              // this._newsfeedListService.newsfeedPosts.map((post)=>{
              //   console.log("post is", post)
              // if(post.id === this.postId){
              //   post.comments.unshift(data)
              // }
              // return post
              // })
      })
    }

  // importProject = () => {
  //   let userId = localStorage.getItem('userid');
  //   let projectName = 'blah';
  //   this.projectSidebarService.importProject(userId, projectName)
  //     .subscribe(
  //       data => {
  //         return data
  //       }
  //     )
  // }

  ngOnInit() {
    
  }

}
