# Features
- filter plugin to filter out experiments and buckets
- validate metadata
  - unique layer seeds
  - unique bucket names
  - logging
  - get logString for instrumentation e.g the list of buckets user is falling into.
- able to calculate and store bucket segments from bucket size e.g 5% 0-50 or randomization of segments
- should accept multiple data source e.g. way to read metadata from service
- publish user distribution for the has64 function
  ```let hash = Jenkins.hash64(experimentUnits[layer.experimentUnit] + layer.seed);```
- calculate if hexadecimal to number conversion causing any issue
