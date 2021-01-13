import { useHistory } from 'react-router-dom';
import ProductHeading from '../ProductHeading';
import './ListItem.scss';

function showItemById(history, id) {
    history.push(`/items/${id}`);
}

function ListItem({ id, address, picture, price, title, free_shipping, isLast = false }) {
    const history = useHistory();
    return (
        <li className="listitem" onClick={() => showItemById(history, id)}>
            <div className="listitem__main main">
                <section className="main__data data">
                    {
                        picture && (
                            <img className="data__picture"
                                alt="product-preview"
                                src={picture} />
                        )
                    }
                    
                    <section className="data__info info">
                        {
                            price && (
                                <ProductHeading className="info__heading heading"
                                    offersShipping={free_shipping}
                                    price={price} />
                            )
                        }
                        {title && <p className="info__description">{title}</p>}
                    </section>
                </section>
                

                <section className="main__location location">
                    {
                        address && address.state_name && (
                            <span className="location__info">{address.state_name}</span>
                        )
                    }
                </section>
            </div>
            {!isLast && <div className="listitemdivider"></div>}
        </li>
    );
}

export default ListItem;
