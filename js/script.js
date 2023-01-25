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

  // let start = new Date;

  // for (let i = 0; i < 1000; i++) {
  //   const some = i ** 3;
  // }

  // let end = new Date;
  // console.log(end - start);
});

