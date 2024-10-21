
class AdviceApp {


  constructor() {
    this.id = -1;
    this.advice = "";
  }

  fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
        this.id = data.slip.id;
        this.advice = data.slip.advice;
        this.updateUI();
      })
      .catch(error => console.log(error));
  }

  updateUI() {
    document.querySelector(".heading1").textContent = this.advice;
  }
}

// Ensure the app object is globally accessible
const app = new AdviceApp();
