<template>
  <q-layout view="lHh Lpr lFf">
    <header class="header">
      <nav class="navigation">
        <ul class="menu">
          <li class="menu-item-up">
            <router-link to="/">
              <img class="logo" src="icons\logo.png" alt="Enaktif Logo" />
            </router-link>
          </li>
          <li class="menu-item-up">
            <div class="kategori-wrapper">
              <button class="cta-button">
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                  <line
                    y1="6"
                    x2="11"
                    y2="6"
                    stroke="#363232"
                    stroke-width="2"
                  ></line>
                  <line
                    y1="1"
                    x2="17"
                    y2="1"
                    stroke="#363232"
                    stroke-width="2"
                  ></line>
                  <line
                    y1="11"
                    x2="6"
                    y2="11"
                    stroke="#363232"
                    stroke-width="2"
                  ></line>
                </svg>
                Kategoriler
              </button>
              <div class="kategori-menu">
                <ul class="kategori-list">
                  <li>
                    <router-link to="/sinavyayinlari"
                      >Sınav Yayınları</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/puanyayinlari"
                      >Puan Yayınları</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/okumakitaplari"
                      >Okuma Kitapları</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/kirtasiyeofis"
                      >Kırtasiye-Ofis</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/kampanya">Kampanyalı Ürünler</router-link>
                  </li>
                  <li>
                    <router-link to="/tavsiye">Tavsiye Ürünler</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu-item-up">
            <div class="col-12 col-xl-5 order-3 order-xl-2">
              <div class="search">
                <form action="" data-selector="search-form">
                  <input
                    type="text"
                    name="q"
                    placeholder="Hangi ürünü aramıştınız?"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Hangi ürünü aramıştınız?'"
                    aria-label="Search"
                    class="auto-complete"
                    autocomplete="off"
                  />
                  <button>
                    <svg width="30" height="30" viewBox="0 0 33 32" fill="none">
                      <path
                        d="M21.9696 19.822L21.8806 19.9261L21.9763 20.0242L27.7742 25.965C28.2062 26.4076 28.192 27.1127 27.7429 27.5385L27.7429 27.5385C27.5312 27.7393 27.2522 27.85 26.957 27.85C26.6452 27.85 26.3555 27.7283 26.1397 27.5076L20.2978 21.5217L20.2093 21.431L20.1051 21.5032C18.4715 22.6342 16.5611 23.23 14.5555 23.23C9.21285 23.23 4.86973 18.948 4.86973 13.69C4.86973 8.43196 9.21285 4.15 14.5555 4.15C19.8981 4.15 24.2412 8.43196 24.2412 13.69C24.2412 15.9408 23.4374 18.103 21.9696 19.822ZM21.9753 13.69C21.9753 9.65574 18.6449 6.37782 14.5555 6.37782C10.466 6.37782 7.13557 9.65574 7.13557 13.69C7.13557 17.7242 10.466 21.0022 14.5555 21.0022C18.6449 21.0022 21.9753 17.7242 21.9753 13.69Z"
                        fill="#DD3087"
                        stroke="#DD3087"
                        stroke-width="0.3"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </li>
          <li class="menu-item-up">
            <div class="notification-wrapper">
              <button class="notification-button">
                <span class="notification-icon"> </span>
                <span class="notification-count">7</span>
              </button>
              <div class="notification-menu">
                <ul class="notification-list">
                  <li>Bic Kırtasiye Ürünleri %35 İndirimli</li>
                  <li>Web Programlama Kaynaklarında Özel İndirim</li>
                  <li>Butik Defterlerde Kaçırılmayacak Fırsat</li>
                  <li>2023 TYT Denemeleri Geldi</li>
                  <li>LGS 1. Dönem Denemeleri Şimdi Satışta</li>
                  <li>Fosforlu Kalemleri Keşfet</li>
                  <li>Tüm Alışverişlerde Geçerli Kupon Kodun: WEB2023</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu-item-up">
            <router-link to="/signin">
              <button class="notification-button">
                <span class="account-icon"> </span>
              </button>
            </router-link>
          </li>
          <li class="menu-item-up">
            <router-link to="sepet">
              <div class="shoppingcart-wrapper">
                <button class="shoppingcart-button">
                  <span class="shoppingcart-icon"></span>
                  <span class="cart-counter">{{ tasks.length }}</span>
                </button>
                <div class="shoppingcart-menu">
                  <div class="cart-page">
                    <div class="sepet-metin">Alışeriş Sepeti</div>
                    <div id="sc-menu" class="cart-items">
                      <li v-for="task in tasks" :key="task.id">
                        <div class="product">
                          <div class="row">
                            <img :src="task.kitapResim" />
                            <div class="col-6">{{ task.kitapIsim }}</div>
                            <div class="col-3" style="text-align: right">
                              {{ task.kitapFiyat }}
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div class="row">
                      <div class="cart-total col">
                        Toplam Fiyat: {{ getTotalPrice() }} TL
                      </div>
                      <button class="order-button col">Sepete Git</button>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <ul class="menu-down">
          <li class="menu-item-down">
            <router-link to="/sinavyayinlari">
              <img
                class="down-logo"
                src="icons\sinavlogo.png"
                alt="Sınav Yayınları Logo"
              />
              <div class="menu-item-down-text">Sınav Yayınları</div>
            </router-link>
          </li>
          <li class="menu-item-down">
            <router-link to="/puanyayinlari"
              ><img
                class="down-logo"
                src="icons\puanlogo.png"
                alt="Puan yayınları Logo"
              />
              <div class="menu-item-down-text">Puan Yayınları</div>
            </router-link>
          </li>
          <li class="menu-item-down">
            <router-link to="/okumakitaplari">
              <img
                class="down-logo"
                src="icons\kitap.png"
                alt="Okuma Kitapları"
              />
              <div class="menu-item-down-text">Kitap</div>
            </router-link>
          </li>
          <li class="menu-item-down">
            <router-link to="/kirtasiyeofis">
              <img
                class="down-logo"
                src="icons\kirtasiyeofis.png"
                alt="Kırtasiye Ofis Malzemeleri"
              />
              <div class="menu-item-down-text">Kırtasiye-Ofis</div>
            </router-link>
          </li>
          <li class="menu-item-down">
            <router-link to="/kampanya">
              <img
                class="down-logo"
                src="icons\kampanyaliurunler.png"
                alt="Kampanyalı Ürünler"
              />
              <div class="menu-item-down-text">Kampanyalı Ürünler</div>
            </router-link>
          </li>
          <li class="menu-item-down">
            <router-link to="/tavsiye">
              <img
                class="down-logo"
                src="icons\tavsiyeurunler.png"
                alt="Tavsiye Edilen Ürünler"
              />
              <div class="menu-item-down-text">Tavsiye Ürünler</div>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
      <footer class="footer">
        <div></div>

        <div class="footer-text">
          © Tüm hakları saklıdır. Kredi kartı bilgileriniz 256bit SSLsertifikası
          ile korunmaktadır.
        </div>
        <img
          src="//st.myideasoft.com/idea/js/75/themes/selftpl_6240b5b90722b/assets/uploads/footer_banks.png?revision=7.2.6.1-10-1686143434"
          alt=""
        />
        <div style="text-align: center; margin-top: 30px; margin-bottom: -20px">
          Ömer Can Bozkurt Tarafından Yapılmıştır
        </div>
      </footer>
    </q-page-container>
  </q-layout>
