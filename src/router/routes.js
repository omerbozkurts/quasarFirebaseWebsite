const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/MainPage.vue") },
      {
        path: "sinavyayinlari",
        component: () => import("src/pages/SinavYayinlari.vue"),
      },
      {
        path: "puanyayinlari",
        component: () => import("src/pages/PuanYayinlari.vue"),
      },
      {
        path: "okumakitaplari",
        component: () => import("src/pages/OkumaKitaplari.vue"),
      },
      {
        path: "kirtasiyeofis",
        component: () => import("src/pages/KirtasiyeOfis.vue"),
      },
      {
        path: "kampanya",
        component: () => import("src/pages/KampanyaUrunler.vue"),
      },
      {
        path: "signin",
        component: () => import("src/pages/SignIn.vue"),
      },
      {
        path: "tavsiye",
        component: () => import("src/pages/TavsiyeUrunler.vue"),
      },
      {
        path: "sepet",
        component: () => import("src/pages/AlisverisSepeti.vue"),
      },
      {
        path: "seeddata",
        component: () => import("src/pages/SeedData.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
