const itemsCounter = () => {
  const itemsContainer = document.getElementById('cards');
  const childCount = itemsContainer.childElementCount;

  const charts = document.getElementById('charts');
  charts.innerHTML = `Top Charts (${childCount})`;
};
export default itemsCounter;
