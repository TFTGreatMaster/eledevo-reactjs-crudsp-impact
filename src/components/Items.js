import React, { Component } from 'react';

class Items extends Component {
  state = {
    search: '',
    update: {
      id: '',
      name: ''
    }
  }
  
  render() {

    console.log('this.state', this.props);
    let data = []
    if (this.props.items) {
      data = this.props.items.map((item, key) => {
        return (
          <tr key={key} >
            <td>{key + 1}</td>
            <td>{item.name}</td>
            <td><button onClick={() => { this.props.del(item._id) }}>DELETE</button></td>
            <td><button onClick={() => {
              this.setState({
                update: {
                  id: item._id,
                  name: item.name
                }
              })
            }}>CHON</button></td>
          </tr>
        )
      })
    }
    let page = []
    for (let i = 1; i <= this.props.totalPage; ++i) {
      page.push(i)
    }
    let btnPage = page.map((item) => {
      if (this.props.textSearch) {
        if (item === this.props.activePage) {
          return (<button style={{ background: '#000', color: '#fff' }} onClick={() => {
            this.props.search({
              search: this.state.search,
              page: item
            })
          }}>{item}</button>)
        } else {
          return (<button onClick={() => {
            this.props.search({
              search: this.state.search,
              page: item
            })
          }}>{item}</button>)
        }
      } else {
        if (item === this.props.activePage) {
          return (<button style={{ background: '#000', color: '#fff' }} onClick={() => { this.props.pagi(item) }}>{item}</button>)
        } else {
          return (<button onClick={() => { this.props.pagi(item) }}>{item}</button>)
        }
      }
    })
    return (
      <div className="Items">
       


        <table>
          <tbody>
            <tr >
              <th>id__________________________________</th>
              <th>name</th>
            </tr>
            {data}
          </tbody>
        </table>
        {btnPage}

        {/* search start */}

        <input type="text" value={this.state.search} onChange={(e) => {
          this.setState({
            search: e.target.value
          })
        }} />
        <button onClick={() => {
          this.props.search({
            page: 1,
            search: this.state.search
          })
        }} >SEARCH</button>

        {/* update start */}
        <input type="text" value={this.state.update.name} onChange={(e) => {
          this.setState({
            update: {
              id: this.state.update.id,
              name: e.target.value
            }
          })
        }} />
        <button onClick={() => {
          this.props.update({
            id: this.state.update.id,
            name: this.state.update.name
          })
          this.setState({
            update: {
              id: '',
              name: ''
            }
          })
        }}>UPDATE</button>

        {/* add start */}
        <input type="text" value={this.state.add} onChange={(e) => {
          this.setState({
            ...this.state,
            add: e.target.value
          })
        }} />
        <button onClick={() => {
          this.props.add(this.state.add)
          this.setState({
            add: ''
          })
        }}>ADD</button>
      </div>
    );
  }
}

export default Items;
