<script setup>
import rj1 from '../assets/portfolio/rj1.jpg'
import rj2 from '../assets/portfolio/rj2.jpg'

import sp1 from '../assets/portfolio/sp1.jpg'
import sp2 from '../assets/portfolio/sp2.jpg'

import mir1 from '../assets/portfolio/mir1.jpg'
import mir2 from '../assets/portfolio/mir2.jpg'
import mir3 from '../assets/portfolio/mir3.jpg'
import mir4 from '../assets/portfolio/mir4.jpg'
import mir5 from '../assets/portfolio/mir5.jpg'

import congmbl1 from '../assets/portfolio/congmbl1.jpg'
import congmbl2 from '../assets/portfolio/congmbl2.jpg'
import congmbl3 from '../assets/portfolio/congmbl3.jpg'
import congmbl4 from '../assets/portfolio/congmbl4.jpg'

import protest1 from '../assets/portfolio/protest1.jpg'
import protest2 from '../assets/portfolio/protest2.jpg'
import protest3 from '../assets/portfolio/protest3.jpg'
import protest4 from '../assets/portfolio/protest4.jpg'

import salt1 from '../assets/portfolio/salt1.jpg'
import salt2 from '../assets/portfolio/salt2.jpg'
import salt3 from '../assets/portfolio/salt3.jpg'

const pictures = [
  {
    name: 'Rio de Janeiro',
    subtitle: 'Photos from Beach in Brazil',
    tags: ['beach', 'shotoniphone', 'rj'],
    photos: [
      rj1,
      rj2
    ]
  },
  {
    name: 'Av. Paulista',
    subtitle: 'Pictures shot on a rainy day in the a famous street in São Paulo.',
    tags: ['rain', 'shotoniphone', 'sp'],
    photos: [
      sp1,
      sp2
    ]
  },
  {
    name: 'Politic Event',
    subtitle: 'Pictures shot from event "Moro no Rio" on Leblon - RJ. Thanks to MBL & Vem Pra Rua to make this happen.',
    tags: ['politic', '50mm', 'rj'],
    photos: [
      { src: mir1, subtitle: "Ex-judge Sérgio Moro with supporters" },
      { src: mir2, subtitle: "Ex-judge Sérgio Moro speaking" },
      { src: mir3, subtitle: "Ex-judge Sérgio Moro with supporters" },
      { src: mir4, subtitle: "General Santos Cruz speaking" },
      { src: mir5, subtitle: "Audience" },
    ]
  },
  {
    name: 'Politic Events',
    subtitle: 'Pictures shot on "Congresso MBL" in Mooca - SP.',
    tags: ['politic', 'sp', 'shotoniphone'],
    photos: [
      congmbl1,
      { src: congmbl2, subtitle: "Congressman Kim Kataguiri doing an interview" },
      { src: congmbl3, subtitle: "Felippe Hermes - Founder Spotniks; Columnist Infomoney; From QRCapital" },
      congmbl4,
    ]
  },
  {
    name: 'Protests - 12/09',
    subtitle: 'Pictures shot on Copacabana - SP.',
    tags: ['protest', 'rj', 'shotoniphone'],
    photos: [
      protest1,
      { src: protest2, subtitle: "Letícia Arsenio - Partido Novo" },
      { src: protest3, subtitle: "Letícia Arsenio doing interview." },
      protest4,
    ]
  },
  {
    name: 'Church Event',
    subtitle: 'Pictures from religious event "SALT".',
    tags: ['church', 'rj', 'salt'],
    photos: [
      salt1,
      salt2,
      salt3,
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