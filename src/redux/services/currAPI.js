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

const fetchRemove = async () => {
  const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencyResponse = await fetchCurrencies.json();
  delete currencyResponse.USDT;
  return currencyResponse;
};
export default { fetchCurr, fetchRemove };
