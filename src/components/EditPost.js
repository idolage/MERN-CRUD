import React, { Component } from 'react'

export default class EditPost extends Component {
    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">

            <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>

            <form className="need-validation" noValidate>
                
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Topic</label>
                <input
                  type="text"
                  className="form-control"
                  name="topic"
                  placeholder="Enter Topic"
                  value=''
                  onChange
                />
              </div>
    
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label for="exampleFormControlTextarea1" style={{ marginBottom: "5px" }}>Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter Description"
                  value=''
                  onChange
                />
              </div>

   
    
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Post Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="postCategory"
                  placeholder="Enter Post Category"
                  value=''
                  onChange
                />
              </div>
    
              <button
                className="btn btn-outline-warning"
                type="submit"
                style={{ marginTop: "15px" }}
                onClick={this.onSubmit}
              >
                <i className="fa fa-refresh"></i>&nbsp;Update
              </button>

        
            </form>
          </div>   
        )
    }
}
