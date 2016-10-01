let albums = [
  {_id: 0, title: 'title1'},
  {_id: 1, title: 'title2'},
  {_id: 2, title: 'title3'},
  {_id: 3, title: 'title4'},
  {_id: 4, title: 'title5'}
];

export default class AlbumsModel {

  constructor() {
      this._albums = albums;
  }

  all() {
    return this._albums
  }

  add(title) {
    this._albums.push({
      _id: this._albums.length - 1,
      title
    });
  }

  remove(id) {
    delete this._albums[id]
  }
}