import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'dc79110b9a1d37385622';
    private client_secret = '891cfc0f6ecda1dc85fadbd9f4323fc85fed0e2b';

    constructor(private _http:Http){
        console.log('Github service ready...');
        this.username = 'bradtraversy';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}