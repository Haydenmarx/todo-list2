import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
    }
  }
  updateNewItem = (e) => {
    this.setState({tempEdit: e.target.value});
  }
  add = () => {
    this.props.add(this.state.newItem);
  }
  render() {
    return (
      <div>
        <input value={this.state.newItem} onChange={this.updateNewItem} />
        <Button onClick={this.add}>Add</Button>
      </div>
    )
  }
}

export default AddItem;
