# Qulture.rocks generator package for Yeoman #

This is an internal project of Qulture.rocks, to ease the components and views creation of our app.

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
$ yo qr:option
```

The options allowed are:
`component`: to create a new component in our app;
`page`: to create a page, with a route linked.

```
$ yo qr:component
```

The generator will ask for a component name (use "hyphen-case") and where to save the component; the default place to create a new component is `qr-components`, assuming you will create a generic component to the app.

Finally, the generator will ask if you would like to overwrite a file; this file is the file which exports the component to the rest of the app. So you should accept it.


```
$ yo qr:page
```

The generator will ask for a page name (use "hyphen-case") and where to create the page.

## Developing

To contribute with this repository:
 - First you need to fork the project
 - Create a branch with a meaningful name
 - Modify the project as you see fit
 - To test it manually, run:
 ```
 $ npm link
 // It will link this module to current node_modules that has this module (problably global one)
 ```
 - run the command you want to see the changes (probably `yo qr component`)
 - rinse and repeat :)
 - Later, open a pull request to the main repository.

## Troubles & sugestions
This is still a work in progress project, so please, if you find any problem or have some sugestion, don't hesitate to open an issue or even a pull request.
