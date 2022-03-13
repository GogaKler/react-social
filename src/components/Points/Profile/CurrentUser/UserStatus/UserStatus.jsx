import React from "react";

class UserStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({ editMode: true })
	}
	deactiveEditMode = () => {
		this.setState({ editMode: false })
		this.props.updateUserStatus(this.state.status);
	}
	onStatusChange = (e) => {
		this.setState({ status: e.currentTarget.value })
	}

	componentDidUpdate(prevProps, prevState) {
		
		if(prevProps.status !== this.props.status){
			this.setState({
				status: this.state.status
			})
		}
	}

	render() {
		return (
			<div className="statusWrapper">
				{!this.state.editMode
					?
					<div className='currentUser-statusMood'>
						<div className="statusMood_Wrapper">
							<span>{this.props.status}</span>
							<i onClick={this.activateEditMode} className="bi bi-pencil-fill"></i>
						</div>
					</div>
					:
					<div className="currentUser-statusMood status-inputWrapper" >
						<div className="statusMood_Wrapper">
							<input autoFocus={true} onChange={this.onStatusChange} value={this.state.status} className='status-input' />
							<i onClick={this.deactiveEditMode} className="bi bi-chevron-right"></i>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default UserStatus;