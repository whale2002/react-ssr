import ReactDOM from "react-dom/client";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import router from '@/router'
import { clientStore } from '@/store'
import { Provider } from 'react-redux'

const Client: FC = () => {
  return (
    <Provider store={clientStore}>
      <BrowserRouter>
        <Routes>
          {
            router.map((item) => {
              return <Route {...item} key={item.path} />
            })
          }
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrateRoot(document.getElementById("root") as Document | Element, <Client />)