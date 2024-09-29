const btn = document.querySelector('.j-btn-test');
const chart = document.querySelector('.j-chart');

btn.addEventListener('click', () => {
  chart.innerHTML = `
  <svg height="200" width="300">
    <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="0" y2="200"
    />
    <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="200"
      x2="300" y2="200"
    />
    <polyline style="fill:none;stroke:rgb(255,0,0);stroke-width:3"
      points="0,200 30,100 60,150 90,50 120,140 150,140 180,120 210,140 300,0"
    />
  </svg>
  `;
});