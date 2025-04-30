import { createJSONStorage, StateStorage } from "zustand/middleware";

const firebaseUrl = "https://zustand-demo-78f58-default-rtdb.firebaseio.com/zustand"

const storageApi:StateStorage = {
    getItem:  async function (name: string): Promise<string | null> {
        try {
            const data = await fetch(`${firebaseUrl}/${name}.json`).then(res=>res.json());
            return data;

        } catch (error) {
            throw error;
        }
    },
    setItem: async function (name: string, value: string): Promise<void> {
        await fetch(`${firebaseUrl}/${name}.json`,{
            method:'PUT',
            body:value
        }).then(res=>res.json());

        return;
    },
    removeItem: function (name: string): unknown | Promise<unknown> {
        throw new Error("Function not implemented.");
    }
}

export const firebaseSesionStorage = createJSONStorage(()=>storageApi);