</template>

<style>
.header {
  top: -30px;
  left: 0;
  width: 100%;
  z-index: 2;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: white;
}

.logo {
  text-decoration: none;
  height: 90px;
  width: 202px;
}

.navigation {
  text-decoration: none;
  flex-grow: 1;
}

.menu {
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 15px;
  align-items: center;
  position: relative;
}

.menu-item-up {
  font-size: medium;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: space-between;
  color: #000000;
}

.menu-item-up a:visited {
  color: inherit;
}

.menu-item-up a {
  text-decoration: none;
}

.menu-item-up:hover {
  color: #ff6000;
}

.down-logo {
  text-decoration: none;
  height: 80px;
  width: 80px;
}

.menu-down {
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 25px;
  align-items: center;
  position: relative;
  background-color: #3632320a;
}

.menu-item-down {
  font-size: medium;
  text-decoration: none;
  text-align: center;
  margin-left: 50px;
  cursor: pointer;
  justify-content: space-between;
  color: #000000;
  z-index: 1;
}

.menu-item-down a:visited {
  color: inherit;
}

.menu-item-down a {
  text-decoration: none;
}

.menu-item-down:hover {
  color: #ff6000;
}

.menu-item-down-text {
  text-decoration: none;
  color: #000000;
  z-index: 1;
  text-align: center;
}

