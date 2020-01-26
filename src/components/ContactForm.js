import React from 'react';
import Nav from './Nav';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        email: '',
        message: ''
        }
    }

    handleSubmit(event) {
            event.preventDefault();
           console.log(this.state);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>

                    <div className="col-sm-6">
                        <div ClassName="App">
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    

}

export default App;