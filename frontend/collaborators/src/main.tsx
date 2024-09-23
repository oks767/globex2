
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'

import {store} from './shared/store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
  <App />
</Provider>
)
