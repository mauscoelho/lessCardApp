import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Camera from "react-native-camera";

export default function ({ onRead }) {
	return (
		<View style={styles.container}>
			<Camera onBarCodeRead={onRead} style={styles.camera}>
				<View style={styles.rectangleContainer}>
					<View style={styles.rectangle} />
				</View>
			</Camera>
		</View>
	)
}

const styles = StyleSheet.create({
	camera: {
		flex: 1,
		alignSelf: "stretch"
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	rectangleContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent"
	},
	rectangle: {
		height: 250,
		width: 250,
		borderWidth: 2,
		borderColor: "white",
		backgroundColor: "transparent"
	}
});