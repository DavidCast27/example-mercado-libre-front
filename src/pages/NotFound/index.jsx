import React from 'react'
import notFound from '../../assets/notFound/404.png';
import ContentWrapper from '../../components/ContentWrapper';


function NotFound () {
    return (
        <ContentWrapper>
            <img className="notFound"
                alt="not-found"
                src={notFound} 
                width="100%"/>
        </ContentWrapper>
    )
}

export default NotFound
