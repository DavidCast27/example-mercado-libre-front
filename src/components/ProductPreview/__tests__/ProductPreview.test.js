import React from 'react';
import { mount } from 'enzyme';
import ProductPreview from '../index';

describe('<ProductPreview />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ProductPreview />);
    });

    test('Should render with default props', () => {
        expect(wrapper.find('.productpreview').exists()).toEqual(true);
    });

});
