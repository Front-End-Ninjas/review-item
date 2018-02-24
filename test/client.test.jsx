import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Review from '../client/src/components/Review';

describe('Review component', () => {
  it('should be defined', () => {
    expect(Review).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = renderer.create(<Review />);
    expect(tree).toMatchSnapshot();
  });
});
