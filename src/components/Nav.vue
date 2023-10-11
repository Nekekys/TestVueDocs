<script setup>
    import MyInput from "./UI/MyInput.vue";
    import MiniCard from "./Cards/MiniCard.vue";
    import Preloader from "./UI/Preloader.vue"
    import {ref, watch} from "vue";
    import {useStore} from "../store";

    const myStore = useStore()
    const field = ref('')

    watch(field,(newVal, oldVal) => {
       if(newVal.length > 0) {
           myStore.getDocs(newVal, false)
       }
    })
</script>

<template>
    <div class="nav">
        <div class="search-container">
            <h6>Поиск документа</h6>
            <MyInput v-model:value="field" placeholder="Введите ID документа" />
            <span class="error" v-if="myStore.isError">Ошибка, пожалуйста попробуйте позже</span>
        </div>
        <div>
            <h6>Результаты</h6>
            <Preloader class="preloader" v-if="myStore.isLoading" />
            <div v-else>
                <MiniCard v-for=" card in myStore.docs" :card="card" :key="card.id"/>
                <span v-if="myStore.docs.length === 0">Ничего не найдено</span>
            </div>

        </div>
    </div>
</template>



<style scoped>
    .nav{
        display: flex;
        flex-direction: column;
        width: 300px;
        background-color: #fdfdfd;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 10px;
    }
    .search-container{
        width: 240px;
        margin-bottom: 29px;
    }
    .error{
        color: red;
    }
    @media screen and (max-width: 850px){
        .preloader{
            width: 85px;
        }
    }
</style>
