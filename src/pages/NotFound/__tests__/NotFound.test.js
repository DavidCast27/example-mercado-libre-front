import React from 'react';
import { mount } from 'enzyme';
import NotFound from '../index';

describe('<NotFound />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<NotFound />);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.notFound').exists()).toEqual(true);
    });

});
