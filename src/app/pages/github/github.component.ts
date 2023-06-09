import { Component } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api-service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {

  public data: any = [];

  constructor(
    private github: GithubApiService
  ) {}

  ngOnInit(): void {
    this.getRepositoryList();
  }

  getRepositoryList(): void {
    this.github.listAll().subscribe(
      data => {
        console.log(data);
        this.data = data;
      }
    );
  }
}
