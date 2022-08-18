// PROGRESS BAR

const progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let winHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progressScroll = (winScroll / winHeight) * 100;

  progress.style.width = progressScroll + "%";
});


// PORTFOLIO

const filters = document.querySelectorAll(".portfolio__flag");
const portfolio_content = document.querySelector(".portfolio__cards");
const portfolio_btn = document.querySelector(".portfolio__btn");
let cards = document.getElementsByClassName("portfolio__item");
let on_hover = document.getElementsByClassName("on-hover");

const collection = [
    {
      title: "Magazine Designing",
      date: "25.02.2018",
      technology: "Photoshop, Figma",
      price: "100$",
      filters: "design",
      imgURL: "img/design_5.jpg",
      logoURL: "img/portfolio_clip_icon.png",
    },
    {
      title: "Logo Designing",
      date: "14.05.2020",
      technology: "Photoshop",
      price: "50$",
      filters: "logo",
      imgURL: "img/logo_1.jpg",
      logoURL: "img/portfolio_note_icon.png",
    },
    {
      title: "Rock Faze",
      date: "12.06.2019",
      technology: "Sketch Book",
      price: "50$",
      filters: "poster",
      imgURL: "img/poster_1.jpg",
      logoURL: "img/portfolio_note_icon.png",
    },
    {
      title: "Work Outside",
      date: "14.05.2020",
      technology: "Camera x500",
      price: "60$",
      filters: "photography",
      imgURL: "img/photography_2.jpg",
      logoURL: "img/portfolio_image_icon.png",
    },
    {
      title: "Clothes Designing",
      date: "12.11.2019",
      technology: "Fashion App",
      price: "90$",
      filters: "t-shirts",
      imgURL: "img/t-shirt_1.jpg",
      logoURL: "img/portfolio_tv_icon.png",
    },
    {
      title: "Art Design",
      date: "10.03.2018",
      technology: "Sketch Book",
      price: "50$",
      filters: "design",
      imgURL: "img/design_6.jpg",
      logoURL: "img/portfolio_clip_icon.png",
    },
    {
      title: "Retro Poster",
      date: "11.06.2020",
      technology: "Photoshop",
      price: "30$",
      filters: "poster",
      imgURL: "img/poster_2.jpg",
      logoURL: "img/portfolio_note_icon.png",
    },
    {
      title: "Home Work",
      date: "01.01.2019",
      technology: "Figma",
      price: "100$",
      filters: "design",
      imgURL: "img/design_7.jpg",
      logoURL: "img/portfolio_clip_icon.png",
    },
    {
      title: "Designing Tools",
      date: "08.05.2020",
      technology: "Photoshop",
      price: "60$",
      filters: "design",
      imgURL: "img/design_4.jpg",
      logoURL: "img/portfolio_clip_icon.png",
    },
    {
      title: "Peacefull Photoshoot",
      date: "13.12.2020",
      technology: "Camera xPro-500",
      price: "20$",
      filters: "photography",
      imgURL: "img/photography_1.jpg",
      logoURL: "img/portfolio_image_icon.png",
    },
    {
      title: "Start of Designing",
      date: "25.09.2018",
      technology: "Sketch Book",
      price: "10$",
      filters: "design",
      imgURL: "img/design_3.jpg",
      logoURL: "img/portfolio_clip_icon.png",
    },
    {
      title: "Videoshoot",
      date: "10.07.2020",
      technology: "Camera xProo-1500",
      price: "70$",
      filters: "videos",
      imgURL: "img/videos_1.jpg",
      logoURL: "img/portfolio_tv_icon.png",
    },
    {
      title: "Store Opening",
      date: "10.02.2020",
      technology: "Web",
      price: "150$",
      filters: "t-shirts",
      imgURL: "img/t-shirt_2.jpg",
      logoURL: "img/portfolio_image_icon.png",
    },
    {
      title: "Travel abroad",
      date: "10.05.2019",
      technology: "Web Services",
      price: "70$",
      filters: "design",
      imgURL: "img/design_2.jpg",
      logoURL: "img/portfolio_clip_icon.png",
    },
    {
      title: "Bookstore opening",
      date: "18.11.2020",
      technology: "Web",
      price: "100$",
      filters: "resources",
      imgURL: "img/resourses_1.jpg",
      logoURL: "img/portfolio_sound_icon.png",
    },
    {
      title: "Galleries are funny",
      date: "11.07.2018",
      technology: "Photoshop",
      price: "60$",
      filters: "design",
      imgURL: "img/design_1.jpg",
      logoURL: "img/portfolio_clip_icon.png",
    },
  ];

