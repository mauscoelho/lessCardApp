import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Camera from "react-native-camera";

const styles = StyleSheet.create({
	camera: {
		flex: 1,
		alignSelf: "stretch",
		alignItems: "center",	
		justifyContent: "center",	
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	rectangle: {
		height: 250,
		width: 250,
		borderWidth: 2,		
		borderColor: "white",
		backgroundColor: "transparent"
	}
});

export default function ({ onRead }) {
	return (
		<View style={styles.container}>
			<Camera onBarCodeRead={onRead} style={styles.camera}>
				<View style={styles.rectangle} />
			</Camera>
		</View>
	)
}
