// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState, useCallback, useMemo } from "react";
import { ColumnChart, Model } from "@gooddata/react-components";
import Select from "../../components/Select";
import Title from "../../components/Title";
import {
  GROSS_PROFIT_MEASURE,
  DATE_ATTRIBUTE_IN_MONTHS,
  DATE_ATTRIBUTE,
} from "./goodDataConfig";
import "@gooddata/react-components/styles/css/main.css";

const _formatDate = (date) => {
  const monthText = `0${date.getMonth() + 1}`.slice(-2);
  const dayText = `0${date.getDate()}`.slice(-2);

  return `${date.getFullYear()}-${monthText}-${dayText}`;
};

const GrossProfit = () => {
  const projectId = "xms7ga4tf3g3nzucd8380o2bev8oeknp";
  const [selectedMonth, setSelectedMonth] = useState(1);
  const handleChangeMonth = useCallback((e) => {
    const { value } = e.target;
    setSelectedMonth(value);
  });
  const monthFilter = useMemo(() => {
    const startDate = new Date(2016, selectedMonth - 1);
    const endDate = new Date(2016, selectedMonth, 0);

    return [
      Model.absoluteDateFilter(
        DATE_ATTRIBUTE,
        _formatDate(startDate),
        _formatDate(endDate)
      ),
    ];
  }, [selectedMonth]);
  const measures = useMemo(() => [
    Model.measure(GROSS_PROFIT_MEASURE)
      .localIdentifier("m1")
      .alias("$ Gross Profit"),
  ]);
  const viewBy = useMemo(() =>
    Model.attribute(DATE_ATTRIBUTE_IN_MONTHS).localIdentifier("a1")
  );

  const monthList = useMemo(() => {
    const options = [
      { value: 1, label: "January" },
      { value: 2, label: "February" },
      { value: 3, label: "March" },
      { value: 4, label: "April" },
      { value: 5, label: "May" },
      { value: 6, label: "June" },
      { value: 7, label: "July" },
      { value: 8, label: "August" },
      { value: 9, label: "September" },
      { value: 10, label: "October" },
      { value: 11, label: "November" },
      { value: 12, label: "December" },
    ];

    return (
      <Select defaultValue={1} options={options} onChange={handleChangeMonth} />
    );
  });

  return (
    <div className="App">
      <Title>$ Gross Profit in month {monthList} 2016</Title>
      <div>
        <ColumnChart
          measures={measures}
          filters={monthFilter}
          projectId={projectId}
        />
      </div>
      <Title label={"$ Gross Profit - All months"} />
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </div>
  );
};

export default GrossProfit;
