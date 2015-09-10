cartodbjs-hoverIntent
=====================

[Hover intent](http://cherne.net/brian/resources/jquery.hoverIntent.html) for 
[CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js.html).

Useful when you want to do something (such as open a popup) only after a
particular feature on a CartoDB layer has been hovered over for a set interval.


Usage
-----

Include CartoDB.js in your page before this script. Once both are loaded, you
should be able to use `hoverIntent` on a CartoDB layer. For example:

```
cartodb.createLayer(map, visJsonUrl, opts)
    .on('done', function (layer) {
        layer.hoverIntent({}, function (e, latlng, pos, data, layerIndex) {
            // Do what you want to happen after hovering over a feature for the
            // set interval
        });
    });
```

Interactivity must be enabled on the layer for this to work, and **cartodb_id**
must be one of the fields included in the interactivity for the layer.

`layer.hoverIntent` takes two parameters: options and a callback function. The
available options are described below, and the callback takes the same
parameters as a [featureOver
handler](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#layerfeatureoverevent-latlng-pos-data-layerindex).


Options
-------

* **interval**: The number of milliseconds a feature must be hovered over before
  the callback is invoked (default 500).


Contributing
------------

All code changes should be made in `src/index.js` and compiled using Babel into
the resulting `index.js`. Run `npm run watch` while editing to continuously
compile using Babel.


License
-------

MIT.
