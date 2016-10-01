import AlbumsController from './albums/albums.controller'
import Routing from './services/routing'

class App {
  static run(){
    // let buttons = document.getElementsByTagName('button');
    // console.log(buttons);
    // [].forEach.call(buttons, button =>
    //   button.addEventListener(
    //     'click', () => {
    //       console.log(button.closest('li').getAttribute('id'));
    //     }));
    router._handleRoute()

  }
}


window.addEventListener('load', App.run);

let router = new Routing();

//window.addEventListener('load', () => router._handleRoute());

