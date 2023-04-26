import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'my-page',
        element: <MyPage />,
      },
    ],
  },
], {
  basename: '/emergency-react-boilerplate'
});

export default router;
