import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import SearchResults from '../../pages/SearchResults';
import ProductDetail from '../../pages/ProductDetail';
import './App.scss';
import ItemsContextProvider from '../../context/ItemsContextProvider';

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
        </Switch>
      </ItemsContextProvider>
      </section>
    </BrowserRouter>
  );
}

export default App;
