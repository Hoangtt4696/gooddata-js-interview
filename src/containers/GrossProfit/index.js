// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ColumnChart } from "@gooddata/react-components";
import Select from "../../components/Select";
import Title from "../../components/Title";

const GrossProfit = (props) => {
  const { t } = useTranslation();
  const { projectId, measures, viewBy, onFilters } = props;
  const [selectedMonth, setSelectedMonth] = useState(1);
  const handleChangeMonth = useCallback((e) => {
    setSelectedMonth(e.target.value);
  });
  const monthFilter = useMemo(() => {
    return onFilters(selectedMonth);
  }, [selectedMonth]);
  const monthList = useMemo(() => {
    const options = [
      { value: 1, label: t("month.jan") },
      { value: 2, label: t("month.feb") },
      { value: 3, label: t("month.mar") },
      { value: 4, label: t("month.apr") },
      { value: 5, label: t("month.may") },
      { value: 6, label: t("month.jun") },
      { value: 7, label: t("month.jul") },
      { value: 8, label: t("month.aug") },
      { value: 9, label: t("month.sep") },
      { value: 10, label: t("month.oct") },
      { value: 11, label: t("month.nov") },
      { value: 12, label: t("month.dec") },
    ];

    return (
      <Select defaultValue={1} options={options} onChange={handleChangeMonth} />
    );
  });

  return (
    <div className="App">
      <Title>
        <div className="title-gross-in-month">
          {t("titleGrossProfitInMonth")} {monthList} 2016
        </div>
      </Title>
      <div>
        <ColumnChart
          measures={measures}
          filters={monthFilter}
          projectId={projectId}
        />
      </div>
      <Title label={t("titleGrossProfitAll")} />
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
