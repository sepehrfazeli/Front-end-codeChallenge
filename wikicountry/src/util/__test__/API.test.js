// import React from 'react';
// import { createRoot } from 'react-dom/client';
import { API } from '../API';
// import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';




it('init function works correctly', async () => {
  const countries = await API.init();
  countries.forEach(country => {

    if(country.Capital === undefined) console.error(country);

    expect(country).toEqual({
      'Capital': expect.any(Array || String),
      'Population': expect.any(String),
      'Region': expect.any(String),
      'flag': expect.any(String),
      'name': expect.any(String)
    });
  });
});


it('search function works correctly', async () => {
  const countries = await API.search(['Germany']);
  expect(countries[0]).toEqual(
    {
      name: 'Germany',
      Population: expect.any(String),
      Region: 'Europe',
      Capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png'
    });
});


// it('nameFinder function works correctly', async () => {
//   const countries = await API.nameFinder(['GER']);
//   expect(countries).toEqual('Germany');

// });


// it('namesFinder function works correctly', async () => {
//   const countries = await API.namesFinder(['ger','col','pe','at']);
//   expect(countries).toEqual([ 'Germany', 'Colombia', 'Peru', 'Austria' ]);

// });


it('codesToNames function works correctly', async () => {
  const countries = await API.codesToNames(['ger','col','pe','at']);
  expect(countries).toEqual([ 'Austria', 'Peru', 'Germany', 'Colombia' ]);
});



it('showDetail function works correctly', async () => {
  const country = await API.showDetail(['Germany']);
  expect(country).toEqual(
    {
      'Borders': [
        'Belgium',
        'Czechia',
        'Austria',
        'France',
        'Luxembourg',
        'Denmark',
        'Switzerland',
        'Poland',
        'Netherlands',
      ],
      'Capital':  [
        'Berlin',
      ],
      'Currencies': undefined,
      'Languages':  [
        'German',
      ],
      'Population':expect.any(String),
      'Region': 'Europe',
      'Subregion': 'Western Europe',
      'Tld': '.de',
      'flag': 'https://flagcdn.com/w320/de.png',
      'name': 'Germany',
      'nativeName': 'Deutschland',
    });
});