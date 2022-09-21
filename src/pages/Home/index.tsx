import { useNavigate } from 'react-router-dom'
import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet'

const Home = () => {
  const navigator = useNavigate()

  // CSR 请求数据
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(data => console.log('CSR请求数据', data))
  }, [])

  return (
    <Fragment>
      <Helmet>
        <title>简易的服务器端渲染 - HOME</title>
        <meta name="description" content="服务器端渲染"></meta>
      </Helmet>
      <div>
        <h1>hello-ssr</h1>
        <button
          onClick={(): void => {
            alert("hello-ssr");
          }}
        >
          alert交互
        </button>
        <br />
        <a href="/demo">跳转到Demo页面(SSR)</a>
        <br />
        <span onClick={() => {
          navigator('/demo')
        }} style={{cursor: 'pointer'}}>
          跳转到Demo页面(CSR)
        </span>
      </div>
    </Fragment>
  );
};

export default Home;