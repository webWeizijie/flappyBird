import { ResourcesLoader } from './js/base/ResourcesLoader.js'
import { BackGround } from './js/runtime/BackGround.js'
import { DataStore } from './js/base/DataStore.js'
import { Director } from './js/Director.js'


export class Main {
  constructor() {
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    const loader = ResourcesLoader.create()
    loader.onLoaded(map => this.onResourcesFirstLoaded(map))
    
  }

  onResourcesFirstLoaded(map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.init()
  }

  init(){
    this.dataStore.put('background', BackGround)
    Director.getInstance().run()
  }

}