import Home from '@/pages/Home'
import Demo from '@/pages/Demo'

interface IProps {
  path: string
  element: JSX.Element
}

const router: Array<IProps> = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default router