function createItem(photoURL, name, date, technology, price, logoURL) {
  return `<div class="portfolio__item item">
  <div class="item__photo-box">
      <img src="${photoURL}" alt="Photo" class="item__photo">
      <div class="item__hover on-hover">
          <div class="on-hover__text">
              <p class="on-hover__title">Назва: ${name}</p>
              <p class="on-hover__date">Дата: ${date}</p>
              <p class="on-hover__technology">Основні технології: ${technology}</p>
              <p class="on-hover__price">Ціна: ${price}</p>
          </div>
      </div>
  </div>
  <div class="item__info">
        <div class="item__circle">
            <img src="${logoURL}" alt="Card logo" class="item__logo">
        </div>
      <p class="item__name">${name.toUpperCase()}</p>
  </div>
</div>`;
}

function activeFlags(flags) {
  let activeFilters = [];
  flags.forEach((element) => {
    if (element.classList.contains("portfolio__flag_active")) {
      activeFilters.push(element);
    }
  });
  return activeFilters;
}

function addElem(imgURL, name, date, technology, price, logoURL) {
    let newItem = createItem(imgURL, name,  date, technology, price, logoURL);
    portfolio_content.innerHTML += newItem;
}

function checkElems(flags, items) {
  for (let i = items.length - 1; i >= 0; i--) {
    flags.forEach((flag) => {
      if (items[i].filters == flag.textContent) {
        addElem(
          items[i].imgURL,
          items[i].title,
          items[i].date,
          items[i].technology,
          items[i].price,
          items[i].logoURL
        );
      }
    });
  }
}

function clearContent() {
  while (portfolio_content.firstChild) {
    portfolio_content.removeChild(portfolio_content.firstChild);
  }
}

function contentOnHover(element) {
    element.firstElementChild.children[1].classList.add("on-hover_active");
}

function contentOffHover(element) {
    element.firstElementChild.children[1].classList.remove("on-hover_active");
}

window.addEventListener('load', () => {
    for (let i = collection.length - 1; i >= collection.length - 8; i--) {
        addElem(
          collection[i].imgURL,
          collection[i].title,
          collection[i].date,
          collection[i].technology,
          collection[i].price,
          collection[i].logoURL
        );
      }
})

filters.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("portfolio__flag_active");
    portfolio_btn.textContent = "BROWSE ALL";

    clearContent();
    let activeFilters = activeFlags(filters);
    checkElems(activeFilters, collection);

    if (activeFilters.length == filters.length) {
        portfolio_btn.classList.add("loaded");
        portfolio_btn.textContent = "HIDE PROJECTS";
    } else if (activeFilters.length == 0) {
      for (let i = collection.length - 1; i >= collection.length - 8; i--) {
        addElem(
          collection[i].imgURL,
          collection[i].title,
          collection[i].date,
          collection[i].technology,
          collection[i].price,
          collection[i].logoURL
        );
      }
    } else {
        portfolio_btn.classList.remove("loaded");
    }
    Array.from(cards).forEach((element) => {
        element.addEventListener("mouseover", () => {
            contentOnHover(element);
            });
        element.addEventListener("mouseleave", () => {
            contentOffHover(element);
        });
    });
  });
});

