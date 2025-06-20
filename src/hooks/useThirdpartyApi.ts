export const validateNetworkCall = async (test: string): Promise<boolean> => {
	const FAKE_API_KEY = '***REMOVED***';

	try {
		const request = await fetch('https://openlibrary.org/search.json', {
			headers: {
				'X-API-KEY': FAKE_API_KEY,
			}
		})
		if (request.status === 400) {
			return false;
		}
		return true;
	} catch (err) {
		return true;
	}
}
