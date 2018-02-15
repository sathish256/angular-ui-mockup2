import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../constants/url.constants';
import { TempData } from '../models/tempData';
import { User } from '../models/user';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
    constructor(public http: HttpClient) {}

    getAllTodos(): Observable<TempData[]> {
        return this.http.get<TempData[]>(URLS.todoGETURL);
    }

    getUserDetails(): Observable<User> {
        return this.http.get<User>(URLS.userDetailsGETURL);
    }
}