import ReactDOM from "react-dom/client";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import router from '@/router'

const Client: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          router.map((item) => {
            return <Route {...item} key={item.path} />
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.hydrateRoot(document.getElementById("root") as Document | Element, <Client />)