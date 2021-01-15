import React from 'react';
import { mount } from 'enzyme';
import ContentWrapper from '../index';

describe('<ContentWrapper />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ContentWrapper />);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.contentwrapper').exists()).toEqual(true);
    });

});
