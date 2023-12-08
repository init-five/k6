import { sleep } from "k6";
import http from "k6/http";

export const options = {
	// ramp-up time
	stages: [
		// lot of users in a longer duration
		// check response time
		{
			duration: "2h",
			target: 1000000,
		},
	],
};

export default function () {
	http.get("https://test.k6.io");
	sleep(2);
}
