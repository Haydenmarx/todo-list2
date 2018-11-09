import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class InputToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      tempEdit: props.display
    }
  }
  toggleEditing = () => {
    this.setState({editing: !this.state.editing})
  }
  updateLocal = (e) => {
    this.setState({tempEdit: e.target.value});
  }
  updateProps = () => {
    this.props.update(this.props.location, this.state.tempEdit);
    this.toggleEditing();
  }
  render() {
    return (
      <div>
        {!this.state.editing && <span onClick={this.toggleEditing}>{this.props.display}</span>}
        {this.state.editing && (
          <div>
            <input value={this.state.tempEdit} onChange={this.updateLocal}/>
            <Button.Group>
              <Button onClick={this.toggleEditing}>Cancel</Button>
              <Button.Or />
              <Button positive onClick={this.updateProps}>Save</Button>
          </Button.Group>
          </div>
        )}      
      </div>
    )
  }
}

export default InputToggle;