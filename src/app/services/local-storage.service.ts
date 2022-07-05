import { Injectable } from '@angular/core';
// import Credentials from './interfaces'

export interface Credentials {
  username: string;
  tokenId: string;
};
export const TOKEN_ID = 'authenticationToken';
export const USER_ID = 'username';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
  ) { }

  public _getTokenID(): string{
    return localStorage.getItem('data')!;
  }
  public _setName(data:string){
    localStorage.setItem(TOKEN_ID, data);  
  }

  public _getCredentials(): Credentials{
    return JSON.parse(this._getTokenID()!);
  }
  public _setCredentials(data: Credentials){
    localStorage.setItem('data', JSON.stringify(data));  
  }
}
