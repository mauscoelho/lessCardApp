import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Camera from "react-native-camera";
import QRCode from "react-native-qrcode";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
	buttonStamp: {
		margin: 10
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	textContainer: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
});

export default function ({ guid, onStamp }) {
	return (
		<View style={styles.container}>
			<Text style={styles.textContainer}>
				{guid}
			</Text>
			<QRCode value={guid} size={200} fgColor="white" />
			<Button
				style={styles.buttonStamp}
				onPress={onStamp}
				title={"To Stamp"}
			/>
		</View>
	);
}
