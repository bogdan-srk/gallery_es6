import AlbumsModel from './albums.model'
import AlbumView from './albums.view'

export default class AlbumsController {
  constructor() {
    console.log('Albums COntroller');

    let albums = new AlbumsModel();
    //
    // albums.add('added');
    // albums.remove(4);
    // console.log(albums.all());

    let albumView = new AlbumView();
    albumView.render(albums.all());
  }
}