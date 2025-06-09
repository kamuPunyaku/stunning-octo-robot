console.log('Hello World!');

document.querySelectorAll(".button").forEach(button => {
  button.addEventListener('click',() => {
    const display = document.querySelector("#display");
    const value = button.textContent;
    if (value === '=') {
      if (display.value.trim() !== '') {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = '';
        };
      };
    } else if (value === 'AC') {
      display.value = "";
    } else {
      display.value += value;
    };
  });
});