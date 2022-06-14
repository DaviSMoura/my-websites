<script setup>
const pictures = [
  {
    name: 'Rio de Janeiro',
    subtitle: 'Photos from Beach in Brazil',
    tags: ['beach', 'shotoniphone', 'rj'],
    photos: [
      'https://storage.googleapis.com/website-portfolio/rj1.jpg',
      'https://storage.googleapis.com/website-portfolio/rj2.jpg'
    ]
  },
  {
    name: 'Av. Paulista',
    subtitle: 'Pictures shot on a rainy day in the a famous street in São Paulo.',
    tags: ['rain', 'shotoniphone', 'sp'],
    photos: [
      'https://storage.googleapis.com/website-portfolio/sp1.jpg',
      'https://storage.googleapis.com/website-portfolio/sp2.jpg'
    ]
  },
  {
    name: 'Politic Event',
    subtitle: 'Pictures shot from event "Moro no Rio" on Leblon - RJ. Thanks to MBL & Vem Pra Rua to make this happen.',
    tags: ['politic', '50mm', 'rj'],
    photos: [
      { src: 'https://storage.googleapis.com/website-portfolio/mir1.jpg', subtitle: "Ex-judge Sérgio Moro with supporters" },
      { src: 'https://storage.googleapis.com/website-portfolio/mir2.jpg', subtitle: "Ex-judge Sérgio Moro speaking" },
      { src: 'https://storage.googleapis.com/website-portfolio/mir3.jpg', subtitle: "Ex-judge Sérgio Moro with supporters" },
      { src: 'https://storage.googleapis.com/website-portfolio/mir4.jpg', subtitle: "General Santos Cruz speaking" },
      { src: 'https://storage.googleapis.com/website-portfolio/mir5.jpg', subtitle: "Audience" },
    ]
  },
  {
    name: 'Politic Events',
    subtitle: 'Pictures shot on "Congresso MBL" in Mooca - SP.',
    tags: ['politic', 'sp', 'shotoniphone'],
    photos: [
      'https://storage.googleapis.com/website-portfolio/congmbl1.jpg',
      { src: 'https://storage.googleapis.com/website-portfolio/congmbl2.jpg', subtitle: "Congressman Kim Kataguiri doing an interview" },
      { src: 'https://storage.googleapis.com/website-portfolio/congmbl3.jpg', subtitle: "Felippe Hermes - Founder Spotniks; Columnist Infomoney; From QRCapital" },
      'https://storage.googleapis.com/website-portfolio/congmbl4.jpg',
    ]
  },
  {
    name: 'Protests - 12/09',
    subtitle: 'Pictures shot on Copacabana - SP.',
    tags: ['protest', 'rj', 'shotoniphone'],
    photos: [
      'https://storage.googleapis.com/website-portfolio/protest1.jpg',
      { src: 'https://storage.googleapis.com/website-portfolio/protest2.jpg', subtitle: "Letícia Arsenio - Partido Novo" },
      { src: 'https://storage.googleapis.com/website-portfolio/protest3.jpg', subtitle: "Letícia Arsenio doing interview." },
      'https://storage.googleapis.com/website-portfolio/protest4.jpg',
    ]
  },
  {
    name: 'Church Event',
    subtitle: 'Pictures from religious event "SALT".',
    tags: ['church', 'rj', 'salt'],
    photos: [
      'https://storage.googleapis.com/website-portfolio/salt1.jpg',
      'https://storage.googleapis.com/website-portfolio/salt2.jpg',
      'https://storage.googleapis.com/website-portfolio/salt3.jpg',
    ]
  },
]
</script>

<template lang="pug">
.bg-secondary.text-secondary-content
  .container.mx-auto.py-16.sm_px-16
    .h1.text-5xl.font-bold Events Portfolio
    .h1.text-3xl.font-semibold Im not a professional photographer but its a hobby.
.container.mx-auto.sm_px-16
  .pt-16(v-for="category of pictures")
    .h1.text-2xl.font-semibold {{ category.name }}
    .flex.flex-row.items-center.gap-4
      .h1.text-subtitle.flex-col {{ category.subtitle }}
      .flex-col
        .badge.badge-secondary.badge-outline.mr-2(v-for="tag of category.tags")
          | # {{ tag }}
    .grid.grid-cols-16.gap-4.mt-2
      div(v-for="photo of category.photos" )
        img(:src="photo.src || photo")
        .h1.text-subtitle(v-if="photo.subtitle") {{ photo.subtitle }}
.bg-secondary.text-secondary-content.mt-16
  .container.mx-auto.py-16.sm_px-16
    a(href='https://links.davimoura.com.br').h1.text-2xl.font-bold Click here to contact me
    .h1.text-subtitle All shots in this website is by Davi Moura.
</template>

<style>
</style>