const priceFormatter = new Intl.NumberFormat('en-GB', {
  currency: 'GBP',
  maximumSignificantDigits: 2,
  style: 'currency',
});

export default priceFormatter;
