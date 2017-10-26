define("experimentation/config", ["module", 'js-yaml'], function (module, yaml) {
    "use strict";

    function defaultConfig(config) {
        config = config || "---";
        return yaml.safeLoadAll(config);
    }

    module.exports = defaultConfig;
});
define('experimentation/experimentation', ['exports', 'js-yaml'], function (exports, yaml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Experimentation = function () {
    function Experimentation() {
      var _this = this;

      var configYaml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '---';
      var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dev';

      _classCallCheck(this, Experimentation);

      yaml.safeLoadAll(configYaml, function (doc) {
        console.log(doc);
        if (doc && doc.dev) {
          _this.config = doc.dev;
        }
      });
    }

    _createClass(Experimentation, [{
      key: '_setup',
      value: function _setup() {
        // DS for config
      }
    }, {
      key: 'getSetupConfig',
      value: function getSetupConfig() {
        return this.config;
      }
    }, {
      key: 'computeSamples',
      value: function computeSamples(experimentUnits) {
        // get bob jenkins instance
        // iterate through layers
        // -- get hashrange
        // pick bucket from map
      }
    }]);

    return Experimentation;
  }();

  exports.default = Experimentation;
});
define('experimentation', ['exports', './experimentation'], function (exports, Experimentation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Experimentation;
  exports.Experimentation = Experimentation;
});//# sourceMappingURL=experimentation.map
