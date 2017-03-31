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

var CALACA_CONFIGS = {
	url: "https://6fam5f32gu:tba8fwuj9p@guimings-first-sandb-699906627.us-west-2.bonsaisearch.net",
	index_name: "media",
	type: "book",
	size: 10,
	search_delay: 500
}