portfolio_btn.addEventListener("click", () => {
  if (portfolio_btn.classList.contains("loaded")) {
    portfolio_btn.classList.remove("loaded");
    portfolio_btn.textContent = "BROWSE ALL";
    clearContent();
    for (let i = collection.length - 1; i >= collection.length - 8; i--) {
      addElem(
        collection[i].imgURL,
        collection[i].title,
        collection[i].date,
        collection[i].technology,
        collection[i].price,
        collection[i].logoURL
      );
    }
    filters.forEach((flag) => {
      flag.classList.remove("portfolio__flag_active");
    });
  } else {
    filters.forEach((flag) => {
      flag.classList.add("portfolio__flag_active");
    });
    clearContent();
    for (let i = collection.length - 1; i >= 0; i--) {
      addElem(
        collection[i].imgURL,
        collection[i].title,
        collection[i].date,
        collection[i].technology,
        collection[i].price,
        collection[i].logoURL
      );
      portfolio_btn.classList.add("loaded");
      portfolio_btn.textContent = "HIDE PROJECTS";
    }
  }
  Array.from(cards).forEach((element) => {
    element.addEventListener("mouseover", () => {
        contentOnHover(element);
        });
    element.addEventListener("mouseleave", () => {
        contentOffHover(element);
    });
});
});

Array.from(cards).forEach((element) => {
    element.addEventListener("mouseover", () => {
        contentOnHover(element);
        });
    element.addEventListener("mouseleave", () => {
        contentOffHover(element);
    });
});


// MY BLOG --> LOADER

const windowHeight = document.documentElement.clientHeight;
const loadPosts = document.querySelector(".blog__content");

let posts = [
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/04.jpg" alt="Photo 4"></div>
<div class="post__content">
    <div class="post__title">Music soul</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // FUN, TRENDS, MUSIC</div>
        <div class="post__response">NO RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/05.jpg" alt="Photo 5"></div>
<div class="post__content">
    <div class="post__title">Take a walk</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // TRENDS, ENVIRONMENT</div>
        <div class="post__response">4 RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/06.jpg" alt="Photo 6"></div>
<div class="post__content">
    <div class="post__title">Magical creatures</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // NATURE, ANIMALS</div>
        <div class="post__response">1 RESPONSE</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/07.jpg" alt="Photo 7"></div>
<div class="post__content">
    <div class="post__title">Meditate to fulfill your soul</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // TRENDS, HEALTH</div>
        <div class="post__response">5 RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/08.jpg" alt="Photo 8"></div>
<div class="post__content">
    <div class="post__title">Plan you work day</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // TRENDS, WORK, WEB DESIGN</div>
        <div class="post__response">1 RESPONSE</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/09.jpg" alt="Photo 9"></div>
<div class="post__content">
    <div class="post__title">Save zoo</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // TRENDS, NATURE</div>
        <div class="post__response">NO RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/10.jpg" alt="Photo 10"></div>
<div class="post__content">
    <div class="post__title">Environment experts</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // TRENDS, NATURE</div>
        <div class="post__response">5 RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/11.jpg" alt="Photo 11"></div>
<div class="post__content">
    <div class="post__title">Save protests to save our future</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // TRENDS, FIGHT FOR RIGHTS</div>
        <div class="post__response">7 RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/12.jpg" alt="Photo 12"></div>
<div class="post__content">
    <div class="post__title">The mystery of woods</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // TRAVEL, TRENDS</div>
        <div class="post__response">3 RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/13.jpg" alt="Photo 13"></div>
<div class="post__content">
    <div class="post__title">Teamates are family</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // FUN, TEAM WORK</div>
        <div class="post__response">4 RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/14.jpg" alt="Photo 14"></div>
<div class="post__content">
    <div class="post__title">Find an adventure in books</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // FUN, TRENDS</div>
        <div class="post__response">1 RESPONSE</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
  `<div class="blog__post post" data-aos="fade-in" data-aos-duration="2000">
<div class="post__image-box"><img class="post__image" src="img/15.jpg" alt="Photo 15"></div>
<div class="post__content">
    <div class="post__title">Explore an island</div>
    <div class="post__description">
        <div class="post__about">JULY 28, 2014 // ADMIN // FUN, TRAVEL, TRENDS</div>
        <div class="post__response">6 RESPONSES</div>
    </div>
    <div class="post__text">It's not it to understand them in the objects we're playing. Products fulfilling a product more innovative, bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial correlation. Good design is derived from so deep and then there's no other product useful. <span class="post__more">(MORE…)</span></div>
</div>
</div>`,
];

