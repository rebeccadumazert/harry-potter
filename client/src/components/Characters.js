import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../services/characters';
import { CharactersContent } from './styles/characters';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(page);
    getCharactersDatas();
  }, [page]);

  const getCharactersDatas = async () => {
    const charactersDatas = await getCharacters(page);
    setCharacters(charactersDatas);
  };

  const changePage = (newPage) => {
    setPage(page + newPage);
  };

  return (
    <CharactersContent>
      {characters.map((character) => (
        <div key={character._id}>
          <Link to={`/character/${character._id}`}>{character.name}</Link>
        </div>
      ))}
      {page >= 1 && (
        <button onClick={changePage.bind(null, -1)}>previous</button>
      )}
      <button onClick={changePage.bind(null, 1)}>next</button>
    </CharactersContent>
  );
};

export default Characters;

// export default class Characters extends Component {
//   state = {
//     characters: [],
//     page: 1,
//   };
//   componentDidMount() {
//     this.getCharactersDatas();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page) {
//       this.getCharactersDatas();
//     }
//   }

//   getCharactersDatas = async () => {
//     const { page } = this.state;
//     const characters = await getCharacters(page);
//     this.setState({ characters });
//   };

//   changePage = (newPage) => {
//     this.setState(({ page }) => ({
//       page: page + newPage,
//     }));
//   };

//   render() {
//     const { characters } = this.state;
//     return (
//       <CharactersContent>
//         {characters.map((character) => (
//           <div key={character._id}>
//             <Link to={`/character/${character._id}`}>{character.name}</Link>
//           </div>
//         ))}
//         <button onClick={this.changePage.bind(null, -1)}>previous</button>
//         <button onClick={this.changePage.bind(null, 1)}>next</button>
//       </CharactersContent>
//     );
//   }
// }
