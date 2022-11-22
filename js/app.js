const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");


console.log(tabsParent);

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    console.log(target);
    if (target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target === item) {
          console.log(i);
          hideTabContent();
          showTabContent(i);
        }
      });
    }
});

let slides = 0;

function autoSlide () { 
  slides++
  if (slides > 3 ) {
    slides = 0
  }
  hideTabContent();
  showTabContent(slides);
}

setInterval (autoSlide,2000); 





const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  };
  
  modalTrigger.addEventListener("click", openModal);
  
  const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  };
  
  closeModalBtn.addEventListener("click", closeModal);


const scrollModal = () => {
  const page = document.documentElement
  if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
    openModal();
  }
}
window.addEventListener("scroll",() =>{
  scrollModal();
});





const forms = document.querySelectorAll("form")












