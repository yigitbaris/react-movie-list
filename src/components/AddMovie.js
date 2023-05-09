import serialize from "form-serialize";
import React from "react";
import { Link } from "react-router-dom";

class AddMovie extends React.Component {

   handleFormSubmit = (e) => {
      e.preventDefault()
      const newMovie = serialize(e.target, { hash: true })
      this.props.onAddMovie(newMovie)
   }

   render () {
      return (
         <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
               <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
               <div className="form-row">
                  <div className="form-group col-md-10">
                     <label htmlFor="inputName">Name</label>
                     <input type="text"
                        className="form-control"
                        name="name" />
                  </div>
                  <div className="form-group col-md-2">
                     <label htmlFor="inputRating">Rating</label>
                     <input
                        type="text"
                        className="form-control"
                        name="rating" />
                  </div>
               </div>
               <div className="form-row">
                  <div className="form-group col-md-12">
                     <label htmlFor="inputImage">Image URL</label>
                     <input
                        type="text"
                        className="form-control"
                        name="imageURL" />
                  </div>
               </div>
               <div className="form-row">
                  <div className="form-group col-md-12">
                     <label htmlFor="overviewTextarea">Overview</label>
                     <textarea
                        className="form-control"
                        name="overview" rows="5"></textarea>
                  </div>
               </div>
               <input type="submit" className="btn btn-danger btn-block col-12" value="Add Movie" />
            </form>
            <div className="d-flex m-4 justify-content-center">
               <Link
                  to="/"
                  type="button"
                  className="btn btn-md btn-info"
               >
                  To Home Page
               </Link>
            </div>
         </div>
      )
   }
}

export default AddMovie