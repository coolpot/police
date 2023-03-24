export interface PoliceForceDetail {
    url: string;
    engagement_methods?: EngagementMethod[];
    telephone: string;
    id: string;
    name: string;
    description: string | null;
}

export interface EngagementMethod {
    url: string;
    type: string;
    description: string | null;
    title: string;
}