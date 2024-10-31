import { Provider } from 'react-redux';
import store from './components/utils/RTK/store';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: '/',
        element : <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      }
    ]
  }])
  return (
    <Provider store={store}>
      <div className="flex flex-col">
        <Head />
        <RouterProvider router={appRouter} />
        
      </div>
    </Provider>
  );
}

export default App;
