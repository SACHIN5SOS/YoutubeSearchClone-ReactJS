import React, { Component } from 'react';  

//State is a plain javascript object whih exists an comppnne twhich is class-based components.
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    
    render() {
        return (
        <div className="search-bar">    
            <input 
            placeholder="Search Anything"
            value={this.state.term}
            onChange = {event => this.onInputChange(event.target.value)} />
            {/* Value of the input: {this.state.term} */}
        </div>    
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

