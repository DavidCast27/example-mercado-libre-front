import React from 'react';
import { mount } from 'enzyme';
import ProductHeading from '../index';

describe('<ProductHeading />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ProductHeading className="heading"/>);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.heading').exists()).toEqual(true);
    });

});
