<script setup>
    import image from "../../assets/Rectangle.png"
    import {useStore} from "../../store";

    const myStore = useStore()
    const props = defineProps({
        card: {
            type: Object,
            required: true
        }
    })

    const docClick = () => {
        myStore.setCurrentDoc(props.card)
    }
</script>

<template>
    <div class="mini-card" :class="myStore.currentDoc?.id === card?.id && 'active'" @click="docClick">
        <img :src=" card?.image ? card?.image : image" alt="">
        <div class="card-title">
            <h6>{{card.name}}</h6>
            <span>12 MB</span>
        </div>
    </div>
</template>

<style scoped>
    .mini-card{
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 10px 0px #0000001A!important;
        cursor: pointer;
    }
    .mini-card>img{
        width: 70px;
        height: 70px;
        object-fit: fill;
        border-right: 1px solid #E0E0E0;
    }
    .card-title{
        padding-left: 15px;
    }
    .card-title>h6{
        font-size: 14px;
        margin-bottom: 6px;
    }
    .active{
        background-color: #0D6EFD;
        color: white;
    }
    .active>img{
        border-right: 1px solid #0D6EFD;
    }
    .active h6{
        color: white;
    }
</style>
