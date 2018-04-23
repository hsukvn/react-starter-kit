import React from "react";
import Button from 'material-ui-next/Button';
import MuiThemeProvider from 'material-ui-next/styles/MuiThemeProvider';
import styles from './layout.css';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<Button variant="raised" color="primary">
					Hello World
				</Button>
			</MuiThemeProvider>
		);
	}
}
