
// Exchange rate (1 USD = 83 INR approximately as of 2024)
const USD_TO_INR_RATE = 83;

export const convertToRupees = (amountInDollars: number): string => {
  const amountInRupees = amountInDollars * USD_TO_INR_RATE;
  return `₹${amountInRupees.toLocaleString('en-IN')}`;
};
