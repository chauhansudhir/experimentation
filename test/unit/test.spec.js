import { expect } from 'chai';
import Exp from '../../src/experimentation';
import { Config } from '../../src';
import fs from 'fs';

describe('Test default buckets', () => {

  it('User Should fall into two buckets', () => {
    expect(true).to.equal(true);
    let data = fs.readFileSync(`${__dirname}/../../config.yaml`).toString();
    let exp = new Exp(new Config(data));
    let samples = exp.computeSamples({
      userId: 'abcdefghikjlm',
      userNetwork: 'abcdefghikjpqrstuvw'
    });
    console.log(JSON.stringify(samples));
    expect(samples, '{"logString":"bucket2,bucket3","buckets":[{"name":"bucket2","description":"bucket test 2","segments":"12-49,101,200-300,999","config":"{}"},{"name":"bucket3","description":"bucket test 1","segments":"12-49,101,102-999","config":"{}"}]}');
  });

});
