import React, { Component } from 'react';
import './Detail.css'


class Detail extends Component {
    state = {
        // color: 'blue',
        tweetInput: '',
        tweetLength: 200,
    }
    onChange = (e) => {
        this.setState({ tweetInput: e.target.value.length })
    }
    render() {
        let borderstyle;
        let arealimit = this.state.tweetInput * (100 / 200);
        let amount = arealimit / 100;

        borderstyle = {
            border: `3px solid rgba(255,0,0, ${amount})`,
            transition: 'all .5s'
        }
        let numberstyle;
        if (this.state.tweetInput > 190) {
            numberstyle = {
                color: 'red'
            };

        }
        return (
            <div className='detail'>
                <h3>WETIN DEY YOUR MIND JUST TYPE AM BELOW! </h3>
                <textarea name="Tweetinput" placeholder="...POST WHAT IS ON YOUR MIND!" cols="35" rows="14" onChange={this.onChange} style={borderstyle} />
                <button style={{}} disabled={this.state.tweetInput > 200}>TWEET</button><br />
                <strong><span style={numberstyle}>{this.state.tweetInput}</span>/{this.state.tweetLength}</strong>
            </div>

        )
    }
}



export default Detail;