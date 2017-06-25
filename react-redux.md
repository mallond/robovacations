# React-Redux

(Master Blueprint React-Redux) [http://redux.js.org/docs/basics/UsageWithReact.html]

> The whole state of your app is stored in an object tree inside a single store.
> The only way to change the state tree is to emit an action, an object describing what happened.
> To specify how the actions transform the state tree, you write pure reducers. Thats it!

## createStore

>
>
> Main top Level Store
>
>
> src/index.js 

> Where webpack does its good damage
```
  webpack.config.js
  entry: [
    './src/index.js'
  ]
```

> /src/index.js

>Middleware is the suggested way to extend Redux with custom functionality. 
>Middleware lets you wrap the store's dispatch method for fun and profit. The key feature of middleware is that it is composable. 
> Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.

```

This is the SEED - Where it all grows 

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

```

> redux-promise 
> How the middleware handles this
![alt text](https://raw.githubusercontent.com/mallond/robovacations/master/images/redux-promise.jpg "Jude Law Robot Vacations")


## Components

- Are concerned with how things look.
- May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
- Often allow containment via this.props.children.
- Have no dependencies on the rest of the app, such as Flux actions or stores.
- Don’t specify how the data is loaded or mutated.
- Receive data and callbacks exclusively via props.
- Rarely have their own state (when they do, it’s UI state rather than data).
- Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
- Examples: Page, Sidebar, Story, UserInfo, List.

```

This is the main Component ./components

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar />
        <WeatherList />
        <Footer />
      </div>
    );
  }
}

```

## Containers

- Are concerned with how things work.
- May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
- Provide the data and behavior to presentational or other container components.
- Call Flux actions and provide these as callbacks to the presentational components.
- Are often stateful, as they tend to serve as data sources.
- Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
- Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.


### Search Bar ./containers/search_bar.js

#### High Points

- connect (react-redux)
- bindActionCreators (redux)
- fetchWeather (actions)

> Glue this containers state to the connect
> Marry this component to the mapDispatchToProps
> bind SearchBar with the FetchWeather Action, and the stores.dispatch
```
export default connect(null, bindActionCreators({ fetchWeather }, dispatch) )(SearchBar);

```

Flow

```
> onSubmit={this.onFormSubmit > this.props.fetchWeather(this.state.term) > 
          
```

### Weather List ./containers/weather_list.js

#### High Points

- connect (react-redux)
- bindActionCreators (redux)

> Glue this containers state to the connect 
```
export default connect(mapStateToProps)(WeatherList);
```

### Search Bar ./containers/search_bar

> You can be both a dispatcher and a property getter

```

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather}, dispatch);
}

function mapStateToProps({robots}) {
  console.log('map state to props robots:',robots);
  return {robots};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


```
# Connect is so important. It's the Glue of the Machine

![alt text](https://raw.githubusercontent.com/mallond/robovacations/master/images/react_redux_connect.png "Jude Law Robot Vacations")