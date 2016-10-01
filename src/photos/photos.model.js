let albums = [
  {_id: 0, title: 'title1',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]},

  {_id: 1, title: 'title2',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]},

  {_id: 2, title: 'title3',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]},

  {_id: 3, title: 'title4',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]},

  {_id: 4, title: 'title5',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]}
];

export default class PhotosModel {

  constructor() {
    this._albums = albums;
  }

  albumById(id, cb) {
    return this._albums[id];
  }

  add(id, title, cb) {
    this._albums[id].photos.push({
      _id: this._albums[id].photos.length - 1,
      title
    });
    if (cb) cb();
  }

  remove(albumId, photoId, cb) {
    delete this._albums[albumId].photos[photoId];
    if (cb) cb();
  }

}