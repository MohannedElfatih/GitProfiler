import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';


@Component({
    moduleId: module.id,
    selector: 'profile-info',
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [GithubService]
})
export class ProfileComponent {
    user:string[];
    repos:string[];
    username:string;
    constructor(private _githubService: GithubService){
        
    }

    searchUser(){
        this._githubService.updateUser(this.username);

        this._githubService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos =>{
            this.repos = repos;
        });
    }
}
