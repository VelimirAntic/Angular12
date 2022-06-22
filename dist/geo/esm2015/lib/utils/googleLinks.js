export class GoogleLinks {
    static getGoogleMapsCoordLink(lon, lat) {
        return 'https://www.google.com/maps?q=' + lat + ',' + lon;
    }
    static getGoogleStreetViewLink(lon, lat) {
        return 'https://www.google.com/maps?q=&layer=c&cbll=' + lat + ',' + lon;
    }
    static getGoogleMapsNameLink(name) {
        const encodedName = encodeURI(name);
        return 'https://www.google.com/maps?q=' + encodedName;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlTGlua3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi91dGlscy9nb29nbGVMaW5rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sV0FBVztJQUN0QixNQUFNLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDcEMsT0FBTyxnQ0FBZ0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUM1RCxDQUFDO0lBRUQsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3JDLE9BQU8sOENBQThDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDMUUsQ0FBQztJQUVELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJO1FBQy9CLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxPQUFPLGdDQUFnQyxHQUFHLFdBQVcsQ0FBQztJQUN4RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR29vZ2xlTGlua3Mge1xuICBzdGF0aWMgZ2V0R29vZ2xlTWFwc0Nvb3JkTGluayhsb24sIGxhdCkge1xuICAgIHJldHVybiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP3E9JyArIGxhdCArICcsJyArIGxvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRHb29nbGVTdHJlZXRWaWV3TGluayhsb24sIGxhdCkge1xuICAgIHJldHVybiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP3E9JmxheWVyPWMmY2JsbD0nICsgbGF0ICsgJywnICsgbG9uO1xuICB9XG5cbiAgc3RhdGljIGdldEdvb2dsZU1hcHNOYW1lTGluayhuYW1lKSB7XG4gICAgY29uc3QgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUkkobmFtZSk7XG4gICAgcmV0dXJuICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHM/cT0nICsgZW5jb2RlZE5hbWU7XG4gIH1cbn1cbiJdfQ==