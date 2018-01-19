export default class ConfigStore {
    constructor(){
        this.splashTime = 1000
        this.splashImg = require('../../images/splash.jpg')
    }
    get splashImg(){
        return this.splashImg
    }
    get splashTime(){
        return this.splashTime
    }
}