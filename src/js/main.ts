import { fadeOutElement, getById, insertCurrentYear } from './utilities';

import AOS from 'aos';

const preloader = getById('preloader');
const rightsReserved = getById('rightsReserved');

document.addEventListener('DOMContentLoaded', () => {
  // initialize animate onScroll
  AOS.init({ once: true });
  // set header height
  // setHeaderHeightAndMargin()

  // bootstrap forms
  const forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event: SubmitEvent) {
        event.preventDefault(),
          event.stopPropagation(),
          form.classList.add('was-validated');
      },
      !1,
    );
  });

  preloader && fadeOutElement(preloader);
});

// btn scroll to up
const scrollBtn = getById('btn-scroll');
window.onscroll = function () {
  if (scrollBtn) {
    if (scrollY >= 400) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  }
};

scrollBtn?.addEventListener('click', function () {
  scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// insert current year in footer
rightsReserved && insertCurrentYear(rightsReserved);

//window.addEventListener("resize", setHeaderHeightAndMargin)

// display menu
function displayMenu() {
  const menu = getById('navbar-container');
  const open_btn = getById('menu-open');

  if (menu && open_btn) {
    menu.style.display = 'flex';
    open_btn.style.display = 'none';
  }
}
// close menu
function closeMenu() {
  const menu = getById('navbar-container');
  const open_btn = getById('menu-open');
  if (menu && open_btn) {
    menu.style.display = 'none';
    open_btn.style.display = 'block';
  }
}

const open_menu = getById('menu-open');
open_menu?.addEventListener('click', displayMenu);

const close_menu = getById('menu-close');
close_menu?.addEventListener('click', closeMenu);

// close the menu when click on link for the same page
const nav_items = document.getElementsByClassName('nav-item');
Array.from(nav_items).forEach((item) =>
  item.addEventListener('click', closeMenu),
);
