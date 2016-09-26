import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {expect} from 'chai';
import Grid from 'components/Grid';

describe("<Grid>", function() {
  it("Should have 16 columns", function() {
    const wrapper = shallow(<Grid size={4}/>);
    expect(wrapper.find('column')).to.have.length(16);
  });
});
