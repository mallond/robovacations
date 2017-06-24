
# Robot Vacations - Where robots vacation

![alt text](https://github.com/mallond/react-redux/blob/robovacations/public/images/jude-law-robot-vacation.jpg?raw=true "Jude Law Robot Vacations")

> A playground for testing general React and Redux concept and features, and mostly just to have fun. 


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

#Other Notes:

```
[major, minor, patch]

~ Range in package.json (patch)
Allows patch-level changes if a minor version is specified on the comparator. 
Allows minor-level changes if not.

^ Range in package.json (only minor updates and patches)
Allows changes that do not modify the left-most non-zero digit 


```
Dev:

npm install --save-dev babel-core babel-loader babel-preset-es2015 css-loader style-loader webpack webpack-dev-server react-hot-loader

Core:

npm install --save react react-dom


Create-react-app

```
> npm install -g create-react-app

> create-react-app my-app
> cd my-app/
> npm start

```

