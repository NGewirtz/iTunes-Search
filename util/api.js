export function getSearchResults(searchTerm) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const url = `https://itunes.apple.com/search?term=${searchTerm}`;
    request.open('GET', url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(parseRequest(request));
        } else {
          reject(request.status);
        }
      }
    };
    request.send();
  });
}

function parseRequest(request) {
  const jsonRequest = JSON.parse(request.responseText);
  const albums = {};
  jsonRequest.results.forEach(album => {
    albums[album.collectionName] = {
      img: album.artworkUrl100,
      name: album.collectionName || "Untitled",
    };
  });
  return Object.keys(albums).length === 0 ? noResults() : albums;
}

function noResults() {
  return {
    noResults: {
      img: "https://im9.cz/iR/importprodukt-orig/5c5/5c5db1112dd0b62d4b8be3a4d5c2e2ca--mmf250x250.jpg",
      name: "No Results",
    }
  };
}
