import { useContext, useEffect, useState } from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import ListItem from '../../components/ListItem';
import './SearchResults.scss';
import ItemsContext from '../../context/ItemsContextProvider/ItemsContext';

function SearchResults() {
    const [items, setItems] = useState([]);
    const itemsContext = useContext(ItemsContext);

    useEffect(() => {
        if(itemsContext){
            setItems(itemsContext.items);
        }
      }, [itemsContext]);

    return (
        <ContentWrapper>
            <ul>
                {
                    items.map((item, key) => {
                        const isLast = items.length - 1 === key;
                        return (
                            <ListItem key={key}
                                isLast={isLast}
                                { ...item } />
                        );
                    })
                }
            </ul>
        </ContentWrapper>
    );
}

export default SearchResults;
