export class IgoMissingTranslationHandler {
    handle(params) {
        if (!params.translateService.langs.length) {
            const error = 'Translations are not yet loaded. \
         Check that the LanguageService is injected.';
            throw new Error(error);
        }
        if (params.key.substr(0, 4) === 'igo.') {
            throw new Error(`The Key "${params.key}" is missing in locale file.`);
        }
        else {
            return params.key;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzc2luZy10cmFuc2xhdGlvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9sYW5ndWFnZS9zaGFyZWQvbWlzc2luZy10cmFuc2xhdGlvbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLE1BQU0sQ0FBQyxNQUF1QztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsTUFBTSxLQUFLLEdBQ1Q7cURBQzZDLENBQUM7WUFDaEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtRQUVELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksTUFBTSxDQUFDLEdBQUcsOEJBQThCLENBQUMsQ0FBQztTQUN2RTthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcixcbiAgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtc1xufSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIElnb01pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcykge1xuICAgIGlmICghcGFyYW1zLnRyYW5zbGF0ZVNlcnZpY2UubGFuZ3MubGVuZ3RoKSB7XG4gICAgICBjb25zdCBlcnJvciA9XG4gICAgICAgICdUcmFuc2xhdGlvbnMgYXJlIG5vdCB5ZXQgbG9hZGVkLiBcXFxuICAgICAgICAgQ2hlY2sgdGhhdCB0aGUgTGFuZ3VhZ2VTZXJ2aWNlIGlzIGluamVjdGVkLic7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMua2V5LnN1YnN0cigwLCA0KSA9PT0gJ2lnby4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBLZXkgXCIke3BhcmFtcy5rZXl9XCIgaXMgbWlzc2luZyBpbiBsb2NhbGUgZmlsZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcmFtcy5rZXk7XG4gICAgfVxuICB9XG59XG4iXX0=