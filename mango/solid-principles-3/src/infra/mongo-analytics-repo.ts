import { Analytics } from "../analytics/analytics";
import { ErrorAnalytics } from "../analytics/error-analytics";

export class MongoAnalyticsRepo implements Analytics, ErrorAnalytics {
    save(type: string, data: any): void {

    }

    saveError(data: any): void {

    }
}