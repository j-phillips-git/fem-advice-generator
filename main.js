const adviceId = document.getElementById('adviceId');
const advice = document.getElementById('adviceText');

async function getAdvice() {
  const randomAdvice = await fetch('https://api.adviceslip.com/advice', {
    cache: 'reload',
  });
  const data = await randomAdvice.json();
  displayData(data.slip);
}

function displayData(data) {
  advice.innerHTML = data.advice;
  adviceId.innerHTML = data.id;
}