const btn_blog = document.querySelector(".blog__btn");

btn_blog.addEventListener("click", () => {
  getContent();
});

window.addEventListener("scroll", () => {
  if (loadPosts.classList.contains("loading")) loadMore();
});

function loadMore() {
  const position = loadPosts.getBoundingClientRect().top + pageYOffset;
  const height = loadPosts.offsetHeight;

  if (pageYOffset > position + height - windowHeight) {
    getContent();
  }
}

function getContent() {
  loadPosts.classList.add("loading");

  if (posts.length > 0) {
    loadPosts.innerHTML += posts[0];
    posts.splice(0, 1);
    btn_blog.style.display = "none";
    btn_blog.innerHTML = "";
  }
}


// MY BLOG   -->  FADE IN/FADE OUT


// DARK/LIGHT MODE

const wrapper = document.querySelector(".wrapper");
const check = document.querySelector("#checkbox");

check.addEventListener("change", () => {
  wrapper.classList.toggle("dark");
});

let time = new Date();
let hours = time.getHours();

if ((hours >= 21 && hours <= 24) || (hours >= 0 && hours <= 6))
  wrapper.classList.add("dark");
else wrapper.classList.remove("dark");


// LOCAL STORAGE

const form = document.querySelector("form");
const message_box = document.querySelector(".message-box");

class User {
  constructor(name, email, subject, message) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }

  FormUser() {
    return {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    };
  }
}

function toLocalStorage(object) {
  let str = JSON.stringify(object);
  localStorage.setItem("USER", str);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#first-name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    const pattern_name = name.value[0].toUpperCase() + name.value.substr(1).toLowerCase();
    const regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex_subject = /\d/;
    const regex_happyAnim = /зробити замовлення/;

    if (pattern_name == name.value) {
        name.classList.remove("error");
        if (regex_email.test(email.value)) {
            email.classList.remove("error");
            if (!regex_subject.test(subject.value)) {
                subject.classList.remove("error");
                

                let user = new User(name.value, email.value, subject.value, message.value);
                let obj = user.FormUser();
                console.log(obj);
                toLocalStorage(obj);

                if(regex_happyAnim.test(subject.value.toLowerCase())) {
                    let confettiElement = document.getElementById('my-canvas');
                    let confettiSettings = { target: confettiElement };
                    let confetti = new ConfettiGenerator(confettiSettings);
                    confetti.render();

                    confettiElement.classList.add('active');
                    setTimeout(() => {
                        confettiElement.classList.remove('active');
                    }, 5000);

                    message_box.classList.add('message-box_active');
                    setTimeout(() => {
                        message_box.classList.remove('message-box_active');
                    }, 5000);
                }

                name.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";

            } else subject.classList.add("error");
        } else email.classList.add("error");
    } else name.classList.add("error");
});


// PRELOADER

window.addEventListener('load', () => {
    let count = 0;
    let counter = setInterval(function () {
   
      let countBox = document.querySelector('.count');
      if (count < 101) {
        countBox.textContent = count + '%';
        count++;
      } else {
        clearInterval(counter);
      }
    },50)
  
    setTimeout(function () {
  
      let preloader = document.querySelector('.preloader');
      if (!preloader.classList.contains('finish')) {
        preloader.classList.add('finish');
      }
    }, 5000);
  })


