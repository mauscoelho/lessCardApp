import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default function () {
	return (
		<View style={styles.container}>
			<ActivityIndicator />
		</View>
	)
}