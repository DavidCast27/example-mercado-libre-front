import React from 'react';
import { mount } from 'enzyme';
import ListItem from '../index';

describe('<ListItem />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ListItem />);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.listitem').exists()).toEqual(true);
    });

});
