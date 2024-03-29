import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class AddPlayer extends Component {
    state = {name :""}
    static propTypes = {
        addPlayer: PropTypes.func.isRequired
      }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.addPlayer(this.state.name)

    }
    handleChange = (event) =>{
        this.setState({
            name : event.target.value
          })

    }
    
    render() {
      return (
        <div className="add-player">
            <form onSubmit = {this.handleSubmit}>
                <label> Name :<input type ="text" name = "name" onChange={this.handleChange}
              value={this.state.name}></input></label>
                <input type = "submit" name ="add" ></input>
                
            </form>
          {/* <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Add" />
          </form> */}
        </div>
      )
    }
  }
 