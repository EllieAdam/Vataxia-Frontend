import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {renderInput} from '../../../../utils/redux-form-fields';


class UserForm extends Component {

	formSubmit = data => {
		const {dispatch} = this.props;
		console.log(data)
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.formSubmit)}>
				<Field component={renderInput} label="First name" name="first_name" type="text"/>
				<Field component={renderInput} label="Last name" name="last_name" type="text"/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		);
	}

}

UserForm = reduxForm({
	form: 'UserForm'
})(UserForm);

export default connect(state => ({}))(UserForm);