.menu-item-down-text a:visited {
  color: inherit;
}
.menu-item-down-text:hover {
  color: #ff6000;
}

.cta-button {
  position: relative;
  text-decoration: none;
  background-color: rgb(237, 237, 237);
  color: #363232;
  justify-content: center;
  width: 150px;
  height: 48px;
  border: 1px solid #ededed;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
}

.cta-button a {
  text-decoration: none;
}
.cta-button:hover {
  color: #fff;
  background: #ff6000;
}
.cta-button a:visited {
  color: inherit;
}
.search form {
  position: relative;
}

.search form input {
  padding-left: 15px;
  width: 486px;
  height: 48px;
  color: #363232;
  border-radius: 50px;
  border: 1px solid #7a7474;
  transition: all 0.2s linear;
}

.search form input::placeholder {
  color: #363232;
  opacity: 1;
}

.search form input:focus {
  border-color: #ff6000;
}

.search form button {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 43px;
  height: 100%;
  padding: 0;
  border: none;
  background: 0 0;
}

.search form button svg path {
  fill: #ff6000;
}

.kategori-wrapper {
  position: relative;
  display: inline-block;
}
.kategori-menu {
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  background-color: #f2f2f2;
  padding: 10px;
  min-width: 200px;
  z-index: 2;
}

.kategori-list {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #000000;
  text-decoration: none;
}

.kategori-list li {
  padding: 8px;
  color: #000000;
}

.kategori-list a {
  color: #000000;
  text-decoration: none;
}

.kategori-list a:hover {
  color: #ff6000;
}

.cta-button:hover + .kategori-menu,
.kategori-menu:hover {
  display: block;
}

.notification-wrapper {
  position: relative;
  display: inline-block;
}

.notification-button {
  position: relative;
  text-decoration: none;
  background-color: rgb(237, 237, 237);
  color: #363232;
  justify-content: center;
  width: 70px;
  height: 48px;
  border: 1px solid #ededed;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
}

.notification-button:hover {
  background-color: #ff6000;
}

.notification-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("/icons/bellicon.png");
  background-size: cover;
}

.notification-count {
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #ff6000;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
}

.notification-menu {
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  background-color: #f2f2f2;
  padding: 10px;
  min-width: 400px;
  z-index: 2;
  cursor: default;
}

.notification-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.notification-list li {
  padding: 8px;
}

.notification-button:hover + .notification-menu,
.notification-menu:hover {
  display: block;
}
.account-icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  background-image: url("/icons/accounticon.png");
  background-size: cover;
}
.shoppingcart-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("/icons/shoppingcart.png");
  background-size: cover;
}
.shoppingcart-button {
  position: relative;
  text-decoration: none;
  background-color: rgb(237, 237, 237);
  color: #363232;
  justify-content: center;
  width: 70px;
  height: 48px;
  border: 1px solid #ededed;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
}

.shoppingcart-button:hover {
  background-color: #ff6000;
}
.shoppingcart-menu {
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  background-color: #f2f2f2;
  padding: 10px;
  min-width: 400px;

  z-index: 2;
  cursor: default;
}
.shoppingcart-button:hover + .shoppingcart-menu,
.shoppingcart-menu:hover {
  display: block;
}
#sc-menu {
  max-height: 300px;
  overflow-y: auto;
}

.cart-items {
  margin-top: 10px;
  color: black;
}

