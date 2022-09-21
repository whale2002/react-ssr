import express from 'express'
import childProcess from 'child_process'
import path from 'path'
import {renderToString} from 'react-dom/server'
import Home from '@/pages/Home'

const app = express()
app.use(express.static(path.resolve(process.cwd(), "client_build")));

const content = renderToString(<Home />)

app.get('*', (req, res) => {
  const { url } = req
  res.send(`
    <html>
      <body id="root">${content}</body>
      <script src="/index.js"></script>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('ssr server is running on 3000')
})

childProcess.exec('start http://127.0.0.1:3000')
