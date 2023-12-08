import http from "k6/http";
import { sleep } from "k6";

//virutal users
export const options = {
	vus: 10,
	duration: "10s",
};

export default function () {
	http.get("https://test.k6.io");

	//sleep
	sleep(1);
}
