import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title:"", body:""});

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    
    setPost({title:"", body:""})
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        type="text"
        placeholder="название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <MyInput
        type="text"
        placeholder="описание"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      {/* Неуправляемый/неконтролируемый компонент
        <MyInput 
        ref = {bodyInputRef}
        type="text" 
        placeholder="описание" 
        /> */}

      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
