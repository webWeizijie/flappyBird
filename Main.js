import { ResourcesLoader } from './js/base/ResourcesLoader.js'

export class Main {
  constructor(){
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    const loader = ResourcesLoader.create()
    loader.onLoaded(map => this.onResourcesFirstLoaded(map))

    let image = wx.createImage();
    image.src = './res/background.png';
    
    image.onload = ()=>{
      this.ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        image.width,
        image.height
      )
    }
  }

  onResourcesFirstLoaded(map){
    console.log(map)
  }
  
}