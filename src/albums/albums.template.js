import Util from '../services/util'

let albumsTemplate = albums => {
  return Util.html`
    <ul>
        ${albums.map(album => Util.html`
        <li id='${album._id}'>
            <a href="#album/${album._id}">${album.title}</a>
            <button>Remove</button>
        </li>`) }
    </ul>`;
};

export { albumsTemplate };