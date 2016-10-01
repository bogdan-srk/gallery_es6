import {albumsTemplate} from './albums.template';

import Util from '../services/util'

export default class AlbumsView {

  constructor() {
    this.element = document.getElementById('albums');
  }

  render(albums) {
    this.element.innerHTML = albumsTemplate(albums);
  }

}
