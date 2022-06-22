export class OsmLinks {
    static getOpenStreetMapLink(lon, lat, zoom = 17) {
        // return 'https://www.google.com/maps?q=' + lat + ',' + lon;
        return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`;
    }
    static getOpenStreetCamLink(lon, lat, zoom = 17) {
        return `https://openstreetcam.org/map/@${lat},${lon},${zoom}z`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NtTGlua3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi91dGlscy9vc21MaW5rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sUUFBUTtJQUNuQixNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFlLEVBQUU7UUFDckQsNkRBQTZEO1FBQzdELE9BQU8sdUNBQXVDLEdBQUcsU0FBUyxHQUFHLFFBQVEsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM1RixDQUFDO0lBRUQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBZSxFQUFFO1FBQ3JELE9BQU8sa0NBQWtDLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLENBQUM7SUFDakUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE9zbUxpbmtzIHtcbiAgc3RhdGljIGdldE9wZW5TdHJlZXRNYXBMaW5rKGxvbiwgbGF0LCB6b29tOiBudW1iZXIgPSAxNykge1xuICAgIC8vIHJldHVybiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP3E9JyArIGxhdCArICcsJyArIGxvbjtcbiAgICByZXR1cm4gYGh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnLz9tbGF0PSR7bGF0fSZtbG9uPSR7bG9ufSNtYXA9JHt6b29tfS8ke2xhdH0vJHtsb259YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRPcGVuU3RyZWV0Q2FtTGluayhsb24sIGxhdCwgem9vbTogbnVtYmVyID0gMTcpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vb3BlbnN0cmVldGNhbS5vcmcvbWFwL0Ake2xhdH0sJHtsb259LCR7em9vbX16YDtcbiAgfVxufVxuIl19