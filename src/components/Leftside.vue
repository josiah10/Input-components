<template>
    <div class="left">
        <div class="container">
            <h3><span>Dev</span>challenges.io</h3>
            <ul class="list">
                <li>Typography</li>
                <li>Grid</li>
                <li>Buttons</li>
                <li class="active">Inputs</li>
             </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Leftside"
    }
</script>

<style scoped>
    .left{
       position: absolute;
        width: 237px;
        height: 1734px;
        left: -2px;
        top: -5px;
        background: #FAFBFD;
    }
    .container{
        padding: 43px 0 0 48px;
    }
    h3{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
        margin-bottom: 79px;
        color: #090F31;
    }
    h3 span{
        color: #F7542E;
    }
    .list{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 0;
    }
    li{
        font-family: Noto Sans;
        font-weight: 500;
        font-size: 14px;
        font-style: normal;
        line-height: 20px;
        color: #9E9E9E;
        padding-bottom: 30px;
        cursor: pointer;
    }
    .active{
        font-weight: bold;
        color: #090F31;
    }
</style>