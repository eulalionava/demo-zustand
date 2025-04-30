import { create, StateCreator } from "zustand";
import type { Task, TaskStatus } from "../../interfaces";

interface TaskState {
    draggingTaskId?:string;
    tasks:Record<string,Task>,

    getTaskByStatus:(status:TaskStatus)=>Task[];
    setDreaggingTaskId:(taskId:string)=>void;
    removeDraggingTaskId:()=>void;

}

const storeApi: StateCreator<TaskState> = (set,get)=>({
    draggingTaskId:undefined,

    tasks:{
        'ABC-1':{id:'ABC-1',title:'Title 1',status:'open'},
        'ABC-2':{id:'ABC-2',title:'Title 2',status:'in-progress'},
        'ABC-3':{id:'ABC-3',title:'Title 3',status:'open'},
        'ABC-4':{id:'ABC-4',title:'Title 4',status:'done'},
    },

    getTaskByStatus:(status:any)=>{
        const tasks = Object.values(get().tasks);
        return tasks.filter(task => task.status === status);
    },


    setDreaggingTaskId:(taskId:string)=>{
        set({draggingTaskId:taskId})
    },

    removeDraggingTaskId:()=>{
        set({draggingTaskId:undefined})
    }
});

export const useTaskStore = create<TaskState>()(storeApi);