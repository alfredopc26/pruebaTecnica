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

  getType(ref){

    if(ref=="site_public_and_priv"){
      return " Sitio Publico y Privado";
    }else if(ref=="site_web"){
      return " Sitio web ";
    }else if(ref=="app_mobile"){
      return "TV App";
    }

  }

}
