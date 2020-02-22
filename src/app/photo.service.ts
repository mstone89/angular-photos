import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PhotoResponse {
  urls: {
    full: string,
    raw: string,
    regular: string,
    small: string,
    thumb: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
    rootUrl = 'https://api.unsplash.com';
    randomEndpoint = '/photos/random';
    accessKey = 'aPKa_ZHkqgYW1JT6jxSvOilV_lwQO9nU4aSK7DjJZOU';

    constructor(private http: HttpClient) { }

    public getRandomPhoto() {
        const url = `${this.rootUrl}${this.randomEndpoint}`;
        return this.http.get<PhotoResponse>(url, {
            headers: {
                Authorization: `Client-ID ${this.accessKey}`
            }
        });
    }
}
