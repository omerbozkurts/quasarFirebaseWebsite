<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        infinite
        thumbnails
        swipeable
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="icons/resim1.png" />
        <q-carousel-slide :name="2" img-src="icons/resim2.png" />
        <q-carousel-slide :name="3" img-src="icons/resim3.png" />
        <q-carousel-slide :name="4" img-src="icons/resim4.png" />
        <q-carousel-slide :name="5" img-src="icons/resim5.png" />
      </q-carousel>
    </div>
    <div class="product-list">
      <li class="product-list-item">
        <RouterLink to="/kampanya"
          ><img
            class="product-list-item-img"
            src="icons/kampanyalar.png"
            alt="Kampanyalar"
        /></RouterLink>
      </li>
      <li class="product-list-item">
        <RouterLink to="/puanyayinlari"
          ><img
            class="product-list-item-img"
            src="icons/kargobedava.png"
            alt="Kargo Bedava"
        /></RouterLink>
      </li>
      <li class="product-list-item">
        <RouterLink to="/okumakitaplari"
          ><img
            class="product-list-item-img"
            src="icons/cokalazode.png"
            alt="Cok Al Az Ode"
        /></RouterLink>
      </li>
      <li class="product-list-item">
        <RouterLink to="/kirtasiyeofis"
          ><img
            class="product-list-item-img"
            src="icons/firsaturunleri.png"
            alt="Firsat Urunleri"
        /></RouterLink>
      </li>
      <li class="product-list-item">
        <RouterLink to="/sinavyayinlari"
          ><img
            class="product-list-item-img"
            src="icons/coksatan.png"
            alt="Cok Satanlar"
        /></RouterLink>
      </li>
    </div>
    <b class="metin">FIRSAT ÜRÜNLERİ</b>
    <div class="product-list">
      <div class="product-list-item">
        <RouterLink to="/kampanya">
          <img
            class="firsat-urunleri-menu=img"
            src="icons/firsaturunlerimenu.png"
            alt="Firsat Urunleri Menu"
          />
        </RouterLink>
      </div>
      <div class="product-list-item">
        <div class="wrapper">
          <i id="left" class="fa-solid fa-angle-left"></i>
          <ul class="carousel">
            <li class="card">
              <img src="icons/slide/fosforlukalem.png" alt="Product Image" />
              <div class="product-name">Faber Castell Fosforlu Kalem</div>
              <div class="row justify-center">
                <div class="discount-rate col-2">30%</div>
                <div class="col-4">
                  <div class="original-price">35,00 TL</div>
                  <div class="discount-price">24,50 TL</div>
                </div>
                <button class="add-to-cart" @click="addTask($event)">
                  Sepete Ekle
                </button>
              </div>
            </li>
            <li class="card">
              <img src="icons/slide/masalambasi.png" alt="Product Image" />
              <div class="product-name">Mandallı Siyah Kitap Okuma Lambası</div>
              <div class="row justify-center">
                <div class="discount-rate col-2">20%</div>
                <div class="col-4">
                  <div class="original-price">36,00 TL</div>
                  <div class="discount-price">26,80 TL</div>
                </div>
                <button class="add-to-cart" @click="addTask($event)">
                  Sepete Ekle
                </button>
              </div>
            </li>
            <li class="card">
              <img src="icons/slide/pembedefter.png" alt="Product Image" />
              <div class="product-name">Keskin Pembe Defter</div>
              <div class="row justify-center">
                <div class="discount-rate col-2">35%</div>
                <div class="col-4">
                  <div class="original-price">100,00 TL</div>
                  <div class="discount-price">65,00 TL</div>
                </div>
                <button class="add-to-cart" @click="addTask($event)">
                  Sepete Ekle
                </button>
              </div>
            </li>
            <li class="card">
              <img src="icons/slide/giptakalem.png" alt="Product Image" />
              <div class="product-name">Gıpta 4 Renk Tahta Kalemi</div>
              <div class="row justify-center">
                <div class="discount-rate col-2">30%</div>
                <div class="col-4">
                  <div class="original-price">95,00 TL</div>
                  <div class="discount-price">66,50 TL</div>
                </div>
                <button class="add-to-cart" @click="addTask($event)">
                  Sepete Ekle
                </button>
              </div>
            </li>
            <li class="card">
              <img src="icons/slide/notdefteri.png" alt="Product Image" />
              <div class="product-name">Keskin Spiralli Not Defteri</div>
              <div class="row justify-center">
                <div class="discount-rate col-2">35%</div>
                <div class="col-4">
                  <div class="original-price">95,00 TL</div>
                  <div class="discount-price">61,75 TL</div>
                </div>
                <button class="add-to-cart" @click="addTask($event)">
                  Sepete Ekle
                </button>
              </div>
            </li>
            <li class="card">
              <img src="icons/slide/hakikalem.png" alt="Product Image" />
              <div class="product-name">Matrix Haki 0.7 Kalem</div>
              <div class="row justify-center">
                <div class="discount-rate col-2">30%</div>
                <div class="col-4">
                  <div class="original-price">145,00 TL</div>
                  <div class="discount-price">101,75 TL</div>
                </div>
                <button class="add-to-cart" @click="addTask($event)">
                  Sepete Ekle
                </button>
              </div>
            </li>
            <li class="card">
              <img src="icons/slide/tytdeneme.png" alt="Product Image" />
              <div class="product-name">3IKI1 Yayınları TYT Deneme</div>
              <div class="row justify-center">
                <div class="discount-rate col-2">40%</div>
                <div class="col-4">
                  <div class="original-price">32,00 TL</div>
                  <div class="discount-price">19,20 TL</div>
                </div>
                <button class="add-to-cart" @click="addTask($event)">
                  Sepete Ekle
                </button>
              </div>
            </li>
          </ul>
          <i id="right" class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="kategori-kart-sinir row">
      <div class="kategori-kart col">
        <div class="kategori-metin">En Popüler Kategoriler</div>
        <div class="kategori-ic">
          <div class="kategori-banner">
            <RouterLink to="/sinavyayinlari">
              <img src="icons/kategori1.png" />
              <div>TYT Kitap</div></RouterLink
            >
          </div>
          <div class="kategori-banner">
            <RouterLink to="/puanyayinlari">
              <img src="icons/kategori2.png" />
              <div>AYT Kitap</div></RouterLink
            >
          </div>
          <div class="kategori-banner">
            <RouterLink to="/okumakitaplari">
              <img src="icons/kategori3.png" />
              <div>Roman</div></RouterLink
            >
          </div>
        </div>
      </div>
      <div class="kategori-kart col" id="kategori-kart-mavi">
        <div class="kategori-metin" id="kategori-metin-mavi">
          En Çok Satan Kategoriler
        </div>
        <div class="kategori-ic">
          <div class="kategori-banner">
            <RouterLink to="/kirtasiyeofis">
              <img src="icons/kategori4.png" />
              <div>Kalem</div></RouterLink
            >
          </div>
          <div class="kategori-banner">
            <RouterLink to="/kampanya">
              <img src="icons/kategori5.png" />
              <div>Puzzle</div></RouterLink
            >
          </div>
          <div class="kategori-banner">
            <RouterLink to="/tavsiye">
              <img src="icons/kategori6.png" />
              <div>Çocuk İçin</div></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <b class="metin">ÇOK SATANLAR</b>
    <div class="product-list">
      <li class="card" v-for="book in books" :key="book.kitapId">
        <img :src="book.kitapResim" alt="Product Image" />

        <div class="product-name">{{ book.kitapIsim }}</div>

        <div class="row justify-center">
          <div class="discount-rate col-2">{{ book.indirimMiktari }}</div>
          <div class="col-4">
            <div class="original-price">{{ book.normalFiyat }} TL</div>
            <div class="discount-price">{{ book.indirimliFiyat }} TL</div>
          </div>
          <button class="add-to-cart" @click="addTask($event)">
            Sepete Ekle
          </button>
        </div>
      </li>
    </div>
  </q-layout>
