import { Component, OnInit } from '@angular/core';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  default: string = 'https://www.vincenzoracca.com/images/spring.png';

  teckSkills: any = [];

  constructor(private http: SpringbootService) {

  }
  ngOnInit(): void {
    this.http.findTechSkill().subscribe({
      next: resp => {
        this.teckSkills = resp
      },
      error: error => {}
    });
  }
}