.cart-total {
  margin-top: 10px;
  font-weight: bold;
  color: #ff6000;
}

.cart-page .product {
  margin-bottom: 10px;
}

.cart-page .cart-items {
  margin-top: 10px;
}

.cart-page .product {
  margin-bottom: 10px;
}

.cart-page .product img {
  width: 50px;
  height: 65px;
  margin-right: 10px;
}

.cart-page .product .product-details {
  display: inline-block;
}

.cart-page .product .product-details .product-name {
  font-weight: bold;
  font-size: x-large;
}

.cart-page .product .product-details .product-price {
  color: #f00;
}

.cart-counter {
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #ff6000;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
}
.sepet-metin {
  text-align: left;
  text-decoration: none;
  color: #ff6000;
}

.showcase {
  width: 278px;
  height: 120px;
  margin-top: 5px;
  position: absolute;
  align-items: center;
}

.add-to-cart {
  width: 170px;
  height: 48px;
  margin-top: 5px;
  transition: transform 0.3s ease;
  display: none;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #ff6000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 2;
}
.add-to-cart button {
  background-color: #f00;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.add-to-cart-overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  padding-top: 40px;
  box-sizing: border-box;
  cursor: pointer;
}

.card:hover .add-to-cart,
.card:hover .add-to-cart-overlay {
  display: block;
}

.count {
  width: 170px;
  height: 45px;
  margin-top: 25px;
  transition: transform 0.3s ease;
  display: none;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);

  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 3;
}
.count button {
  background-color: transparent;
  color: #000000;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
}

.count input {
  width: 70px;
  text-align: center;
}

.count input::-webkit-inner-spin-button,
.count input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.count-overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  padding-top: 40px;
  box-sizing: border-box;
  cursor: pointer;
}

.card:hover .count,
.card:hover .count-overlay {
  display: block;
}

.order-button {
  background-color: #ff6000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
}
.order-button:hover {
  color: #ff6000;
  background-color: #fff;
}

.footer {
  margin-top: 30px;
  background-color: #f0f0f0;
  padding: 50px;
  text-align: center;
}

.footer-text {
  color: #777;
  font-size: 14px;
  margin-bottom: 5px;
}
</style>

<script>
window.onload = function () {
  function updateCartCounterUI() {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft +=
          btn.id == "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return; // if isDragging is false return from here
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      timeoutId = setTimeout(
        () => (carousel.scrollLeft += firstCardWidth),
        2500
      );
    };
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", autoPlay);
    wrapper.addEventListener("mouseleave", autoPlay);
  }

  updateCartCounterUI();
};

import ErrorNotFound from "src/pages/ErrorNotFound.vue";
import { createStaticVNode } from "vue";
import { defineComponent, ref } from "vue";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import seedData from "../data/books.json";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      loading: false,
      newTask: "",
      tasks: [],
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      this.loading = true;
      this.tasks = [];

      const q = query(
        collection(this.$db, "Tasks"),
        where("done", "==", false)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        this.tasks = [];
        snapshot.forEach((todo) => {
          this.tasks.push({ ...todo.data(), id: todo.id });
        });
        this.loading = false;
      });
    },

    async addTask(event) {
      this.loading = true;
      const target = event.target;
      const listItem = target.closest(".card");

      const discountPrice =
        listItem.querySelector(".discount-price").textContent;
      const productName = listItem.querySelector(".product-name").textContent;
      const productImage = listItem.querySelector("img").getAttribute("src");

      let todo = {
        kitapIsim: `${productName}`,
        kitapFiyat: ` ${discountPrice}`,
        kitapResim: `${productImage}`,
        done: false,
      };

      const docRef = await addDoc(collection(this.$db, "Tasks"), todo);
      todo.id = docRef.id;
      this.tasks.push(todo);
      this.loading = false;
    },
    getTotalPrice() {
      let totalPrice = 0;
      this.tasks.forEach((task) => {
        totalPrice += parseFloat(task.kitapFiyat);
      });
      return totalPrice;
    },
  },
});
</script>
