'use strict';
import moment from 'moment';
import Segment from './segment';

export default class Layer {
  constructor(layer) {
    this._setup(layer);
  }

  _setup(layer) {
    ['name', 'seed', 'isActive', 'experimentUnit'].forEach((x) => {
      if (layer[x] === null || layer[x] === undefined || layer[x] === '') {
        throw new Object({error : `Layer ${x} not valid`});
      }
      this[x] = layer[x];
    });
    this.segments = [];
    (layer.experiments || []).forEach((experiment) => {
      if (experiment.isActive && moment(experiment.startDate).isBefore(moment()) &&
      moment(experiment.endDate).isAfter(moment())) {
        (experiment.buckets || []).forEach((bucket) => {
          this.segments.push(new Segment(bucket.segments, bucket, experiment));
        })
      }
    })
  }
}
