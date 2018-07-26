const color = "white"
const background = "#F50057"
export default {
	body: {margin: 0, paddingBottom: 0, },
	root: {
		display: 'flex',
		justifyContent: 'center',
		minHeight: 100,
		alignItems: 'baseline',
		fontSize: 'large',
		fontFamily: 'monospace',
		color: "#263238",
		/*border: 5px solid purple,*/
	},
	span: {
		display: 'block',
		textAlign: 'right',
		marginTop: 50,
		color: "#455A64",
	},
	bolder: {
		fontSize: 15,
	},
	button: {
		width: 100,
		fontSize: 40,
		padding: "5px",
		fontFamily: 'monospace',
		border: 'none',
		backgroundColor: "#0091EA",
		color: 'white',
		borderRadius: "2px",
		cursor: 'pointer',
		outline: 'none',
	}
}