const rightAnswers = ["A", "A", "B", "B"];
const form = document.querySelector('.quiz-form');
const persantage = document.querySelector('span.text-primary');
const displayDiv = document.querySelector('.result')

form.addEventListener('submit', func => {
  func.preventDefault();
  let score = 0;
  let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  userAnswers.forEach((answer, index) => {
    if(answer === rightAnswers[index]){
      score += 25;
    }
  })
  scrollTo(0,0)
  persantage.textContent = `${score}%`
  displayDiv.classList.remove('d-none')

  let output = 0;
  const timer = setInterval(()=>{
    persantage.textContent = `${output}%`
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  },10)
})