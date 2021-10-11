import { describe, expect, it } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../App';

test('should render a div saying React App', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
})

describe('<App />', () => {
    it('renders App Component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
})
