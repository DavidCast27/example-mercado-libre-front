import shipping from '../../assets/shipping/ic_shipping@2x.png.png';
import { formatCurrency } from '../../common/js/formatter';
import currencyLocalDictionary from '../../common/js/currencyLocal';
import './ProductHeading.scss';

function ProductHeading({ className, price = {}, offersShipping = false }) {
    const currencyLocal = currencyLocalDictionary[price.currency];
    const formmatterPrice = formatCurrency({
        number: price.amount,
        fractionDigits: price.decimals,
        currency: price.currency,
        local: currencyLocal
    })
    return (
        <div className={className}>
            <h1 className="heading__price">{formmatterPrice}</h1>
            {
                offersShipping && (
                    <div className="heading__shipping shipping">
                        <img className="shipping__icon"
                            alt="shipping-icon"
                            src={shipping} />
                    </div>
                )
            }
        </div>
    );
}

export default ProductHeading;
