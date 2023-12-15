import 'dotenv/config'
import axios from 'axios'
import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.redirect('https://links.davimoura.dev')
})

app.get('/:name', async (req, res) => {
  const { name } = req.params
  const ip = req.ip
  const { data } = await axios.get(`https://api.ordo.davimoura.dev/shortlinks/${name}`, {
    params: { ip, headers: req.headers }
  })
  const link = data?.url
  if (!link) return res.redirect('https://links.davimoura.dev')
  res.redirect(link)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})