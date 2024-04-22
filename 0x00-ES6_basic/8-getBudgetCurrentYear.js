// Define a function to retrieve the current year
function getCurrentYear() {
  // Create a new Date object to get the current date and time
  const date = new Date();

  // Return the current year using the getFullYear method
  return date.getFullYear();
}

// Define a function to get the budget for the current year
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Create a budget object with keys representing income, GDP, and capita for the current year
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,   
    [`capita-${getCurrentYear()}`]: capita,
  };

  // Return the budget object
  return budget;
}

