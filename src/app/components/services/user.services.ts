import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
	public identity;
	public token;
	public url: string;

	constructor(private _http: Http) {
		this.url = GLOBAL.url;
	}

	login(username, password) {
		let body = `usuario=${username}&clave=${password}`;
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this._http.post(this.url + 'login', body, { headers: headers })
			.map(res => res.json());
	}

}