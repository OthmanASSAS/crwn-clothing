import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';

import Collection from '../collection/Collection.js';

const ShopPage = ({ match }) => {
    console.log(match.path)
    
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    );
}
export default ShopPage;