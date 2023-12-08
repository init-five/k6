import { sleep } from "k6";
import http from "k6/http";

export const options = {
	// ramp-up time
	stages: [
		// goees from 0 to 1000 users in a short amount of time
		{
			duration: "2m",
			target: 1000,
		},
		// go down from 1000 to 0 user in 1 minute
		{
			duration: "1m",
			target: 0,
		},
	],
};

export default function () {
	http.get("https://test.k6.io");
	sleep(2);
}
