import { useContext, useEffect, useState } from 'react';
import ItemsContext from '../../context/ItemsContextProvider/ItemsContext';
import './Breadcrumb.scss';

function Breadcrumb() {

    const [categories, setCategories] = useState([]);
    const itemsContext = useContext(ItemsContext);

    useEffect(() => {
        if(itemsContext){
            setCategories(itemsContext.categories);
        }
      }, [itemsContext]);
    
    return (
        <div className="breadcrumb">
        { categories && (
            categories.map((item, key) => {
                const isLast =  categories.length - 1 === key;
                return (
                    !isLast 
                    ? <span key={key} className="breadcrumb__text"> { item + ' > '} </span>
                    : <strong key={key} className="breadcrumb__text"> {item} </strong>
                );
            })
        )}
        </div>
    );
}

export default Breadcrumb;
