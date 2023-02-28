"use strict"; // 이것을 사용하여 규칙에 어긋나는 코딩을 쓰면 바로 표시되도록 함

// make navbar transparent when it is on the top
//navbar에 querySelector를 해서 가져온 navbar 요소
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

//이벤트 등록
//스크롤이 될 때마다 등록한 함수를 호출한다
// () => -- 아무런 인자를 받지 않고 블럭을 실행
document.addEventListener("scroll", () => {
  //  console.log(window.scrollY); // window. scrolly  --스크롤 되는 y축 길이를 알려줌
  //  console.log('navbarHeight: ${navbarHeight}');

  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu

// navbar__menu 의 요소를 navbarMenu라는 변수에 할당한 다음
const navbarMenu = document.querySelector(".navbar__menu");
//클릭이 되면 등록한 함수 호출
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  } else {
    //console.log(event.target.dataset.link);  // 클릭되었을 때 타겟이 되는 거 표시
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
  }
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

//handle click on "contaccct me" button on home
const homeContactBtn = document.querySelector(".home_contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#Contact");
});

// Make home slowly fade to transparent as the window scrools down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowup = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    //arrowup에 있는 클래스를 추가해준다.
    arrowup.classList.add("visible");
  } else {
    arrowup.classList.remove("visible");
  }
});

//handle click on the "arrow up" button
arrowup.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }

  //Remove selection from the previous item and select the new one

  const active = document.querySelector(".category__Btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
