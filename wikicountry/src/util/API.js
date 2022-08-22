const axios = require('axios').default;



export const API = {

  async init(REGION = 'all') {

    const endpoint = REGION === 'all' ? 'https://restcountries.com/v3.1/all' :
      `https://restcountries.com/v3.1/region/${REGION}`;

    try {
      const response = await axios.get(endpoint);
      let top = Math.floor(Math.random() * (response.data.length - 20) + 20);
      const res = response.data.slice(top - 20, top);

      return res.map(results => ({
        name: results.name.common,
        Population: new Intl.NumberFormat().format(results.population),
        Region: results.region,
        Capital: results.capital ? results.capital : [''],
        flag: results.flags.png,
      }));


    } catch (error) {
      console.error(error);
    }
  },

  async search(name) {

    const endpoint = `https://restcountries.com/v3.1/name/${name}`;

    try {
      const response = await axios.get(endpoint);
      return response.data.map(results => ({
        name: results.name.common,
        Population: new Intl.NumberFormat().format(results.population),
        Region: results.region,
        Capital: results.capital[0],
        flag: results.flags.png,
      }));


    } catch (error) {
      console.error(error);
    }
  },

  // async namesFinder(codes) {

  //   try {

  //     codes = typeof (codes) === 'string' ? [codes] : codes;
  //     const res = await Promise.all(codes.map(async (x) => {
  //       const response = await this.nameFinder(x).then((Results) => {
  //         return Results;
  //       });
  //       return response;
  //     }));
  //     console.log(res);
  //     return res;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },

  // async nameFinder(code) {

  //   const endpoint = `https://restcountries.com/v3.1/alpha/${code}`;

  //   try {
  //     const response = await axios.get(endpoint);
  //     const res = await response.data[0].name.common;
  //     return res;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },

  async codesToNames(codes) {


    codes = typeof (codes) === 'string' ? [codes] : codes;
    let codesString = '';
    codes.forEach(x => {
      codesString += `${x},`;
    });

    const endpoint = `https://restcountries.com/v3.1/alpha?codes=${codesString}`;

    try {
      const response = await axios.get(endpoint);
      const countries = response.data.map(country => {
        return country.name.common;

      });
      return countries;
    } catch (error) {
      console.error(error);
    }
  },

  async showDetail(name) {

    const endpoint = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

    try {
      const response = await axios.get(endpoint);
      const res = response.data[0];
      const borders = await this.codesToNames(res.borders);

      return {
        flag: res.flags.png,
        name: res.name.common,
        nativeName: Object.values(res.name.nativeName).slice(-1)[0].common,
        Population: new Intl.NumberFormat().format(res.population),
        Region: res.region,
        Subregion: res.subregion,
        Capital: res.capital,
        Tld: res.tld && res.tld[0],
        Currencies: Object.values(res.currencies).name && Object.values(res.currencies)[0].name,
        Languages: Object.values(res.languages),
        Borders: borders,
      };

    } catch (error) {
      console.error(error);
    }

  },
};