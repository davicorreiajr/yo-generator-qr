# Qulture.rocks generator package for Yeoman #

## Setup

First, make sure you have [Yeoman](http://yeoman.io/) installed:

```
$ npm install -g yo
```

Then, install this generator:

```
$ npm install -g generator-qr
```

## Running

```
$ yo qr [option]
```

Today, the only option is `component`, so you will create a component in Qulture.rocks app

```
$ yo qr component
```

The generator will ask for a component name (use "hyphen-case") and where to save the component; the default place to create a new component is `qr-components`, assuming you will create a generic component to the app.

Finally, the generator will ask if you would like to overwrite a file; this file is the file which exports the component to the rest of the app. So you should accept it.

## Troubles & sugestions
This is still a work in progress project, so please, if you find any problem or have some sugestion, don't hesitate to open an issue or even a pull request.