</template>

<style>
.down-slider {
  height: max-content;
  width: fit-content;
}
.product-list {
  text-decoration: none;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  padding: 15px;
  align-items: center;
  position: relative;
}
.product-list-item {
  font-size: medium;
  text-decoration: none;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.product-list-item-img {
  text-decoration: none;
  height: 100px;
  width: 220px;
}

.metin {
  padding: 15px;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: x-large;
  justify-content: center;
  position: relative;
}

.firsat-urunleri-menu-img {
  text-decoration: none;
  height: 421px;
  width: 221px;
}

.wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
}
.wrapper i {
  top: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  font-size: 1.25rem;
  position: absolute;
  text-align: center;
  line-height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translateY(-50%);
  transition: transform 0.1s linear;
}
.wrapper i:active {
  transform: translateY(-50%) scale(0.85);
}
.wrapper i:first-child {
  left: -22px;
}
.wrapper i:last-child {
  right: -22px;
}
.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / 3) - 12px);
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel.no-transition {
  scroll-behavior: auto;
}
.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}
.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}
.carousel :where(.card, .img) {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .carousel .card {
  scroll-snap-align: start;
  height: 342px;
  list-style: none;
  background: #fff;
  cursor: pointer;
  padding-bottom: 15px;
  flex-direction: column;
  border-radius: 8px;
}
.carousel .card .img {
  background: #8b53ff;
  height: 148px;
  width: 148px;
  border-radius: 50%;
}
.card .img img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
}
.carousel .card h2 {
  font-weight: 500;
  font-size: 1.56rem;
  margin: 30px 0 5px;
}
.carousel .card span {
  color: #6a6d78;
  font-size: 1.31rem;
}
*/

