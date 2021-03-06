import axios from 'axios';

export default function getSuggestions(query) {
	return new Promise((resolve, reject) => {
		axios
			.get(`/autocomplete/${query}`)
			.then((response) => {
				const places = response.data.map((place) => {
					return {
						value: place.description,
						id: place.id
					};
				});
				resolve(places);
			})
			.catch((error) => reject(error));
	});
}
