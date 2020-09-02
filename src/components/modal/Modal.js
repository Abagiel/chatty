import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { register, login } from '../../base/reducer/actions';
import { Backdrop } from '../backdrop/Backdrop';
import { preventDefault } from '../../base/utils';

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
  }

  render() {
    const handler = this.title.toLowerCase().includes('register')
      ? this.submitHandlerRegister
      : this.submitHandlerLogin

    return (
    	<React.Fragment>
    		<Backdrop setView={this.setView} />
      	<div className="modal">
					<h2>{this.title}</h2>
					<form onSubmit={handler} className="modal-form">
						{this.inputs.map(input => <Input {...input} />)}

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
}

function Input({type, placeholder}) {
  return <input 
            className="modal-input" 
            type={type} 
            placeholder={placeholder}
            data-input={placeholder} 
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
    onLogin: login
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);