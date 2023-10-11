<script setup>
    import Card from './Cards/Card.vue'
    import {useStore} from "../store";

    const myStore = useStore()
</script>

<template>
    <div class="content">
        <div v-if="!myStore.currentDoc" class="content-empty">
           <span >Выберите документ, чтобы посмотреть его содержиое</span>
        </div>
      <Card v-else :card="myStore.currentDoc" />
    </div>
</template>



<style scoped>
    .content{
        background-color: #ffffff;
        border-left: 1px solid #E0E0E0;
        padding: 30px;
        width: 100%;
        display: flex;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .content-empty{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width: 850px){
        .content{
            border: none;
        }
    }
</style>
