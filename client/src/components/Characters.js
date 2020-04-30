import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/characters';
import {
  CharactersContent,
  StyledLink,
  StyledButton,
} from './styles/characters';
import next from './images/next.png';
import previous from './images/previous.png';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCharactersDatas = async () => {
      const charactersDatas = await getCharacters(page);
      setCharacters(charactersDatas);
    };
    getCharactersDatas();
  }, [page]);

  const changePage = (newPage) => {
    setPage(page + newPage);
  };

  return (
    <CharactersContent>
      {characters.map((character) => (
        <div key={character._id}>
          <StyledLink to={`/character/${character._id}`}>
            {character.name}
          </StyledLink>
        </div>
      ))}
      <StyledButton onClick={changePage.bind(null, -1)}>
        <img src={previous} alt="" />
      </StyledButton>
      <StyledButton onClick={changePage.bind(null, 1)}>
        <img src={next} alt="next" />
      </StyledButton>
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
