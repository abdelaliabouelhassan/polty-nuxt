<template>
    <div class="container">
    <div class="container-card">
        <div class="container-title">
        <span class="title">{{title}}</span>
        </div>
        <div class="container-image">
         <img src="https://i.picsum.photos/id/273/200/300.jpg?hmac=C0IK2DPqr03oiShSklDGIHBzHorcmVrky7A_uvBEzIM" alt="" class="image">
        </div>
    </div>
    </div>    
</template>


<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        },
    }
}
</script>


<style scoped>
.container {
    width: 100%;
}
.container-card {
     width: 100%;
     border-radius: 0.5rem;
     background-color: white;
     overflow: hidden;
     max-height: 300px;
}
.container-title {
     width: 100%;
     padding: 1.25rem;
     background-color: #FAFAFA;
}
.title {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #02303B;
}
.container-image {
    width: 100%;
}
.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>