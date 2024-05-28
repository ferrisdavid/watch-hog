export type IProvider = "netflix" | "prime" | "disney";


export interface IProvidersResponse {
    display_priorities: {
        [country_code: string]: number
    };
    display_priority: number,
    logo_path: string,
    provider_name: string,
    provider_id: number
}