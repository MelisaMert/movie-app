import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form, Image, Message } from 'semantic-ui-react';
import InlineError from  './InlineError';
import { Redirect } from 'react-router-dom';

// Action bu form içerisinde çalıştırılacak.
// Güncelleme işleminin yapılması için filmin Id'sine ihtiyaç var.
class NewMovieForm extends Component {
   state = {
      _id: this.props.movie ? this.props.movie._id : '',
      title: this.props.movie ?  this.props.movie.title : '',
      cover: this.props.movie ?  this.props.movie.cover : '',
      errors: {},
      isSubmit: false,
   };
    static propTypes = {
      onNewMovieSubmit: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps)  {
      const { movie } = nextProps.newMovie;
      if( movie &&  movie.title   &&  movie.title !== this.state.title) {
        this.setState({
          title: movie.title,
          cover: movie.cover,
        })
      }
    }

    handleChange = (e) => {
       this.setState({
          [e.target.name]: e.target.value
       });
    }
    onSubmit = () => {
       const errors = this.validate();
       this.setState({
           errors,
       });
       const _id = this.state._id || this.props.newMovie.movie._id;
       console.log(_id);
       return false;
       if(Object.keys(errors).length === 0) {
          this.props.onNewMovieSubmit(this.state);
       }
       if(!this.props.newMovie.error.response) {
         this.setState({isSubmit:true})
       }
    };
    validate = () => {
       const errors = {};
       if(!this.state.title) errors.title = "Cant be blank."
       if(!this.state.cover) errors.cover = "Cant be blank"
       return errors;
    };
    render(){
        const { errors } = this.state;
        const form = (
         <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
          <Form.Field error={!!errors.title}>
             <label>Title</label>
              {errors.title && <InlineError message={errors.title}></InlineError>}
             <input 
               id="title"
               name="title"
               value={this.state.title}
               onChange={this.handleChange}
               placeholder='Title'/>
            </Form.Field>
            <Form.Field error={!!errors.cover}>
             <label>Cover Url</label>
             {errors.cover && <InlineError message={errors.cover}></InlineError>}
             <input 
               id="cover"
               name="cover"
               value={this.state.cover}
               onChange={this.handleChange}
               placeholder='Cover Url'></input>
            </Form.Field>
            <Form.Field>
            <Image src={this.state.cover} size='small'/>
            <div className="clearfix"></div>
            <Checkbox 
              label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            {
              this.props.newMovie.error.response
              &&
              (
                <Message negative>
                <Message.Header>We're sorry!</Message.Header>
                <p>A problem occured while recording.</p>
                </Message>
              ) 
            }
          </Form>
        );
      console.log( 'NewMovie Prop' , this.props.newMovie.error.response);
       return (
         <div>
          { this.state.isSubmit &&  this.props.newMovie.error.response ? <Redirect to="/movies" /> : form } 
         </div>
      );
   }
} 

export default NewMovieForm;