import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-section-project',
  templateUrl: './section-project.component.html',
  styleUrls: ['./section-project.component.sass']
})
export class SectionProjectComponent implements OnInit {

  project: any;

  constructor( private service: ProjectService ) { }

  ngOnInit() {
    this.service.getDataProject().subscribe(data => {
      this.project = data;
      console.log(data);
    });
  }

  getOrientation(ref: number){


    if(ref % 2 != 0){
      return 'rigth';
    }

    return 'left';

  }

}
