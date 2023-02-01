import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix, { Notify } from 'notiflix';

let selectedTime = null;
const refs = {
inputEl: document.querySelector('#datetime-picker'),
btnStart: document.querySelector('button[data-start]'),
days: document.querySelector('span[data-days]'),
hours: document.querySelector('span[data-hours]'),
minutes: document.querySelector('span[data-minutes]'),
seconds: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      selectedDates[0] = new Date();
      
    } else {
        selectedTime = selectedDates[0];
      refs.btnStart.disabled = false;

    }
  },
};

flatpickr(refs.inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

class Timer {
    constructor()
    {
        this.timerId = null; 
        this.isActive = false;
      refs.btnStart.disabled = true;
    }

startTimer() {
    if (this.isActive) {
        return;
    }

    this.isActive = true;
    this.timerId = setInterval(() => {
        const currentTime = Date.now();
        const delta = selectedTime - currentTime;
        const components = convertMs(delta);
        this.updateComponents(components);
        if (delta <= 0) {
            this.stopTimer();
        }
    }, 1000);
}
updateComponents({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }

  stopTimer() {
    cleanInterval(this.timerId);
  }
}

const timer = new Timer();
refs.btnStart.addEventListener('click', () => timer.startTimer());

