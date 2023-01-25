window.addEventListener('DOMContentLoaded', () => {
  const tabParent = document.querySelector('.tabheader__items'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    loader = document.querySelector('.loader');

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1000);

  function hidetabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    });

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active')
    })
  }

  function showtabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabheader__item_active')
  }

  hidetabContent();
  showtabContent();

  tabParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hidetabContent();
          showtabContent(idx);
        }
      })
    }
  })

  // Timer

  const deadline = '2023-02-01',
    UTC = +5;

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds
    const timer = Date.parse(endtime) - Date.parse(new Date())

    if (timer <= 0) {
      days = 0
      hours = 0
      minutes = 0
      seconds = 0
    } else {
      days = Math.floor(timer / (1000 * 60 * 60 * 24))
      hours = Math.floor(((timer / (1000 * 60 * 60)) % 24) - UTC)
      minutes = Math.floor((timer / 1000 / 60) % 60)
      seconds = Math.floor((timer / 1000) % 60)
    }

    return { timer, days, hours, minutes, seconds }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updatClock, 1000)

    updatClock()

    function updatClock() {
      const t = getTimeRemaining(endtime)

      days.innerHTML = getZero(t.days)
      hours.innerHTML = getZero(t.hours)
      minutes.innerHTML = getZero(t.minutes)
      seconds.innerHTML = getZero(t.seconds)

      if (t.timer <= 0) {
        clearInterval(timeInterval)
      }
    }
  }

  setClock('.timer', deadline)



  // let countdownTime = `${days} kun, ${hours} soat, ${minutes} minut, ${seconds} soniya`;

  // setInterval(() => {
  //   console.log(`Qolgan vaqt ${countdownTime}`);
  // }, 1000);




  // let start = new Date;

  // for (let i = 0; i < 1000; i++) {
  //   const some = i ** 3;
  // }

  // let end = new Date;
  // console.log(end - start);
});

