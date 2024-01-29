import './Header.css';

import smallLeft from '../../assets/icons/small-left.png'
import smallRight from '../../assets/icons/small-right.png'
import search from '../../assets/icons/search.png'

const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

// Consumir API
function requestApi(searchTerm) {
  // Query Parameter
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`

  // Fetch método de Requisições
  fetch(url)
    // Promisses
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  resultPlaylist.classList.add('hidden');

  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');

  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  resultsArtist.classList.remove('hidden');
}

// document.addEventListener('input', function() {}) /* Função anônima */
document.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === '') {
    // Adicionar classe hidden à playlist (main-content.css)
    resultPlaylist.classList.add('hidden');

    // Retirar classe hidden do resultArtist (main-content.css)
    resultsArtist.classList.remove('hidden');

    return;
  }

  requestApi(searchTerm);
}) /* Arrow Function */

const Header = () => {
  return (

    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta direita" />
        </button>
      </div>

      <div className="header__search">
        <img src={search} alt="Buscar" />
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
        />
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>

  )
};

export default Header;