// SWIPER SLIDER

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

// AOS library
AOS.init();

// mobile menu

let burger = document.querySelector('.mobile-menu__burger');
let menu = document.querySelector('.header__menu');
let body = document.body;

burger.addEventListener('click',function() {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})

menu.addEventListener('click',function() {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})

// confetti

// let confettiElement = document.getElementById('my-canvas');
// let confettiSettings = { target: confettiElement };
// let confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();



// CHECK IF USER IS ACTIVE 


const question_box = document.querySelector('.question-box');
const question_btn = document.querySelector('.question-box__btn');

let inactiveTimeBtn = () => {
    let timer = setTimeout(() => {
        close();
    }, 5000);

    question_btn.addEventListener('click', stopTimer);

    function stopTimer() {
        clearTimeout(timer);
        question_box.classList.remove('question-box_active');
    }
};

let inactiveTime = () => {
    let timer;

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('onscroll', resetTimer);
  
    function resetTimer() {
        clearTimeout(timer);

        timer = setTimeout(() => {
            question_box.classList.add('question-box_active');

            inactiveTimeBtn();

        }, 60000);
    }
};
  
document.addEventListener('DOMContentLoaded', () => {
    inactiveTime();
});



function getRandomNum(maxValue) {
    return Math.floor(Math.random() * maxValue);
}

const generateHtml = (data) => {
    const html = `
        <div class="pokemon__name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="pokemon__details">
            <span>Ability: ${data.abilities[0].ability.name}</span>
            <span>Form: ${data.forms[0].name}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon__block')
    pokemonDiv.innerHTML = html;
}

function generateCard() {
    let idValue = getRandomNum(100);

    const apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        id: `${idValue}`,
    } 
    
    let apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;

    fetch(apiUrl)
    .then( data => data.json())
    .then( pokemon => generateHtml(pokemon))
}

const btn_generate = document.querySelector('.pokemon__generate');
btn_generate.addEventListener('click', generateCard);
const pokemon_wrapp = document.querySelector('.pokemon__wrapp')
const btnShow = document.querySelector('.pokemon');

btnShow.addEventListener('click', () => {
    btnShow.classList.toggle('pokemon_active')
    pokemon_wrapp.classList.toggle('pokemon__wrapp_active')
});



// const videoContainer = document.querySelector('.api-container__content');

// function createAPIBlock(item){
//   return `
// <div class="api-container__elem">
//   <a class="api-container__href" href="https://www.youtube.com/watch?v=${item.id.videoId}"></a>
//   <img src="${item.snippet.thumbnails.high.url}" alt="Video preview" class="api-container__photo">
//   <div class="api-container__on-hover">
//     <p class="api-container__video-title">Назва: ${item.snippet.title}</p>
//     <p class="api-container__channel">Канал: ${item.snippet.channelTitle}</p>
//     <p class="api-container__date">Дата: ${item.snippet.publishTime.slice(0, 10)}</p>
//   </div>
// </div>`
// }

// function addAPI(item) {
//   videoContainer.innerHTML += createAPIBlock(item);
// }

// fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCEu5BK8GijP2c0xZ6vZJ_hg&maxResults=3&order=date&key=AIzaSyDphoVuyXkmtiXMmdglXRFp-Mq44wZ5MSo")
// .then((data) => {
//   return data.json();
// }).then((obj) => {
  
//   return obj.items;
// }).then((videosArr) => {
//   videosArr.forEach(video => {
//     addAPI(video);
//   });
// })

// const videos = document.getElementsByClassName('api-container__elem');
// let test = [1,2,3,];
// console.log(videos);


// // Array.from(videos).forEach(element => {
// //   console.log(element);
// // });

// for(let i = 0; i < videos.length; i++) {
//   console.log(i);
//   //console.log(videos[i]);
// }