import express from 'express'
import childProcess from 'child_process'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { Route, Routes } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import router from '@/router'

const app = express()
// static resource path
app.use(express.static(path.resolve(process.cwd(), "client_build")));

app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes>
        {
          router.map((item) => {
            return <Route {...item} key={item.path} />
          })
        }
      </Routes>
    </StaticRouter>
  )

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
