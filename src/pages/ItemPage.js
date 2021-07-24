import React, { Component } from 'react';
import ItemContainer from '../containers/ItemContainer';

class ItemPage extends Component {
    render() {
        return (
            <div className="ItemPage">
                TrangItems
                <ItemContainer />
            </div>
        );
    }
}

export default ItemPage;
