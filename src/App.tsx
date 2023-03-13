import { useEffect, useState } from "react";
import { getFinancialData } from "./api/client";
import { FinancialData } from "./types";

import { Candlestick } from "./components/Candlestick/Candlestick";

import "./App.css";

function App() {
  const [data, setData] = useState<FinancialData[]>();

  useEffect(() => {
    async function runEffect() {
      // fetch data from client
      const data = await getFinancialData();

      // set data to state
      setData(data);
    }

    // run the async function
    runEffect();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!data ? <p>Loading...</p> : <Candlestick financialData={data} />}
    </div>
  );
}

export default App;
