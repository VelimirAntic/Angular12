/** Utility function to create a K:V from a list of strings */
export function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWxzL3NyYy9saWIvc3RyZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQ7QUFDOUQsTUFBTSxVQUFVLE9BQU8sQ0FBbUIsQ0FBVztJQUNuRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNmLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFV0aWxpdHkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgSzpWIGZyb20gYSBsaXN0IG9mIHN0cmluZ3MgKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJFbnVtPFQgZXh0ZW5kcyBzdHJpbmc+KG86IEFycmF5PFQ+KTogeyBbSyBpbiBUXTogSyB9IHtcbiAgcmV0dXJuIG8ucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgIHJlc1trZXldID0ga2V5O1xuICAgIHJldHVybiByZXM7XG4gIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuIl19