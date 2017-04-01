/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 * 
 * v1.2.0
 * MIT License
 */

/* Configs */
/**
 *
 * url - Cluster http url
 * index_name - Index name or comma-separated list
 * type - Type
 * size - Number of results to display at a time when pagination is enabled.
 * search_delay - Delay between actual search request in ms. Reduces number of queries to cluster by not making a request on each keystroke. 
 */
/**
var CALACA_CONFIGS = {
	url: "http://localhost:9200",
	index_name: "twitter",
	type: "tweet",
	size: 10,
	search_delay: 500
}

*/
var CALACA_CONFIGS = {
	url: "https://f6inr26njj:3pkl61s1sr@acme-production-7730545172.us-west-2.bonsaisearch.net",
	index_name: "acme-production",
	type: "test",
	size: 10,
	search_delay: 500
}
