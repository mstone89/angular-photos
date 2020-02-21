import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
    rootUrl = 'https://api.unsplash.com/';
    randomEndpoint = '/photos/random';
    accessKey = 'aPKa_ZHkqgYW1JT6jxSvOilV_lwQO9nU4aSK7DjJZOU';

    constructor(private http: HttpClient) { }

    public getRandomPhoto() {
        const url = `${this.rootUrl}${this.randomEndpoint}`;
        return this.http.get(url, {
            headers: {
                Authorization: `Client-ID ${this.accessKey}`
            }
        });
    }
}
