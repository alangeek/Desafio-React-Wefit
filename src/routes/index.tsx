import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { MainLayout } from '../layouts/MainLayout'
import { Cart } from '../pages/Cart'
import { Home } from '../pages/Home'
import { Purchase } from '../pages/Purchase'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="purchase" element={<Purchase />} />
        </Route>
      </Routes>
    </Router>
  )
}
