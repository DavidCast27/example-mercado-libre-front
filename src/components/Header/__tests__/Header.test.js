import React from 'react';
import { mount } from 'enzyme';
import Header from '../index';

describe('<Header />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Header />);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.header').exists()).toEqual(true);
    });

});
