import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { register, login, createRoom } from '../../base/reducer/actions';
import { Backdrop } from '../backdrop/Backdrop';
import { preventDefault, toCamelName } from '../../base/utils';

import { svgs } from '../../base/constants';


import './modal.css';

class Modal extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.inputs = props.inputs;
    this.svg = props.svg;
    this.btnText = props.btnText;
    this.setView = props.setView;
    this.onRegister = props.onRegister;
    this.onLogin = props.onLogin;
    this.onCreateRoom = props.onCreateRoom;
  }

  render() {
    const title = this.title.toLowerCase();
    const handler = title.includes('register')
      ? this.submitHandlerRegister
      : title.includes('create')
      ? this.submitHandlerCreate
      : this.submitHandlerLogin

    return (
    	<React.Fragment>
    		<Backdrop setView={this.setView} />
      	<div className="modal">
					<h2>{this.title}</h2>
					<form 
            onSubmit={handler} 
            className="modal-form">
						{this.inputs.map(input => <Input {...input} key={input.type+input.placeholder} />)}

						<button className="modal-btn">{this.btnText} {this.svg}</button>
            <div onClick={() => this.setView(false)} className="modal-close">{svgs.clear}</div>
					</form>
				</div>
			</React.Fragment>
    )
  }

  submitHandlerRegister = (e) => {
    preventDefault(e);

    this.setView(false);
    let data = inputsValuesToObject(e.target);
    
    this.onRegister(data);
  }

  submitHandlerLogin = (e) => {
    preventDefault(e);
    this.setView(false);
    let data = inputsValuesToObject(e.target);

    this.onLogin(data);
  }

  submitHandlerCreate = (e) => {
    preventDefault(e);
    this.setView(false);
    let data = inputsValuesToObject(e.target);
    const value = data.name;
    const key = toCamelName(value);
    const password = data.password;

    this.onCreateRoom({key, value, password});
  }
}

function Input({type, placeholder, name, max = 100, focus = false}) {
  return <input 
            autoFocus={focus}
            className="modal-input" 
            type={type} 
            placeholder={placeholder}
            data-input={name}
            maxLength={max} 
         />
}

function inputsValuesToObject(target) {
  let obj = {};

  Array.from(
    target
      .querySelectorAll('input'))
      .forEach(i => {
        obj[i.dataset.input] = i.value;
      }
  )

  return obj;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onRegister: register,
    onLogin: login,
    onCreateRoom: createRoom
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);