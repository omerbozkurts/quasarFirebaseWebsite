<template>
  <q-page class="flex flex-center">
    <div v-if="loading"><q-spinner /> Fetching data...</div>

    <div v-else>
      <q-list>
        <q-item-label header>Books/Production</q-item-label>
        <q-item v-for="(book, index) in books" :key="index">
          <q-item-label>
            {{ book.title }}
          </q-item-label>
        </q-item>
      </q-list>
    </div>

    <q-btn
      v-if="!books.length && !loading"
      label="Seed Data"
      class="q-mt-md"
      @click="seedData()"
    />
  </q-page>
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
} from "firebase/firestore";
import seedData from "../data/books.json";
//book bunu düzelt
export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      loading: true,
      books: [],
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      this.loading = true;
      this.books = [];

      const q = query(
        collection(this.$db, "books"),
        where("completed", "==", true)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((book) => {
        this.books.push(book.data());
      });

      this.loading = false;
    },

    async seedData() {
      for (const book of seedData) {
        await addDoc(collection(this.$db, "books"), book);
      }

      this.getData();
    },
  },
});
</script>
