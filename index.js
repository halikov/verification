let labels = document.querySelectorAll('.form__label');
let radios = document.querySelectorAll('.form__radio');
let desc = document.querySelector('.form__label-desc');
let btn = document.querySelector('.button');

radios.forEach(el => {
  el.addEventListener('click', () => {
    desc.textContent = '';

    btn.textContent = '';

    let checked = document.querySelector('input:checked');

    let btnTxt;
    let txt;

    if (checked.id === 'sms') {
      txt = 'your mobile phone';
    } else {
      txt = 'your email';
    }

    desc.insertAdjacentText('beforeend', 'We’ll send a code to ' + txt + ' that can enter to verify your identity');

    if (checked.id === 'sms') {
      btnTxt = 'SMS';
    } else if (checked.id === 'email') {
      btnTxt = 'EMAIL';
    } else {
      btnTxt = '';
    }

    btn.insertAdjacentText('beforeend', 'Send ' + btnTxt + ' Code');
  });
});

