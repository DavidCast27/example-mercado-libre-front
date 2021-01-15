import React from 'react';
import { mount } from 'enzyme';
import SearchResults from '../index';

describe('<SearchResults />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SearchResults />);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.contentwrapper').exists()).toEqual(true);
    });

});
