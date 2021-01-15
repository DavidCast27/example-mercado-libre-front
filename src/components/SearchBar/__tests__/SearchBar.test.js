import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../index';

describe('<ProductPreview />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SearchBar className="searchbar"/>);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.searchbar').exists()).toEqual(true);
    });

});
