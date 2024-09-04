document.addEventListener('click', (e) => {
  const headerInput = document.querySelector('.header__input');
  const inputLoope = document.querySelector('.label__loope');
  let currentElement = e.target;

  headerInput.addEventListener('click', () => {
    if (headerInput !== '') {
      inputLoope.style = 'fill: #a65cf0';
    }
  });
  if (currentElement !== headerInput) {
    inputLoope.style = 'fill: #999999';
  };
});

const tabs = document.querySelectorAll('.tabs__nav');
const catalogCard = document.querySelectorAll('.catalog__card-wrp');

tabs.forEach((e) => {
  e.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabs.forEach((btn) => {
      btn.classList.remove('tabs__nav--active')
    });
    e.currentTarget.classList.add('tabs__nav--active');

    catalogCard.forEach((e) => {
      e.classList.remove('catalog__card-wrp--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__card-wrp--active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new window.JustValidate('.feedback__form', {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid #FB0914',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#FB0914',
    },
    focusInvalidField: true,
    lockForm: true,
  })

  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7(999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.feedback__input-name', [
      {
        rule: 'required',
        errorMessage: "Заполните имя"
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: "Вы не ввели имя"
      },
      {
        rule: 'maxLength',
        value: 40,
        errorMessage: "Вы ввели больше чем положено"
      },
      {
        rule: 'customRegexp',
        value: '^[A-zА-яЁё]+$',
        errorMessage: "Недопустимый формат"
      }
    ])
    .addField('.feedback__input-phone', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Заполните номер телефона'
    }])
    .addField('.feedback__input-email', [
      {
        rule: 'required',
        errorMessage: "Заполните Email"
      },
      {
        rule: 'email',
        errorMessage: "Недопустимый формат"
      },
    ])
})

document.addEventListener('click', (e) => {
  let currentElement = e.target;
  if (!currentElement.closest('.feedback__input')) {
    document.querySelectorAll('.feedback__input').forEach(el => {
      if (el != currentElement) {
        el.classList.remove('is-invalid');
      }
    })
    document.querySelectorAll('.just-validate-error-label').forEach(el => {
      el.remove();
    })
  };
});

const mainHtml = document.querySelector('.main');
const catalogHtml = document.querySelector('.catalog');
const productCardHtml = document.querySelector('.product-card');
const cooperationHtml = document.querySelector('.cooperation');
const catalogBtn = document.querySelector('.nav__item-catalog');
const breadcrumbMainReturn = document.querySelectorAll('.breadcrumb__main-return');
const highRatingBtn = document.querySelectorAll('.high-rating__btn');
const footerItemSuppliers = document.querySelector('.footer__item-suppliers');
const logo = document.querySelector('.logo-link');

catalogBtn.addEventListener('click', () => {
  mainHtml.classList.add('main--none');
  catalogHtml.classList.add('catalog--show');
  productCardHtml.classList.remove('product-card--show');
  cooperationHtml.classList.remove('cooperation--show');
})

footerItemSuppliers.addEventListener('click', () => {
  mainHtml.classList.add('main--none');
  cooperationHtml.classList.add('cooperation--show');
  catalogHtml.classList.remove('catalog--show');
  productCardHtml.classList.remove('product-card--show');

})

breadcrumbMainReturn.forEach((e) => {
  e.addEventListener('click', () => {
    mainHtml.classList.remove('main--none');
    catalogHtml.classList.remove('catalog--show');
    productCardHtml.classList.remove('product-card--show');
    cooperationHtml.classList.remove('cooperation--show');
  })
})

highRatingBtn.forEach((e) => {
  e.addEventListener('click', () => {
    mainHtml.classList.add('main--none');
    productCardHtml.classList.add('product-card--show')
  })
})

