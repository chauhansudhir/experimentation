# Experimentation, A/B Testing framework
DONT TRY IT IN PROD. as of now it is just a POC

# How to Install
- npm install experimentation
- npm run test

You can include dist files as well to get

# how to use it
- define config

```
---
dev:
  layers:
  - name: Layer 1
    seed: 12112
    isActive: true
    experimentUnit: userId
    experiments:
    - name: experiment name 1
      hypothesis: Test
      isActive: true
      startDate: '20170112'
      endDate: '20181213'
      buckets:
      - name: bucket1
        description: bucket test 1
        segments: "0-10,11,50-100"
        config: "{}"
      - name: bucket2
        description: bucket test 2
        segments: "12-49,101,200-300,999"
        config: "{}"
  - name: Layer 2
    seed: 121
    isActive: true
    experimentUnit: userNetwork
    experiments:
    - name: experiment name 2
      hypothesis: Test
      isActive: true
      startDate: '20170112'
      endDate: '20181213'
      buckets:
      - name: bucket3
        description: bucket test 1
        segments: "12-49,101,102-999"
        config: "{}"
      - name: bucket3
        description: bucket test 2
        segments: "0-10,11,50-100"
        config: "{}"
```

- For Code refer tests.

```
import Experimentation from 'experimentation';
import { Config } from Experimentation;

let exp = new Experimentation(new Config(data));
let samples = exp.computeSamples({
  userId: 'abcdefghikjlm',
  userNetwork: 'abcdefghikjpqrstuvw'
});
```

# Features
- refer rfcs folder

# Bob Jenkins
 - copied code from https://raw.githubusercontent.com/vkandy/jenkins-hash-js with slide modifications.
