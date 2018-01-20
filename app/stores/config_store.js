import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD4QeGYwCqOxxlsEBwSYil9-6c5dgAZA38",
    authDomain: "dinder-d30f7.firebaseapp.com",
    databaseURL: "https://dinder-d30f7.firebaseio.com",
    projectId: "dinder-d30f7",
    storageBucket: "dinder-d30f7.appspot.com",
    messagingSenderId: "886744131566"
  };

export default class ConfigStore {
    constructor(){
        firebase.initializeApp(config)
        this.splashTime = 1000
        this.splashImg = require('../../images/splash.png')
        this.loginBG = require('../../images/login.jpg')
    }
    get SplashImg(){
        return this.splashImg
    }
    get SplashTime(){
        return this.splashTime
    }
    get LoginBG(){
        return this.loginBG
    }
}