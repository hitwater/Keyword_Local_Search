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
	url: "https://9fcxr1arux:f0o46t98ap@media-774595108.us-west-2.bonsaisearch.net",
	index_name: "media",
	type: "book",
	size: 10,
	search_delay: 500
}
