// Header JS
// Its all for rendering and adding active class
const titleContent = document.querySelector(".title__content");
const titleContainer = document.querySelector(".header__title_filter");
const titleItem = titleContainer.getElementsByClassName("title_filter_item");
let value = "Hosting";
const headerDate = [
  {
    id: 1,
    title: "Premium Web Hosting for Your Website",
    desc: "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
    category: "Hosting",
  },
  {
    id: 2,
    title: "Domain Block Hosting for Your Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita amet voluptate quas dignissimos.",
    category: "Domain",
  },
  {
    id: 3,
    title: "SEO Block Hosting for Your Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita amet voluptate quas dignissimos.",
    category: "SEO",
  },
  {
    id: 4,
    title: "Email Block Hosting for Your Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita amet voluptate quas dignissimos..",
    category: "Email",
  },
];
function FilterHeader(val) {
  value = val;
  RenderingHeader();
}
function RenderingHeader() {
  const filteredDate = headerDate.filter((item) => item.category == value);
  filteredDate.map((item) => {
    titleContent.innerHTML = `
            <h1 class='header_title'>${item.title}</h1>
            <p>${item.desc}</p>
        `;
  });
  for (var i = 0; i < titleItem.length; i++) {
    titleItem[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("title_active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(
          " title_active",
          ""
        );
      }
      this.className += " title_active";
    });
  }
}
RenderingHeader();
// ---------------------------------------------------------------------------

const mediaNav = document.querySelector(".media__nav_group");
function HandleToggle() {
  mediaNav.classList.toggle("hidden");
}
// -------------------------------------------------------------

// US JS
const data = [
  {
    id: 1,
    title: "99.9% Uptime",
    desc: `We Keep Your Web build Online 24x7x365.
    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.`,
    image: "../Assets/time.png",
  },
  {
    id: 2,
    title: "Blazing Fast Web Hosting",
    desc: `We Keep Your Web build Online 24x7x365.
    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.`,
    image: "../Assets/cloudIcon.png",
  },
  {
    id: 3,
    title: "Free SSL Certificates",
    desc: `We Keep Your Web build Online 24x7x365.
    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.`,
    image: "../Assets/diagn.png",
  },
  {
    id: 4,
    title: "24x7 Friendly Support",
    desc: `We Keep Your Web build Online 24x7x365.
    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.`,
    image: "../Assets/supportIcon.png",
  },
];
const cardsContainer = document.querySelector(".us_cards");

function DataRendering() {
  data.map((item) => {
    cardsContainer.innerHTML += `
      <ul class='us_card'>
        <li class='us_card_header'>
          <img src='${item.image}' />
        </li>
        <li class='us_card_body'>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </li>
      </ul>
    `;
  });
}

DataRendering();
// ---------------------------------------------------------

// Pricing JS

const circle = document.querySelector(".changing_circle");
let boolean = true;
function toggleMove() {
  boolean = !boolean;
  if (boolean === false) {
    circle.classList.add("left");
    circle.classList.remove("right");
  } else {
    circle.classList.remove("left");
    circle.classList.add("right");
  }
}
let categoryPrice = "Basic";
const priceContainer = document.querySelector(".pricing__filter");
const priceItem = priceContainer.getElementsByClassName("filter__item");
const priceParentBox = document.querySelector(".pricing__cards");
const priceData = [
  {
    id: 1,
    title: "Starter",
    price: "$2.80",
    type: "Basic",
  },
  {
    id: 2,
    title: "Standard",
    price: "$2.80",
    type: "Basic",
  },
  {
    id: 3,
    title: "Suprem",
    price: "$2.80",
    type: "Basic",
  },
  {
    id: 11,
    title: "Starter PRO",
    price: "$4.80",
    type: "Premium",
  },
  {
    id: 22,
    title: "Standart PRO",
    price: "$6.80",
    type: "Premium",
  },
  {
    id: 33,
    title: "Suprem PRO",
    price: "$8.80",
    type: "Premium",
  },
];
function filterPrice(val) {
  categoryPrice = val;
  filteredPrices();
}
function filteredPrices() {
  priceParentBox.innerHTML = "";
  const filteredPrices = priceData.filter((item) => {
    return item.type == categoryPrice;
  });
  filteredPrices.map((item) => {
    priceParentBox.innerHTML += 
    `
      <div class='price__card'>
        <div class='price__card_header'>
          <h2>${item.title}</h2>
          <p class='description'>with all your customers via all conversation channels in one central dashboard.</p>
          <div class='price__current'>
            <p>${item.price}</p>
            <span>Per month</span>
          </div>
          <button>Choose this Plan</button>
        </div>
        <div class='price__card_body'>
          <ul class='price__card_group'>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              2GB SSD
            </li>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              10GB Bandwidth
            </li>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              15 Email Accounts
            </li>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              Unlimited Database
            </li>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              4 Subdomains
            </li>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              1 Parked Domain
            </li>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              2 Websites
            </li>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              Free SSL
            </li>
            <li class='price__card_item'>
              <i class='bx bx-check'></i>
              Softaculous
            </li>
          </ul>
        </div>
      </div>
    `;
  });
  for (var i = 0; i < priceItem.length; i++) {
    priceItem[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("price_active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(
          " price_active",
          ""
        );
      }
      this.className += " price_active";
    });
  }
}
filteredPrices();
toggleMove();

// -----------------------------------------------------------------