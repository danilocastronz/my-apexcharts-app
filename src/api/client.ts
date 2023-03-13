import { FinancialData } from "../types";

const apiUrl =
  "https://data.binance.com/api/v3/uiKlines?symbol=ETHBTC&interval=1d&startTime=1672574400000";

export const getFinancialData = () =>
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data: FinancialData[]) => data);
