'use strict';

export default class Segment {
  constructor(segments, bucket, experiment) {
    this.bucket = bucket;
    this.experiment = experiment;
    let ranges = segments.split(',');
    this.ranges = [];
    ranges.forEach(range => {
      let [minHash, maxHash] = range.split('-');
      minHash = minHash === undefined ? -100000 : minHash;
      maxHash = maxHash === undefined ? minHash : maxHash;
      this.ranges.push({minHash, maxHash});
    });
  }

  isValidRange(hash) {
    for (let i = 0; i < this.ranges.length; i++) {
      let range = this.ranges[i];
      if (hash >= range.minHash && hash <= range.maxHash) {
        // exists
        return true;
      }
    }
    return false;
  }
}
