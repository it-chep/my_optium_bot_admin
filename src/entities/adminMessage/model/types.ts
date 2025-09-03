


export interface IAdminMessage {
    id: number;
    scenario_name: string;
    type_name: string;
    type: number;
    text: string;
}

export interface IAdminMessageData {
    scenario_id: number;
    type: number;
    message: string;
    step_order: string;
}

export interface scenario {
    id: number;
    name: string;
    delay: number;
}