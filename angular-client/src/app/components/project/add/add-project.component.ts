import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  project = {
    code: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  saveProject() {
    const data = {
      code: this.project.code,
      description: this.project.description
    };

    this.projectService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProject() {
    this.submitted = false;
    this.project = {
      code: '',
      description: '',
      published: false
    };
  }

}
