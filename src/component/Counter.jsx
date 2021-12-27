import React, { Component } from 'react';
class Counter extends React.Component {
    state ={
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

    /*renderTags(){
        if(this.state.tags.length===0) return <p>"There are no tags"</p>;
        return   <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    };

    render(){
        return <React.Fragment>
            {this.state.tags.length===0 && 'Please add an item'}
            {this.renderTags()}
        </React.Fragment>
    }*/
    /*constructor(){
        super()
       this.handleIncrement= this.handleIncrement.bind(this);
    }*/

    handleIncrement=()=>{
        this.setState({count:this.state.count + 1});
      //                                                                                                                                                                                                                                                                                                                                                                   console.log('Increment Click', this)
    }

   render() { 
        return( 
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onCLick={this.handleIncrement} className='btn btn-sm btn-secondary'>Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
            );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
       // return this.state.count === 0 ? 'Zero' : this.state.count
       const{count}= this.state;
       return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;