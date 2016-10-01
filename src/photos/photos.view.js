import {photosTemplate} from './photos.template';
import PhotosController from './photos.controller';

export default class PhotosView {

  constructor(controller) {
    this.element = document.getElementById('photos');
    this.controller = controller;
  }

  render(album) {
    return new Promise((resolve, reject) => {
      this.element.innerHTML += photosTemplate(album);
      resolve();
    });
  }
}