.card {
  display: inline;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
}

.card img {
  width: 186px;
  height: 280px;
}

.card .product-name {
  margin-top: 10px;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
}

.card .discount-price {
  font-size: larger;
  font-weight: bold;
  text-align: justify;
  color: rgb(0, 0, 0);
  position: absolute;
  margin-left: 8px;
}

.card .original-price {
  margin-top: 3px;
  margin-left: 8px;
  font-size: medium;
  text-align: justify;
  color: #999;
  text-decoration: line-through;
}

.card .discount-rate {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  color: #fff;
  margin-top: 10px;
  font-weight: 700;
  border-radius: 5px;

  background: #ff6000;
}
.kategori-kart-sinir {
  margin-left: 100px;
  margin-right: 100px;
}
.kategori-kart {
  align-items: center;
  justify-content: center;
  background-color: #ff6000;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  width: 488px;
  height: 220px;
}

#kategori-kart-mavi {
  background-color: #d5e2f0;
}
.kategori-metin {
  text-align: left;
  font-size: x-large;
  color: #fff;
  margin-top: 20px;
  margin-left: 20px;
}
.kategori-banner a {
  text-decoration: none;
  color: black;
}

#kategori-metin-mavi {
  color: #007aff;
}
.kategori-ic {
  margin-top: 20px;
  margin-left: 30px;
  width: 556px;
  height: 119px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kategori-banner {
  color: black;
  background-color: #fff;
  width: 88px;
  height: 119px;
  text-align: center;
  align-items: center;
  margin-left: 30px;
  border-radius: 10px;
}
.kategori-banner img {
  margin-top: 12px;
  width: 63px;
  height: 63px;
}

@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2) - 9px);
  }
}
@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }
}
</style>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

export default defineComponent({
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
  data() {
    return {
      books: [],
      booksColRef: "books",
      newTask: "",
      tasks: [],
    };
  },

  async created() {
    await this.getbooks();
    this.getTasks();
  },
  methods: {
    async getbooks() {
      this.loading = true;
      this.books = [];
      const q = query(
        collection(this.$db, "books"),
        where("kitapId", "<=", 12)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((book) => {
        this.books.push({ ...book.data(), id: book.id });
      });

      this.loading = false;
    },

    async getTasks() {
      this.loading = true;
      this.tasks = [];

      const q = query(
        collection(this.$db, "Tasks"),
        where("done", "==", false)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((todo) => {
        this.tasks.push({ ...todo.data(), id: todo.id });
      });

      this.loading = false;
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
