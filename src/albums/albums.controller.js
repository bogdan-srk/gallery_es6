import AlbumsModel from '../services/albums.model'
import AlbumView from './albums.view'

export default class AlbumsController {
  constructor() {
    console.log('Albums Controller');

    this.albumsModel = new AlbumsModel();

    let albumView = new AlbumView();

    albumView.render(this.albumsModel.albums())
      .then(() => {
        let removeButtons = document.getElementsByClassName('remove-album');
        Array.from(removeButtons).forEach((button) => {
          button.addEventListener('click', () => {
            let albumId = button.parentElement.getAttribute('id');
            this._removeAlbum(albumId);
          });
        });
      });
  }

  _removeAlbum(albumId){
    this.albumsModel.removeAlbum(albumId)
  }
}