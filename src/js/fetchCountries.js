function fetchCountries(name, filter) {
  name.trim();
  const { officialName, capital, population, flag, languages } = filter;
  return fetch(
    `https://restcountries.com/v3.1/name/${name}/?fields=${officialName},${capital},${population},${flag},${languages}`
  );
}

export { fetchCountries };
