// import { Notify } from "notiflix";

// const delayInput = document.querySelector('input[name="delay"]');
// const stepInput = document.querySelector('input[name="step"]');
// const amountInput = document.querySelector('input[name="amount"]');
// const btnSubmit = document.querySelector('button[type="submit"]');

// btnSubmit.addEventListener('click', onBtnStartClick);

// function onBtnStartClick(e) {
//   e.preventDefault();

//   let delay = Number(delayInput.value);
//   let step = Number(stepInput.value);
//   let amount = Number(amountInput.value);

//   for (let position = 1; position <= amount; position += 1) {
//     createPromise(position, delay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delay += step;
//   }
// }

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

import Notiflix from 'notiflix';
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnCreatePromise = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

btnCreatePromise.addEventListener('click', e => {
  e.preventDefault();
  let firstDelay = Number(delay.value);
  let delayStep = Number(step.value);
  if (delay.value < 0 || step.value < 0 || amount.value <= 0) {
    return  Notiflix.Notify.warning('Please enter enter correct data');
}

  for (let i = 0; i < amount.value; i++) {
    createPromise(1 + i, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
