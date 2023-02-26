export const cleanupEmptyProperties = (object: any) =>
	Object.entries(object)
		.filter(([key, value]) => value && key !== "__typename")
		.reduce((acc, [key, value]) => {
			const cleanValue = cleanupValue(value);

			// ignore empty or null values
			if (!cleanValue) {
				return acc;
			}

			return { ...acc, [key]: cleanValue };
		}, {});

export const cleanupValue = (v: any): any => {
	if (Array.isArray(v)) {
		if (!v.length) {
			return null;
		}
		return v.map((value) => cleanupValue(value));
	}
	if (typeof v === "object") {
		if (Object.keys(v).length === 1) {
			if ("value" in v) {
				return v.value;
			}
			if ("time" in v) {
				return v.time[0] === "+" ? v.time.substring(1) : v.time;
			}
		}

		const r = cleanupEmptyProperties(v);
		if (Object.keys(r).length == 0) {
			return null;
		}
		return r;
	}
	return v;
};
