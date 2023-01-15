const fetchCurr = async () => {
  const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(urlAPI);
  const json = await response.json();
  const currencies = Object
    .keys(json)
    .map((coins) => coins)
    .filter((coinsRemoveUSDT) => coinsRemoveUSDT !== 'USDT');
  return currencies;
};

export default fetchCurr;
