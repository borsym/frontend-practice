const summaryData = document.getElementById('summary-data');

async function getData() {
  return await fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

const data = getData();

data.then((res) => {
  res.map((item, i) => {
    const { category, score, icon } = item;
    const summaryItem = document.createElement('div');
    summaryItem.classList.add(`summary-items`);
    summaryItem.classList.add(`summary-items-${i}`);
    summaryItem.innerHTML = `
      <div class="summary-item__category">
        <img src="${icon}" alt="icon" class="summary-item__icon" />
        ${category}
      </div>
      <div class="summary-item__score">
        <b>${score}</b> / 100
      </div>
    `;
    summaryData.appendChild(summaryItem);
  });
});
