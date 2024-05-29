function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const currentYear = getCurrentYear();

  budget[`income-${currentYear}`] = income;
  budget[`gdp-${currentYear}`] = gdp;
  budget[`capita-${currentYear}`] = capita;

  return budget;
}
