import { sleep } from "k6";
import http from "k6/http";

export const options = {
	// ramp-up time
	stages: [
		// goes from 0 to 100 users
		{
			duration: "5m",
			target: 100,
		},
		// stay on site with 100 users
		{
			duration: "30m",
			target: 100,
		},
		// go down from 100 to 0 user in 5minutes
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
