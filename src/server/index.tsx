import express from 'express'
import childProcess from 'child_process'

const app = express()

app.get('*', (req, res) => {
  const { url } = req
  res.send(`
    <html>
      <body>Hello-ssr</body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('ssr server is running on 3000')
})

childProcess.exec('start http://127.0.0.1:3000')
