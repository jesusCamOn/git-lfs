export const getQueryParams = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const paramsObject = Object.fromEntries(urlParams.entries());
	return {
		keys: Object.keys(paramsObject),
		values: Object.values(paramsObject),
	};
};
