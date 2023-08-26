export default function getFromStorage<T>(key: string, initialValue: T): T {
	if (typeof window === "undefined") {
		return initialValue;
	}

	const item = window.localStorage.getItem(key);
	return item ? JSON.parse(item) : initialValue;
}
