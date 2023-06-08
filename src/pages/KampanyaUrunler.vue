<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout
    ><b class="metin">KAMPANYALI ÜRÜNLER</b>
    <div class="hiza">
      <div class="kampanya-filtre-menu">
        <div class="filtre-baslik">Filtreler</div>
        <div class="filtre-liste">
          <li
            :class="{ selected: selectedGenre === '' }"
            @click="handleClick('')"
          >
            Tüm Ürünler
          </li>
          <li
            :class="{ selected: selectedGenre === 'TestKampanya' }"
            @click="handleClick('TestKampanya')"
          >
            Test Kitapları
          </li>
          <li
            :class="{ selected: selectedGenre === 'SozlukKampanya' }"
            @click="handleClick('SozlukKampanya')"
          >
            Sözlükler
          </li>
          <li
            :class="{ selected: selectedGenre === 'DefterKampanya' }"
            @click="handleClick('DefterKampanya')"
          >
            Defterler
          </li>
          <li
            :class="{ selected: selectedGenre === 'KitapKampanya' }"
            @click="handleClick('KitapKampanya')"
          >
            Okuma Kitapları
          </li>
          <li
            :class="{ selected: selectedGenre === 'KalemKampanya' }"
            @click="handleClick('KalemKampanya')"
          >
            Kalemler
          </li>
          <li
            :class="{ selected: selectedGenre === 'DenemeKampanya' }"
            @click="handleClick('DenemeKampanya')"
          >
            Deneme Kitapları
          </li>
        </div>
      </div>
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
    </div></q-layout
  >
</template>

<style>
.hiza {
  display: flex;
}

.kampanya-filtre-menu {
  margin-left: 10%;
  width: 268px;
  height: 370px;
  border-radius: 10px;
  border: 1px solid #00000032;
}
.filtre-baslik {
  padding-left: 10px;
  padding-top: 9px;
  font-size: large;
  color: #ffffff;
  height: 48px;
  width: 268px;
  border-radius: 10px 10px 0 0;
  background: #363232;
  font-style: bold;
}

.filtre-liste {
  list-style: none;
  text-decoration: none;
  font-size: larger;
  margin-left: 15px;
  margin-top: 20px;
}

.filtre-liste li {
  margin-bottom: 15px;
  color: #00000099;
  font-style: bold;
}

.filtre-liste li:hover {
  color: #ff6000;
  cursor: pointer;
}

.filtre-liste li.selected {
  color: #ff6000;
}

.product-list {
  text-decoration: none;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  flex: 33%;
  justify-content: center;
  padding: 15px;
  align-items: center;
  position: relative;
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
      selectedGenre: "",
      newTask: "",
      tasks: [],
    };
  },

  async created() {
    await this.getbooks();
    this.getTasks();
  },
  methods: {
    handleClick(genre) {
      this.selectedGenre = genre;
      this.getbooks();
    },

    async getbooks() {
      this.loading = true;
      this.books = [];
      let q;
      if (this.selectedGenre === "") {
        q = query(
          collection(this.$db, "books"),

          where("kitapId", ">", 60),
          where("kitapId", "<=", 72)
        );
      } else {
        q = query(
          collection(this.$db, "books"),

          where("kitapTur", "==", this.selectedGenre)
        );
      }
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
