import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/services';
import _get from 'lodash/get';
import ContentWrapper from '../../components/ContentWrapper';
import ProductPreview from '../../components/ProductPreview';
// import mockDetail from '../../mocks/mockDetail.json';
import './ProductDetail.scss';



function ProductDetail() {
    const [item, setItem] = useState('');
    const { id } = useParams();


    const _getItem = async () => {
        const res = await api.items.getItemById(id);
        const itemResult = _get(res, 'item', []);
        setItem(itemResult);
    }

    useEffect(() => {
        _getItem();
        //MOCK: este es el mock de los servicios de obtener el detalle del item
        // setItem(mockDetail.item);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ContentWrapper>
            {item && <ProductPreview { ...item } />}
        </ContentWrapper>
    );
}

export default ProductDetail;
