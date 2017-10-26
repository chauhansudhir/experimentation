import { expect } from 'chai';
import Exp from '../../src/experimentation';
import { Config } from '../../src';
import fs from 'fs';

describe('broccoli-babel-boilerplate exports a default class', () => {

  it('Example#isExampleClass is true', () => {
    expect(true).to.equal(true);
    let data = fs.readFileSync(`${__dirname}/../../config.yaml`).toString();
    let exp = new Exp(new Config(data));
    let samples = exp.computeSamples({
      userId: 'abcdefghikjlm',
      userNetwork: 'abcdefghikjpqrstuvw'
    });
    console.log(JSON.stringify(samples));
  });

});
