import home from './components/home';
import notfound from './components/notfound';
import StudentDetails from './containers/StudentDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import promiseMW from 'redux-promise';
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)

function App() {
  return (
    <div>
      <Provider store={createStoreWithMW(reducers)}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={home}/>
            <Route path="/students/:id" component={StudentDetails}/>
            <Route path="*" component={notfound}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
