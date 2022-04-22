import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength40 = maxLengthCreator(40);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Enter your post'
                    name="newPostText"
                    component={Textarea}
                    spellCheck="false"
                    validate={[required, maxLength40]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: "addPostForm" })(AddPostForm)

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    const addPost = values => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});



export default MyPosts;