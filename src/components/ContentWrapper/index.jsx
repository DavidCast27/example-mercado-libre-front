import { Fragment } from 'react';
import Breadcrumb from '../Breadcrumb';
import './ContentWrapper.scss';

function ContentWrapper({ children }) {

    
    return (
        <Fragment>
            <Breadcrumb />
            <section className="contentwrapper">
                {children}
            </section>
        </Fragment>
    );
}

export default ContentWrapper;
