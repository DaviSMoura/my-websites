<script setup>
import VLazyImage from 'v-lazy-image'

const pictures = [
  {
    name: 'Rio de Janeiro',
    subtitle: 'Photos from Beach in Brazil',
    tags: ['beach', 'shotoniphone', 'rj'],
    photos: [
      { src: 'https://davimoura.imgix.net/rj1.jpg?auto=compress' },
      { src: 'https://davimoura.imgix.net/rj2.jpg?auto=compress' },
    ]
  },
  {
    name: 'Av. Paulista',
    subtitle: 'Pictures shot on a rainy day in the a famous street in São Paulo.',
    tags: ['rain', 'shotoniphone', 'sp'],
    photos: [
      { src: 'https://davimoura.imgix.net/sp1.jpg?auto=compress' },
      { src: 'https://davimoura.imgix.net/sp2.jpg?auto=compress' },
    ]
  },
  {
    name: 'Politic Event',
    subtitle: 'Pictures shot from event "Moro no Rio" on Leblon - RJ. Thanks to MBL & Vem Pra Rua to make this happen.',
    tags: ['politic', '50mm', 'rj'],
    photos: [
      { src: 'https://davimoura.imgix.net/mir1.jpg?auto=compress', subtitle: "Ex-judge Sérgio Moro with supporters" },
      { src: 'https://davimoura.imgix.net/mir2.jpg?auto=compress', subtitle: "Ex-judge Sérgio Moro speaking" },
      { src: 'https://davimoura.imgix.net/mir3.jpg?auto=compress', subtitle: "Ex-judge Sérgio Moro with supporters" },
      { src: 'https://davimoura.imgix.net/mir4.jpg?auto=compress', subtitle: "General Santos Cruz speaking" },
      { src: 'https://davimoura.imgix.net/mir5.jpg?auto=compress', subtitle: "Audience" },
    ]
  },
  {
    name: 'Politic Events',
    subtitle: 'Pictures shot on "Congresso MBL" in Mooca - SP.',
    tags: ['politic', 'sp', 'shotoniphone'],
    photos: [
      { src: 'https://davimoura.imgix.net/congmbl1.jpg?auto=compress' },
      { src: 'https://davimoura.imgix.net/congmbl2.jpg?auto=compress', subtitle: "Congressman Kim Kataguiri doing an interview" },
      { src: 'https://davimoura.imgix.net/congmbl3.jpg?auto=compress', subtitle: "Felippe Hermes - Spotniks; Infomoney Columnist; QRCapital" },
      { src: 'https://davimoura.imgix.net/congmbl4.jpg?auto=compress', subtitle: "Congressman Kim Kataguiri - Debate championship" },
    ]
  },
  {
    name: 'Protests - 12/09',
    subtitle: 'Pictures shot on Copacabana - SP.',
    tags: ['protest', 'rj', 'shotoniphone'],
    photos: [
      { src: 'https://davimoura.imgix.net/protest1.jpg?auto=compress' },
      { src: 'https://davimoura.imgix.net/protest2.jpg?auto=compress', subtitle: "Letícia Arsenio." },
      { src: 'https://davimoura.imgix.net/protest3.jpg?auto=compress', subtitle: "Letícia Arsenio doing interview." },
      { src: 'https://davimoura.imgix.net/protest4.jpg?auto=compress' },
    ]
  },
  {
    name: 'Church Event',
    subtitle: 'Pictures from religious event "SALT".',
    tags: ['church', 'rj', 'salt'],
    photos: [
      { src: 'https://davimoura.imgix.net/salt1.jpg?auto=compress' },
      { src: 'https://davimoura.imgix.net/salt2.jpg?auto=compress' },
      { src: 'https://davimoura.imgix.net/salt3.jpg?auto=compress' },
    ]
  },
]
</script>

<template lang="pug">
.bg-secondary.text-secondary-content
  .md_container.md_mx-auto.py-8.md_py-16.mx-6
    .h1.font-3xl.sm_text-5xl.font-bold Events Portfolio
    .h1.font-subtitle.sm_text-3xl.font-semibold Im not a professional photographer but its a hobby.
.md_container.md_mx-auto.mx-6
  .pt-6.md_pt-12(v-for="category of pictures")
    .h1.text-xl.md_text-3xl.font-semibold {{ category.name }}
    .h1.text-sm.flex-col {{ category.subtitle }}
    .badge.badge-secondary.badge-outline.mr-2(v-for="tag of category.tags")
      | # {{ tag }}
    .grid.grid-cols-16.gap-4.mt-2.justify-items-center
      div(v-for="photo of category.photos")
        a(:href="photo.src || photo")
          v-lazy-image.image-wrap(:width="800" :src-placeholder="`${photo.src}&w=30`" :src="`${photo.src}&w=800`")
        .h1.text-sm(v-if="photo.subtitle") {{ photo.subtitle }}
.bg-secondary.text-secondary-content.mt-16
  .md_container.md_mx-auto.py-8.md_py-16.mx-6
    a(href='https://links.davimoura.com.br').h1.text-xl.font-bold Click here to contact me
    .h1.text-sm All shots in this website is by Davi Moura.
</template>

<style>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 1.6s;
  will-change: filter;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>