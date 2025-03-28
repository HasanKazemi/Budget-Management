import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Expense from './pages/Expense.jsx'
import Income from './pages/Income.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/index.jsx'
import Dashboard from './pages/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Dashboard/>},
      {path: '/expense', element: <Expense/>},
      {path: '/income', element: <Income/>},
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
