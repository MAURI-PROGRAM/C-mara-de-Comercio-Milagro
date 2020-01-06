import { Injectable } from "@angular/core";
import {Storage} from "@ionic/storage"

@Injectable()
export class SessionStorageProvider {
  singleParam: any;
  listParam: any[] =[];
  constructor(private storage: Storage) {
    
  }

  public set(settingName: any, value: any) {
    return this.storage.set(`setting:${settingName}`, value);
  }
  public async get(settingName: any) {
    await this.storage
          .ready();
      return await this.storage.get(`setting:${settingName}`);
  }
  public remove(settingName: any) {
    return this.storage.remove(`setting:${settingName}`);
  }

  public passParametersSingle(singleParam:any){
    this.singleParam=singleParam;
  }

  public passParametersList(listParam:any[]){
    this.listParam=listParam;
  }
}
