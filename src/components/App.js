import React, { Component } from 'react'
// import { Link } from 'react-router'
import Helmet from 'react-helmet'
import './scss/styles.scss'

class App extends Component {
	render() {
		return (
			<div>
                <Helmet>
                    title="Devin Otway's Blog"
                    meta={[
                        {'char-set': 'utf-8'},
                        {'name': 'description', 'content': 'Devin Otway\'s Blog'},
                        {'keywords': "javascript, blog, HTML, CSS, react, computer science, es6, angular"}
                </Helmet>
                <div>
                    GG NO RE
                </div>
            </div>
		)
	}
}

export default App;