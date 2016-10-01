let html = (literal, ...cooked) => {
  let result = '';

  // console.log(literal);
  // console.log(cooked);

  cooked.forEach((cook, i) => {
    let lit = literal[i];
    if (Array.isArray(cook)) {
      cook = cook.join('');
    }
    result += lit;
    result += cook;
  });
  result += literal[literal.length - 1];
  return result;
};

let albumsTemplate = albums => {
  return html`
    <ul>
        ${albums.map(album => html`
        <li id='${album._id}'>
            <a href="#album/${album._id}">${album.title}</a>
            <button>Remove</button>
        </li>`) }
    </ul>`;
};

export { albumsTemplate };