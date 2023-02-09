import React from "react";

const FormatCurrency = ({ price }) => {
  return  Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price / 100);
};

export default FormatCurrency;
