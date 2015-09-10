L.extend(L.CartoDBGroupLayerBase.prototype, {
    hoverIntent: function (opts, f) {
        var layer = this,
            currentLayerIndex,
            currentId,
            timer;

        layer.on('featureOver', (e, latlng, pos, data, layerIndex) => {
            if (!(currentLayerIndex && currentId && currentLayerIndex === layerIndex && currentId === data.cartodb_id)) {
                currentLayerIndex = layerIndex;
                currentId = data.cartodb_id;
                timer = clearTimeout(timer);
                timer = setTimeout(function () {
                    f(e, latlng, pos, data, layerIndex);
                }, (opts && opts.interval ? opts.interval : 500));
            }
        });

        layer.on('featureOut', (e, layerIndex) => {
            if (layerIndex === currentLayerIndex) {
                currentLayerIndex = currentId = null;
                timer = clearTimeout(timer);
            }
        });
    }
});
