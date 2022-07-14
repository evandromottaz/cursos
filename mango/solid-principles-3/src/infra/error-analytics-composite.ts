import { ErrorAnalytics } from "../analytics/error-analytics";

export class ErrorAnalyticsComposite implements ErrorAnalytics {
    constructor(private readonly errorAnalytics: ErrorAnalytics[]) { }

    saveError(error: any): void {
        this.errorAnalytics.forEach(e => e.saveError(error))
    }
}