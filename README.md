## What is it?

sidey is a jQuery plugin which allows you to quickly and easily add an offcanvas sidebar or menu to any page.

## What does it look like?

[Demo](http://mrvautin.github.io/sidey.html)

## Stop. Where can I get it?

The Javascript and CSS can be downloaded [here](https://github.com/mrvautin/sidey/archive/master.zip)

## How does it work? - Basic example

Setup the instance of sidey on your chosen sidebar element ID or class. In this case we are using a class of `sidebar`.

``` javascript
<script>
$(document).ready(function(){
    $('.sidebar').sidey();
});
</script>
```

Create the toggle for the sidebar / menu. Be sure to include the `data-toggle` direction (left or right) and the `sidey-toggle` class.

``` html
<a href="#" class="btn btn-primary sidey-toggle" data-toggle="left"><i class="fa fa-bars" aria-hidden="true"></i></a>
```

Create your sidebar / menu with either the `sidey-left` or `sidey-right` class to tell sidey the direction

``` html
<div class="sidebar sidey-left">
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

Add the `sidey-content` class to your "content" which you want to move to allow the sidey menu to reveal

``` html
<body class="sidey-content">