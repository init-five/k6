import { sleep } from "k6";
import http from "k6/http";

export const options = {
	// ramp-up time
	stages: [
		// goes from 0 to 1000 users
		{
			duration: "5m",
			target: 1000,
		},
		// stay on site with 1000 users
		{
			duration: "30m",
			target: 1000,
		},
		// go down from 1000 to 0 user in 5minutes
		{
			duration: "5m",
			target: 0,
		},
	],
};

export default function () {
	http.get("https://test.k6.io");
	sleep(2);
	http.get("https://test.k6.io/contacts.php");
	sleep(2);
	http.get("https://test.k6.io/news.php");
	sleep(2);
}
