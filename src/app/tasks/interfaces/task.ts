export interface Task {
    name: string;
    description: string;
    isDone: boolean;
    createdBy: string;
    doneBy: string | null;
}