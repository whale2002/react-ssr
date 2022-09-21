import Home from '@/pages/Home'
import Demo from '@/pages/Demo'

interface IProps {
  path: string
  element: JSX.Element,
  loadData?: (store: any) => any;
}

const router: Array<IProps> = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/demo',
    element: <Demo />,
    loadData: Demo.getInitProps
  }
]

export default router