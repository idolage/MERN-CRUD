import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts:[]
    };

  }

  componentDidMount(){
    this.retrievePosts();
  }

  //get request
  retrievePosts(){
    axios.get("/posts").then(res=>{
      if (res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert("Deleted Succeefully");
      this.retrievePosts();
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h4 className='text-center'>All Posts</h4>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Topic</th>
                <th>Description</th>
                <th>Post Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts,index) =>(
                  
              <tr key={index}>
                <td>{index+1}</td>
                <td>
                    <a href={`/post/${posts.topic}/${posts.description}/${posts.postCategory}`} style={{textDecoration: "none"}}>
                        {posts.topic}
                    </a>
                </td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <Link to={"/edit/"+posts._id} className='btn btn-warning'>
                    <i class="far fa-edit">&nbsp;Edit</i>
                  </Link>
                  &nbsp;
                  <a href="#" onClick={() => this.onDelete(posts._id)} className="btn btn-danger">
                    <i class="far fa-trash-alt">&nbsp; Delete</i>
                  </a>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success">
            <a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Post</a>
          </button>
        </div>
      </div>
    )
  }
}
