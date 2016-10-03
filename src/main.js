import Routing from './services/routing'

class App {
  static run(){

    let router = new Routing();
    router.handleRoute()

  }
}


window.addEventListener('load', App.run);




