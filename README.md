## What is it?

**sidey** is a jQuery plugin which allows you to quickly and easily add an offcanvas sidebar or menu to any page. **sidey** only
requires small adjustments to your HTML markup and a two very small Javascript and CSS files (700 bytes and 2KB). **sidey** plays nice with 
Bootstrap and other frameworks.

## What does it look like?

[Demo](http://mrvautin.github.io/sidey.html)

## Stop. Where can I get it?

The Javascript and CSS can be downloaded [here](https://github.com/mrvautin/sidey/archive/master.zip)

## Setup

Include the Javascript and CSS files in your `<head>` tag. Note: the links below are for the development CDN. 

``` html    
<link rel="stylesheet" href="https://rawgit.com/mrvautin/sidey/master/dist/sidey.min.css">
<script type="text/javascript" src="https://rawgit.com/mrvautin/sidey/master/dist/sidey.min.js"></script>
```

Setup the instance of **sidey**. This sets up all `sidey-left` and `sidebar-right` elements into **sidey** sidebars and adds listeners on the toggles. (see `index.html` for an example).

``` html
<script>
$(document).ready(function(){
    $.sidey();
});
</script>
```

Create the toggle for the sidebar / menu. Be sure to include the `data-element` with the unique sidebar element you want to toggle and add the `sidey-toggle` class.

**Note: The `data-element` will use CSS selectors - eg: `.` for class and `#` for element ID.

``` html
<a href="#" class="btn btn-primary sidey-toggle" data-element=".sidebarLeft"><i class="fa fa-bars" aria-hidden="true"></i></a>
```

Create your sidebar / menu (**can have multiple**) with either the `sidey-left` or `sidey-right` class to tell **sidey** the direction. Be sure to have your sidebar element outside
of your main content element. We want the content to be pushed out the way for the sidebar to appear. See `index.html` for a working example.

``` html
<div class="sidebarLeft sidey-left">
    <h1>Left menu</h1>
    <ul class="list-group">
        <li class="list-group-item"><a href="#">Cras justo odio</a></li>
        <li class="list-group-item"><a href="#">Dapibus ac facilisis in</a></li>
        <li class="list-group-item"><a href="#">Morbi leo risus</a></li>
        <li class="list-group-item"><a href="#">Porta ac consectetur ac</a></li>
        <li class="list-group-item"><a href="#">Vestibulum at eros</a></li>
    </ul>
</div>
```

Add the `sidey-content` class to your `content` which you want to push to allow **sidey** menu to be visible

``` html
<body class="sidey-content">
```

or 

``` html
<div class="container-fluid sidey-content">
```

## Options

**sidey** is meant to be simple and there is deliberately not many options. 

The only option is whether to blur/darken the background when the **sidey** menu is open. By default this is true/on. 
To remove simply setup **sidey** with the `backgroundBlur` option set to `false`:

``` javascript
$.sidey({backgroundBlur: false});
```