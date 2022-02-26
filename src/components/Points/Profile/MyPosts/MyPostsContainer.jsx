import { addPost, updateNewPostText } from "../../../../redux/profile_reducer";
import { connect } from 'react-redux'
import React from "react";
import MyPosts from "../MyPosts/MyPosts";



class MyPostsContainer extends React.Component {
	render() { 
		return (
			<MyPosts
				addPost={this.props.addPost}
				updateNewPostText={this.props.updateNewPostText}
				NewPostTitle={this.props.NewPostTitle}
				NewPostDesc={this.props.NewPostDesc}
				PostData={this.props.PostData}
			/>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		PostData: state.profile.PostData,
		NewPostTitle: state.profile.NewPostTitle,
		NewPostDesc: state.profile.NewPostDesc,
	}
};


export default connect(mapStateToProps, { addPost, updateNewPostText })(MyPostsContainer);
