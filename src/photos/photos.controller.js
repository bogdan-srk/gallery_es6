import AlbumsModel from '../services/albums.model'
import PhotosView from './photos.view'

export default class PhotosController {
  constructor() {
    console.log('Photos Controller');

    this.albumsModel = new AlbumsModel();

    let photosView = new PhotosView(this);

    photosView.render(this.albumsModel.albumById(decodeURI(window.location.hash).split('/')[1]))
      .then(() => {
        let removeButtons = document.getElementsByClassName('.remove-photo');
        Array.from(removeButtons).forEach((button) => {
          button.addEventListener('click', () => {
            let photoId = button.parentElement.getAttribute('id');
            let albumId = decodeURI(window.location.hash).split('/')[1];
            this._removePhoto(albumId, photoId);
          });
        });
      });
  }

  _removePhoto(albumId, photoId) {
    console.log('remove');
    console.log({albumId, photoId});
    this.albumsModel.removePhoto(albumId, photoId);
  }

}