import currencyLocalDictionary from '../../common/js/currencyLocal';
import { formatCurrency } from '../../common/js/formatter';
import './ProductPreview.scss';

function ProductPreview({ picture='', condition='', title='', price={}, description = '', sold_quantity = '' }) {
        const currencyLocal = currencyLocalDictionary[price.currency];
    const formmatterPrice = formatCurrency({
        number: price.amount,
        fractionDigits: price.decimals,
        currency: price.currency,
        local: currencyLocal
    })
    return (
        <div className="productpreview">
            <section className="productpreview__main main">
                {
                    picture && (
                        <img className="main__picture"
                            alt="product-preview"
                            src={picture} />
                    )
                }
                <section className="main__info info">
                    <span className="info__conditionandsales">{condition} - {sold_quantity} vendidos</span>
                    {title && <strong className="info__title">{title}</strong>}
                    {price && <span className="info__price">{formmatterPrice}</span>}
                    <button className="info__buy">
                        Comprar
                    </button>
                </section>
            </section>
            <section className="productpreview__decription decription">
                <h1 className="decription__title">Descripción del producto</h1>
                <p className="decription__paragraph">{description}</p>
            </section>
        </div>
    );
}

export default ProductPreview;
