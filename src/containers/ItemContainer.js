import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/Items';
import * as action from '../actions/ItemAction'

class ItemPageContainer extends Component {
    componentDidMount() {
        this.props.pagi(1)
    }
    render() {
        return (
            <Items{...this.props} />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
        totalPage: state.items.totalPage,
        activePage: state.items.activePage,
        textSearch: state.items.textSearch
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        pagi: (data) => {
            dispatch(action.pagiItem(data))
        },
        search: (data) => {
            dispatch(action.searchItem(data))
        },
        del: (data) => {
            dispatch(action.delItem(data))
        },
        update: (data) => {
            dispatch(action.updateItems(data))
        },
        add: (data) => {
            dispatch(action.addItem(data))
        },
        uploadImage: (data) => {
            dispatch(action.uploadFile(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)

