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

  public getTokenID(): string | null{
    return localStorage.getItem(TOKEN_ID);
  }
  public setName(data:string){
    localStorage.setItem(TOKEN_ID, data);  
  }

  public getCredentials(): Credentials{
    return JSON.parse(this.getTokenID()!);
  }
  public setCredentials(data: Credentials){
    localStorage.setItem('data', JSON.stringify(data));  
  }
}
