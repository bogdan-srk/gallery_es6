import AlbumsModel from '../services/albums.model'
import AlbumView from './albums.view'

export default class AlbumsController {
  constructor() {
    console.log('Albums Controller');

    let albumsModel = new AlbumsModel();

    let albumView = new AlbumView();
    albumView.render(albumsModel.albums());
  }
}