import { Switch, Route } from 'wouter';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import CreateProductPage from './pages/CreateProductPage';
import CategoriesPage from './pages/CategoriesPage';
import CreateCategoriesPage from './pages/CreateCategoriesPage';
import OrdersPage from './pages/OrdersPage';
import CreateOrdersPage from './pages/CreateOrdersPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={DashboardPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/products/create" component={CreateProductPage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/categories/create" component={CreateCategoriesPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/orders/create" component={CreateOrdersPage} />
      </Switch>
    </>
  )
}

export default App
