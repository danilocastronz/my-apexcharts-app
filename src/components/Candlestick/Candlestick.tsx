import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

import { FinancialData } from "../../types";

export const Candlestick = ({
  financialData,
}: {
  financialData: FinancialData[];
}) => {
  // use memoized value unless financial data changes
  const formattedData = useMemo(
    () =>
      financialData.map((data) => [
        data[0],
        [data[1], data[2], data[3], data[4]],
      ]),
    [financialData]
  );

  // build series object with formatted data
  const series = [
    {
      data: formattedData,
    },
  ] as ApexAxisChartSeries;

  // set candlestick chart options
  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "Ethereum / Bitcoin",
      align: "center",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  } as ApexCharts.ApexOptions;

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="candlestick"
      height={350}
    />
  );
};
