import express from 'express'
import path from 'path'

const app = express()

const assetPath = path.resolve(__dirname, '..', 'client')
console.log('asset path', assetPath)
app.use(express.static(assetPath))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
