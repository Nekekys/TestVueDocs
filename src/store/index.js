import {defineStore} from "pinia";
import {ref} from "@vue/reactivity";
import axios from "axios";

export const useStore = defineStore('store', ()=>{
    const docs = ref([])
    const currentDoc = ref(null)
    const isError = ref(false)
    const isLoading = ref(false)

    const getDocs = async (search, current) =>{
        isLoading.value = true
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_API_BASE}/user/docs?search=${search}`)
            if(current){
                currentDoc.value = data[0]
            }else {
                docs.value = data
            }
        }catch (e) {
            console.log(e)
            isError.value = true
        }
        isLoading.value = false
    }

    const setCurrentDoc = (doc) =>{
        currentDoc.value = doc
    }

    return {docs, currentDoc, isError, isLoading, getDocs, setCurrentDoc}
})
