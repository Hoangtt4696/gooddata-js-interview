// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useMemo, Suspense } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { Model } from "@gooddata/react-components";
import GrossProfit from "./containers/GrossProfit";
import "@gooddata/react-components/styles/css/main.css";
import {
  GROSS_PROFIT_MEASURE,
  DATE_ATTRIBUTE_IN_MONTHS,
  DATE_ATTRIBUTE,
  CURRENT_YEAR,
} from "./config/goodDataConfig";
import "./App.css";

const Page = () => {
  const { t } = useTranslation();
  const measures = useMemo(() => [
    Model.measure(GROSS_PROFIT_MEASURE)
      .localIdentifier("m1")
      .alias(t("chartAlias")),
  ]);
  const viewBy = useMemo(() =>
    Model.attribute(DATE_ATTRIBUTE_IN_MONTHS).localIdentifier("a1")
  );
  const monthFilter = (selectedMonth) => {
    const startDate = moment([CURRENT_YEAR, selectedMonth - 1]).format(
      "YYYY-MM-DD"
    );
    const endDate = moment(startDate).endOf("month").format("YYYY-MM-DD");

    return [Model.absoluteDateFilter(DATE_ATTRIBUTE, startDate, endDate)];
  };

  return (
    <GrossProfit
      projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
      onFilters={monthFilter}
      measures={measures}
      viewBy={viewBy}
    />
  );
};

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}
