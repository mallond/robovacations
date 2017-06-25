
# Robot Vacations - Where robots vacation

![alt text](https://raw.githubusercontent.com/mallond/robovacations/master/images/jude-law-robot-vacation.jpg "Jude Law Robot Vacations")

> A playground for testing general React and Redux concept and features, and mostly just to have fun. 

[roboVacations.com Live link] (http://robovacations.netlify.com/)


## react-redux 



## Development Setup

- npm 
- babel
- webpack



### npm

```
> npm init

```

### .bablerc 

ES2015 is a pseudonym for the latest version of the JavaScript programming language 
to be approved by ECMA International. JSX Syntax for Babel traspilation.  

```

> vi .bablerc

{
  "presets": ["react", "es2015"]
}

wq

>
```



### babel

The babel-core package is the transpiler, the babel-loader is used to transform our javascript files.

- Plugins - a plugin
- Presets - bundle multiple plugins


```
> npm install --save-dev babel-core babel-loader

"install the Babel Presets"

> npm install --save-dev babel-preset-react babel-preset-es2015

```

### webpack

```
> npm install --save-dev webpack

> vi webpack.config.js

module.exports = {
  entry: './app.js',
  
  output: {
    // path: 'build',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};


```

Webpack style loaders

```
> npm install --save-dev style-loader css-loader

> vi webpack.config.js

"add the loaders"

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' 
      }
      
      note: style-loader is piped into css-loader "!"

```

Webpack Dev Server

```
> npm install --save-dev webpack-dev-server

vi package.json

"start":"webpack-dev-server --inline --port 8080"

note: --inline is the webpack-dev-server hot reload feature. Laterally reloads the whole page.
What we want to do is install a hot reloader with state

> npm install --save-dev react-hot-loader

sq

>

> vi webpack.config.js

loaders: ['react-hot', 'babel-loader'] 

"use multiple loaders

sq

> vi package.json

"Add the --hot keyword"

    "start": "node_modules/.bin/webpack-dev-server --progress --inline --hot --port 8080"
    
sq
    

```

To start: npm start

- http://localhost:8080/  "see as is"
- http://localhost:8080/webpack-dev-server "see webpack status"



## Run

```
> npm run build

or

> node_modules/.bin/webpack

```

# Hot to Keep Your Robot Clean - Link to a few diagrams:

![alt text](https://raw.githubusercontent.com/mallond/robovacations/master/images/cleanrobot.jpg "keep you robot clean")

####
(React-Redux robovacations road map) [https://github.com/mallond/robovacations/blob/master/react-redux.md]








