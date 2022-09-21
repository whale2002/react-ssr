import express from 'express'
import childProcess from 'child_process'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { Route, Routes } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import router from '@/router'
import { Helmet } from "react-helmet";
import { serverStore } from '@/store'
import { Provider } from 'react-redux'

const app = express()
// static resource path
app.use(express.static(path.resolve(process.cwd(), "client_build")));

app.get('*', (req, res) => {
  const content = renderToString(
    <Provider store={serverStore}>
      <StaticRouter location={req.path}>
        <Routes>
          {
            router.map((item) => {
              return <Route {...item} key={item.path} />
            })
          }
        </Routes>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic();

  res.send(`
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('ssr server is running on 3000')
})

childProcess.exec('start http://127.0.0.1:3000')