logo.addEventListener('click', () => {
  mainHtml.classList.remove('main--none');
  catalogHtml.classList.remove('catalog--show');
  productCardHtml.classList.remove('product-card--show');
  cooperationHtml.classList.remove('cooperation--show');
})




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgaGVhZGVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbnB1dCcpO1xuICBjb25zdCBpbnB1dExvb3BlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsX19sb29wZScpO1xuICBsZXQgY3VycmVudEVsZW1lbnQgPSBlLnRhcmdldDtcblxuICBoZWFkZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaGVhZGVySW5wdXQgIT09ICcnKSB7XG4gICAgICBpbnB1dExvb3BlLnN0eWxlID0gJ2ZpbGw6ICNhNjVjZjAnO1xuICAgIH1cbiAgfSk7XG4gIGlmIChjdXJyZW50RWxlbWVudCAhPT0gaGVhZGVySW5wdXQpIHtcbiAgICBpbnB1dExvb3BlLnN0eWxlID0gJ2ZpbGw6ICM5OTk5OTknO1xuICB9O1xufSk7XG5cbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fbmF2Jyk7XG5jb25zdCBjYXRhbG9nQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19jYXJkLXdycCcpO1xuXG50YWJzLmZvckVhY2goKGUpID0+IHtcbiAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhdGg7XG5cbiAgICB0YWJzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX25hdi0tYWN0aXZlJylcbiAgICB9KTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgndGFic19fbmF2LS1hY3RpdmUnKTtcblxuICAgIGNhdGFsb2dDYXJkLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnY2F0YWxvZ19fY2FyZC13cnAtLWFjdGl2ZScpXG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2dfX2NhcmQtd3JwLS1hY3RpdmUnKTtcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCB2YWxpZGF0aW9uID0gbmV3IHdpbmRvdy5KdXN0VmFsaWRhdGUoJy5mZWVkYmFja19fZm9ybScsIHtcbiAgICBlcnJvckZpZWxkQ3NzQ2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICBlcnJvckZpZWxkU3R5bGU6IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRkIwOTE0JyxcbiAgICB9LFxuICAgIGVycm9yTGFiZWxDc3NDbGFzczogJ2lzLWxhYmVsLWludmFsaWQnLFxuICAgIGVycm9yTGFiZWxTdHlsZToge1xuICAgICAgY29sb3I6ICcjRkIwOTE0JyxcbiAgICB9LFxuICAgIGZvY3VzSW52YWxpZEZpZWxkOiB0cnVlLFxuICAgIGxvY2tGb3JtOiB0cnVlLFxuICB9KVxuXG4gIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddXCIpO1xuICBjb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soXCIrNyg5OTkpLTk5OS05OS05OVwiKTtcbiAgaW0ubWFzayhzZWxlY3Rvcik7XG5cbiAgdmFsaWRhdGlvblxuICAgIC5hZGRGaWVsZCgnLmZlZWRiYWNrX19pbnB1dC1uYW1lJywgW1xuICAgICAge1xuICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0JfQsNC/0L7Qu9C90LjRgtC1INC40LzRj1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBydWxlOiAnbWluTGVuZ3RoJyxcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCLQktGLINC90LUg0LLQstC10LvQuCDQuNC80Y9cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ21heExlbmd0aCcsXG4gICAgICAgIHZhbHVlOiA0MCxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcItCS0Ysg0LLQstC10LvQuCDQsdC+0LvRjNGI0LUg0YfQtdC8INC/0L7Qu9C+0LbQtdC90L5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXG4gICAgICAgIHZhbHVlOiAnXltBLXrQkC3Rj9CB0ZFdKyQnLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRglwiXG4gICAgICB9XG4gICAgXSlcbiAgICAuYWRkRmllbGQoJy5mZWVkYmFja19faW5wdXQtcGhvbmUnLCBbe1xuICAgICAgcnVsZTogXCJmdW5jdGlvblwiLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgcGhvbmUgPSBzZWxlY3Rvci5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xuICAgICAgICByZXR1cm4gcGhvbmUubGVuZ3RoID09PSAxMFxuICAgICAgfSxcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnXG4gICAgfV0pXG4gICAgLmFkZEZpZWxkKCcuZmVlZGJhY2tfX2lucHV0LWVtYWlsJywgW1xuICAgICAge1xuICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0JfQsNC/0L7Qu9C90LjRgtC1IEVtYWlsXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdlbWFpbCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCLQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCXCJcbiAgICAgIH0sXG4gICAgXSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbGV0IGN1cnJlbnRFbGVtZW50ID0gZS50YXJnZXQ7XG4gIGlmICghY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmZlZWRiYWNrX19pbnB1dCcpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZlZWRiYWNrX19pbnB1dCcpLmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsICE9IGN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qdXN0LXZhbGlkYXRlLWVycm9yLWxhYmVsJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5yZW1vdmUoKTtcbiAgICB9KVxuICB9O1xufSk7XG5cbmNvbnN0IG1haW5IdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbmNvbnN0IGNhdGFsb2dIdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2cnKTtcbmNvbnN0IHByb2R1Y3RDYXJkSHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNhcmQnKTtcbmNvbnN0IGNvb3BlcmF0aW9uSHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29wZXJhdGlvbicpO1xuY29uc3QgY2F0YWxvZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2l0ZW0tY2F0YWxvZycpO1xuY29uc3QgYnJlYWRjcnVtYk1haW5SZXR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnJlYWRjcnVtYl9fbWFpbi1yZXR1cm4nKTtcbmNvbnN0IGhpZ2hSYXRpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaC1yYXRpbmdfX2J0bicpO1xuY29uc3QgZm9vdGVySXRlbVN1cHBsaWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX2l0ZW0tc3VwcGxpZXJzJyk7XG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28tbGluaycpO1xuXG5jYXRhbG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWluSHRtbC5jbGFzc0xpc3QuYWRkKCdtYWluLS1ub25lJyk7XG4gIGNhdGFsb2dIdG1sLmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2ctLXNob3cnKTtcbiAgcHJvZHVjdENhcmRIdG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtY2FyZC0tc2hvdycpO1xuICBjb29wZXJhdGlvbkh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnY29vcGVyYXRpb24tLXNob3cnKTtcbn0pXG5cbmZvb3Rlckl0ZW1TdXBwbGllcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1haW5IdG1sLmNsYXNzTGlzdC5hZGQoJ21haW4tLW5vbmUnKTtcbiAgY29vcGVyYXRpb25IdG1sLmNsYXNzTGlzdC5hZGQoJ2Nvb3BlcmF0aW9uLS1zaG93Jyk7XG4gIGNhdGFsb2dIdG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2ctLXNob3cnKTtcbiAgcHJvZHVjdENhcmRIdG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtY2FyZC0tc2hvdycpO1xuXG59KVxuXG5icmVhZGNydW1iTWFpblJldHVybi5mb3JFYWNoKChlKSA9PiB7XG4gIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFpbkh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tbm9uZScpO1xuICAgIGNhdGFsb2dIdG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2ctLXNob3cnKTtcbiAgICBwcm9kdWN0Q2FyZEh0bWwuY2xhc3NMaXN0LnJlbW92ZSgncHJvZHVjdC1jYXJkLS1zaG93Jyk7XG4gICAgY29vcGVyYXRpb25IdG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2Nvb3BlcmF0aW9uLS1zaG93Jyk7XG4gIH0pXG59KVxuXG5oaWdoUmF0aW5nQnRuLmZvckVhY2goKGUpID0+IHtcbiAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWluSHRtbC5jbGFzc0xpc3QuYWRkKCdtYWluLS1ub25lJyk7XG4gICAgcHJvZHVjdENhcmRIdG1sLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtY2FyZC0tc2hvdycpXG4gIH0pXG59KVxuXG5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWluSHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1ub25lJyk7XG4gIGNhdGFsb2dIdG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2ctLXNob3cnKTtcbiAgcHJvZHVjdENhcmRIdG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtY2FyZC0tc2hvdycpO1xuICBjb29wZXJhdGlvbkh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnY29vcGVyYXRpb24tLXNob3cnKTtcbn0pXG5cblxuXG4iXX0=
