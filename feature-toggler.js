/** Requires underscorejs to work **/
(function() {

    var root = typeof self === 'object' && self.self === self && self ||
        typeof global === 'object' && global.global === global && global;

    var features = function(obj) {
        if (obj instanceof features) return obj;
        if (!(this instanceof features)) return new features(obj);
        this._wrapped = obj;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = features;
        }
        exports.features = features;
    } else {
        root.features = features;
    }

    features.VERSION = '1.0';

    // Set this from your app, e.g. window.features.availableFeatures = ['myfeature1', 'myfeature2']
    features.availableFeatures = [];

    features.enabledFeatures = function () {
        var features = localStorage.getItem('enabledFeatures');
        if (features == null) {
            return [];
        }
        if (features.indexOf(',') > 0) {
            return features.split(",");
        }
        return [features];
    };

    features.isEnabled = function (feature) {
        var features = this.enabledFeatures();
        return window._.contains(features, feature);
    };

    features.enableFeature = function (feature) {
        var features = this.enabledFeatures();
        if (window._.indexOf(features, feature) >= 0) return;
        if (features !== undefined && features !== null) {
            features.push(feature);
        } else {
            features = [feature, feature];
        }
        localStorage.setItem('enabledFeatures', features);
    };

    features.disableFeature = function (feature) {
        var features = this.enabledFeatures();
        features = window._.without(features, feature);
        if (features.length < 1) {
            localStorage.removeItem('enabledFeatures');
        } else {
            localStorage.setItem('enabledFeatures', features);
        }
    };

    _.prototype.value = function() {
        return this._wrapped;
    };

    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

    _.prototype.toString = function() {
        return '' + this._wrapped;
    };

    if (typeof define === 'function' && define.amd) {
        define('featuretoggler', [], function() {
            return features;
        });
    }

}());