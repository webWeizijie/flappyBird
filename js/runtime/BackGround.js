import {Sprite} from '../base/Sprite.js'

export class BackGround extends Sprite {
  constructor() {
    let system = wx.getSystemInfoSync()
    let img = Sprite.getImage('background')
    super(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      system.windowWidth,
      system.windowHeight
    )
  }
}
