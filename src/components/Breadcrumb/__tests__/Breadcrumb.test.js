import React from 'react';
import { mount } from 'enzyme';
import Breadcrumb from '../index';

describe('<Breadcrumb />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Breadcrumb />);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.breadcrumb').exists()).toEqual(true);
    });

});
