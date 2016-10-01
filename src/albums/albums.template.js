import Util from '../services/util'

let albumsTemplate = albums => {
  return Util.html`
    <ul>
        ${albums.map(album => {
            if (album !== null){
              return Util.html`
                <li id='${album._id}'>
                    <a href="#album/${album._id}">${album.title}</a>
                    <button class="remove-album">Remove</button>
                </li>`
            }
          }) 
        }
    </ul>`;
};

export { albumsTemplate };