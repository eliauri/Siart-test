// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Модальное окно
import { modal } from "./functions/modal";

// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const arrivals = new Swiper('.arrivals__slider .swiper', {
  slidesPerView: 2,
  spaceBetween: 8,
  loop: true,
  pagination: {
    el: ".arrivals__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrivals-button-next",
    prevEl: ".arrivals-button-prev",
  },
  breakpoints: {
    560: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 16,
    },

  }
});


import { validateForms } from './functions/validate-forms';
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Поле обязательно к заполнению'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Поле обязательно к заполнению'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Поле обязательно к заполнению'
      },
      {
        rule: 'email',
        errorMessage: 'Неправильный формат почты'
      },
    ]
  },
  {
    ruleSelector: '.input-textarea',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Поле обязательно к заполнению'
      }
    ]
  },
  {
    ruleSelector: '.input-checkbox',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Подтвердите соглашение'
      }
    ]
  },

];
import { openModal } from "./functions/modal";
const afterForm = () => {
  openModal('successfully')
};

validateForms('.callback__form', rules1, afterForm);
