module.exports = {
	/*
		EXHIBIT
	*/

	// Peripheral ID of Feathers
	// NOTE: Not sure if this is unique or not per device
	// MARK: NOT USED IN CURRENT IMPLEMENTATION
	WEARABLE_PERIPHERAL_ID: "f5ca9cca32ee48fdb72ff891e8682203",

	// Readable name for Feathers
	// NOTE: Not sure if this is unique or not per device
	WEARABLE_LOCAL_NAME: "Adafruit Bluefruit LE",

	// Flag for if all discovered peripherals should be logged out
	LOG_ALL_FOUND_DEVICES:  false,

	// Flag for if discovered Feather peripherals should be logged out
	LOG_WEARABLE_DEVICES: false,

	// Flag for if exhibit should send a sample exhibitCheck message on socket connect
	SEND_EXAMPLE_EXHIBIT_CHECK: false,

	// What the minimum rssi to accept before disconnecting
	MINIMUM_RSSI_TO_CONNECT: -70,

	// What the minimum distance to accept before disconnecting
	MINIMUM_DISTANCE_TO_CONNECT: 10,

	// What the minimum rssi to accept in order to stay connected
	MINIMUM_RSSI_TO_STAY_CONNECTED: -80,

	// What the minimum rssi to accept in order to stay connected
	MAXIMUM_DISTANCE_TO_STAY_CONNECTED: 10,

	// What is the minimum rssi to be considered in mid-range
	SIGNAL_STRENGTH_MID_BREAKPOINT: -75,

	// What is the minimum distance to be considered in mid-range
	MINIMUM_DISTANCE_FOR_MID: 7.5,

	// What is the minimum rssi to be considered in close-range
	SIGNAL_STRENGTH_CLOSE_BREAKPOINT: -60,

	// What is the minimum distance to be considered in mid-range
	MINIMUM_DISTANCE_FOR_CLOSE: 4,

	// How long to wait between trying to connect to one device before trying again
	SECONDS_BETWEEN_CONNECTS: 25,

	// Heroku endpoint to connect via Socket.io
	SERVER_ENDPOINT: "https://jason-loves-boston.herokuapp.com/"
};