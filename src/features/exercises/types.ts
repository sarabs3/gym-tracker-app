export type IExerciseRecord = {
    date: string;
    reps: number;
    weight: number;
    id: string;
};

export type IExercise = {
    id: string;
    name: string;
    records: IExerciseRecord[];
}