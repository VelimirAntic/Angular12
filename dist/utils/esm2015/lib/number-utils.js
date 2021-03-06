export class NumberUtils {
    static roundToNDecimal(num, decimal = 3) {
        const roundFactor = Math.pow(10, decimal);
        return Math.round((num) * roundFactor) / roundFactor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbHMvc3JjL2xpYi9udW1iZXItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFdBQVc7SUFDcEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFXLEVBQUUsVUFBa0IsQ0FBQztRQUNuRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxXQUFXLENBQUM7SUFDekQsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE51bWJlclV0aWxzIHtcbiAgICBzdGF0aWMgcm91bmRUb05EZWNpbWFsKG51bTogbnVtYmVyLCBkZWNpbWFsOiBudW1iZXIgPSAzKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgcm91bmRGYWN0b3IgPSBNYXRoLnBvdygxMCwgZGVjaW1hbCk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChudW0pICogcm91bmRGYWN0b3IpIC8gcm91bmRGYWN0b3I7XG4gICAgfVxufVxuIl19