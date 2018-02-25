import { ResourcesLoader } from './js/base/ResourcesLoader.js'
import { BackGround } from './js/runtime/BackGround.js'
import { Land } from './js/runtime/Land.js'
import { DataStore } from './js/base/DataStore.js'
import { Director } from './js/Director.js'
import { Birds } from './js/player/Birds.js'
import { StartButton } from './js/player/StartButton.js'
import { Score } from './js/player/Score.js'
import { Audio} from './js/runtime/Audio.js'

export class Main {
  constructor() {
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    this.audios = Audio.getInstance()
    const loader = ResourcesLoader.create()
    loader.onLoaded(map => this.onResourcesFirstLoaded(map))
    
  }
  
  onResourcesFirstLoaded(map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.dataStore.audios = this.audios.audios
    this.init()
  }

  init(){
    this.director.isGameOver = false
    this.dataStore.put('background', BackGround);
    this.dataStore.put('land', Land);
    this.dataStore.put('penclis',[])
    this.dataStore.put('birds', Birds)
    this.dataStore.put('startButton', StartButton)
    this.dataStore.put('score', Score)
    this.director.createPencli()
    this.registerEvent()
    this.director.run()
  }

  registerEvent(){
    wx.onTouchStart((e)=>{
      if(this.director.isGameOver){
        this.init()
      }else{
        this.director.birdsEvent()
      }
    })
  }

}