// Define a function to get the description of San Francisco
export default function getSanFranciscoDescription() {
  // Define the year variable and assign the value 2017
  const year = 2017;

  // Define the budget object containing income, GDP, and capita data
  const budget = {
    income: '$119,868', 
    gdp: '$154.2 billion', 
    capita: '$178,479',     
  };

  // Return a string containing the description of San Francisco
  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
