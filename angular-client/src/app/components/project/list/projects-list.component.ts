import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: any;
  currentProject = null;
  currentIndex = -1;
  code = '';

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.retrieveProjects();
  }

  retrieveProjects() {
    this.projectService.getAll()
      .subscribe(
        data => {
          this.projects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveProjects();
    this.currentProject = null;
    this.currentIndex = -1;
  }

  setActiveProject(project, index) {
    this.currentProject = project;
    this.currentIndex = index;
  }

  removeAllProjects() {
    this.projectService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchCode() {
    this.projectService.findByCode(this.code)
      .subscribe(
        data => {
          this.projects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}
