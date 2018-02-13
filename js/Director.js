import { DataStore } from './base/DataStore.js'

export class Director {
  static getInstance(){
    if(!Director.instance){
      Director.instance = new Director();
    }
    return Director.instance
  }
  
  constructor(){
    this.dataStore = DataStore.getInstance()
  }

  run(){
    let background = this.dataStore.get('background')
    background.draw()
  }
}