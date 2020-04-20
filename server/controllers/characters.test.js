const mockAxios = require('jest-mock-axios');
const { getCharacters } = require('./charactersCtrl');
const API_KEY = require('../stores/auth');

const BASE_URL = 'https://www.potterapi.com/v1/';

test('should return datas', () => {
  async function testGetCharacters() {
    await getCharacters();
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${BASE_URL}characters?key=${API_KEY}`
    );
  }
  testGetCharacters();
});
