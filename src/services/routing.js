import AlbumsController from '../albums/albums.controller'
import PhotosController from '../photos/photos.controller'

export default class Routing {

  constructor() {

    window.addEventListener('hashchange', () => this.handleRoute());
    this._routes = {
      '': () => {
        insertTemplate('albums');
      },
      '#album': (url) => {
        let index = url.split('#album/')[1].trim();
        insertTemplate('photos');
      }
    };
  }

  handleRoute() {
    let url = decodeURI(window.location.hash);
    let hash = url.split('/')[0];

    if (this._routes[hash]) {
      this._routes[hash](url);
    } else {
      insertTemplate('not-found');
    }
  };
}

let insertTemplate = (routeName) => {
  let getLink = (name) => `link[rel="import"].${name}-import`;
  let templates = {
    'albums': {link: getLink('albums'), element: '#albums', controller: AlbumsController},
    'photos': {link: getLink('photos'), element: '#photos', controller: PhotosController},
    'not-found': {link: getLink('not-found'), element: '#not-found'}
  };

  let link = document.querySelector(templates[routeName].link);
  let content = link.import;
  let el = content.querySelector(templates[routeName].element);
  let app = document.getElementById('app');
  app.innerHTML = "";
  app.appendChild(el.cloneNode(true));
  new templates[routeName].controller();
};