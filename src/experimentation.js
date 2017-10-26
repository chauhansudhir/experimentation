'use strict';
import Layer from './layer';
import Jenkins from './jenkins';


export default class Experimentation {

  constructor(experimentConfig) {
    this.config = experimentConfig.getConfig();
    this._setup();
  }

  _setup() {
    // DS for config
    this.layers = [];
    this.config.layers.forEach((layer) => {
      if (layer.isActive) {
        this.layers.push(new Layer(layer));
      }
    });
  }

  getSetupConfig() {
    return this.config;
  }

  getLogString(samples) {
    return samples.map(bucket => bucket.name).join(',');
  }

  computeSamples(experimentUnits = {}) {
    let userBuckets = [];
    this.layers.forEach((layer) => {
      //64-bit hash as hexadecimal string
      let hash = Jenkins.hash64(experimentUnits[layer.experimentUnit] + layer.seed);
      hash = Number(`0x${hash}`) % 1000;
      let segments = layer.segments || [];
      for (let i = 0; i < segments.length; i++) {
        let segment = segments[i];
        if (segment.isValidRange(hash)) {
          userBuckets.push(segment.bucket);
          break;
        }
      }
    });

    return {logString: this.getLogString(userBuckets), buckets: userBuckets};
  }
}
