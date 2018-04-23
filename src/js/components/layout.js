import React from "react";
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './layout.css';
import FloatingActionButtons from './button';

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
				<FloatingActionButtons />
			</MuiThemeProvider>
		);
	}
}
