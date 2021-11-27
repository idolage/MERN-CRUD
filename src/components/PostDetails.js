import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

/*export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        const {topic,description,postCategory} = this.state.post;
        return (
            <div>
                <h4>{topic}</h4>
                <hr/>

                <dl>
                    <dt>Description</dt>
                    <dd>{description}</dd>

                    <dt>Post Category</dt>
                    <dd>{postCategory}</dd>
                </dl>
            </div>
        )
    }
}*/


const PostDetails = () => {
    const {topic, description, postCategory} = useParams();
    
      return (
        <>
          <div style={{marginTop: '20px'}}>
                <h4>{topic}</h4>
                <hr/>
                <dl className='row'>
                    <dt className='col-sm-3'>Description</dt>
                    <dd className='col-sm-9'>{description}</dd>

                    <dt className='col-sm-3'>Post Category</dt>
                    <dd className='col-sm-9'>{postCategory}</dd>
                </dl>
            </div>
        </>
      );
    };
    
export default PostDetails;

