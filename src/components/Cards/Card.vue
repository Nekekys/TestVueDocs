<script setup>
    import MyButton from "../../components/UI/MyButton.vue";
    import image from "../../assets/Rectangle.png"
    import {saveAsFile} from "../../utils/index.js"

    const props = defineProps({
        card: {
            type: Object,
            required: true
        }
    })
    const downloadText = () => {
        saveAsFile('text', props.card.name + "\n" + props.card.description, '')
    }
</script>

<template>
    <div class="card">
        <div class="img-box">
            <img :src=" card?.image ? card?.image : image" alt="">
        </div>
        <div>
            <h6>{{card.name}}</h6>
            <div class="button-box">
                <MyButton @click="downloadText">Скачать</MyButton>
                <MyButton :disabled="!card?.image" color="danger">Удалить</MyButton>
            </div>
            <h6>Описание:</h6>
            <p class="description">{{card.description}}</p>
        </div>
    </div>
</template>

<style scoped>
    .card{
        display: flex;
        overflow-y: auto;
    }
    .img-box{
        margin-right: 60px;
    }
    .img-box>img{
        width: 424px;
    }
    .button-box{
        margin-bottom: 47px;
    }
    .button-box>button:first-child{
        margin-right: 17px;
    }
    .description{
        max-height: 30vh;
        overflow-y: auto;
    }
    @media screen and (max-width: 1200px){
        .card{
            flex-direction: column;
        }
        .img-box{
            margin-right: 0;
            margin-bottom: 30px;
        }
    }
    @media screen and (max-width: 850px){
        .img-box>img{
            width: 100%;
        }
        .img-box{
            margin-right: 0;
        }
    }
</style>
