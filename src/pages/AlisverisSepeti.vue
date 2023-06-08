<template>
  <b class="alisveris-sepet-metin">ALIŞVERİŞ SEPETİ</b>

  <div class="alisveris-sepet-product-list">
    <li
      class="alisveris-sepet-product-list-item"
      v-for="task in tasks"
      :key="task.id"
    >
      <img :src="task.kitapResim" class="alisveris-sepet-resim" />
      <div>{{ task.kitapIsim }}</div>
      <div>{{ task.kitapFiyat }}</div>
      <q-btn
        @click.stop="deleteTask(task)"
        flat
        round
        dense
        color="primary"
        icon="delete"
      />
    </li>
  </div>
  <div class="sepet-satinal">
    <div class="sepet-toplam">Toplam Fiyat: {{ getTotalPrice() }} TL</div>
    <button class="satin-al" @click="satinal()">Satın Al</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

export default defineComponent({
  name: "TodoPage",
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
    deleteTask(task) {
      this.$q
        .dialog({
          title: "Ürünü Sil",
          message: "Silmek İstediğinize Emin Misiniz?",
          cancel: {
            label: "İptal",
          },
          ok: {
            label: "Evet",
          },

          persistent: true,
        })
        .onOk(() => {
          const taskId = task.id;
          deleteDoc(doc(this.$db, "Tasks", taskId));
        });
    },
    async satinal() {
      const querySnapshot = await getDocs(collection(this.$db, "Tasks"));

      this.$q
        .dialog({
          title: "Satın Al",
          message: "Satın Alımı Onaylıyor Musunuz?",
          cancel: {
            label: "İptal",
          },
          ok: {
            label: "Onayla",
          },

          persistent: true,
        })
        .onOk(() => {
          querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
          });

          this.tasks = [];
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

<style>
.alisveris-sepet-metin {
  padding: 15px;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: x-large;
  justify-content: center;
  position: relative;
}
.alisveris-sepet-product-list {
  text-decoration: none;
  list-style-type: none;
  border: 1px solid #ccc;
  justify-content: center;
  padding: 15px;
  align-items: center;
  color: black;
  border-radius: 2px;
  border: 5px;
  border-color: black;
  margin-left: 20%;
  margin-right: 20%;
}
.alisveris-sepet-product-list-item {
  font-size: large;

  border: 1px solid #ccc;
  cursor: pointer;
  border: 5px;
  align-items: center;

  justify-content: space-between;

  display: flex;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
}
.alisveris-sepet-resim {
  text-decoration: none;
  height: 140px;
  width: 84px;
  margin-left: 20px;
}
.sepet-satinal {
  text-decoration: none;
  list-style-type: none;
  padding: 15px;
  margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 80px;
  position: absolute;
  right: 0;
}
.sepet-toplam {
  color: #ff6000;
  padding: 15px;
  text-align: right;
  font-size: large;
  position: relative;
}
.satin-al {
  text-decoration: none;
  background-color: rgb(237, 237, 237);
  color: #363232;
  width: 196px;
  height: 48px;
  border: 1px solid #ededed;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  right: 0;
  font-size: large;
}

.satin-al:hover {
  background-color: #ff6000;
  color: #ededed;
}
</style>
