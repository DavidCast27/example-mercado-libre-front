import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import SearchResults from '../../pages/SearchResults';
import ProductDetail from '../../pages/ProductDetail';
import ItemsContextProvider from '../../context/ItemsContextProvider';
import NotFound from '../../pages/NotFound';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <section className="content">
      <ItemsContextProvider >
        <Switch>
          <Route exact path="/" />
          <Route exact path="/items" component={SearchResults} />
          <Route exact path="/items/:id" component={ProductDetail} />
          <Route component={NotFound} />

        </Switch>
      </ItemsContextProvider>
      </section>
    </BrowserRouter>
  );
}

export default App;
