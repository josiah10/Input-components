<template>
    <div>
        <p class="name" :style="{color:ncol}">{{name}}</p>
        <p class="label" :style="{color: lcol}">Label</p>
        <input type="text" :placeholder="place" :style="{border:bord,padding:pad,background:back,height:high,width:wid}">
        <p class="some" :style="{color:scol}">{{some}}</p>
    </div>
</template>

<script>
    export default {
        name: "Input",
        props:{
            pcol:String,
            some:String,
            scol:String,
            name:String,
            high: {
                type:String,
                default:'56px'
            },
            wid: {
                type:String,
                default:'200px'
            },
            col:String,
            back:String,
            bord:{
                type:String,
                default:'1px solid #828282',
            },
            ncol:{
                type:String,
                default:'#333333'
            },
            place:{
                type: String,
                default: 'Placeholder'
            },
            pad:{
                type:String,
                default:'18px 108px 18px 12px'
            },
            lcol:{
                type:String,
                default:'333333'
            }
        }
    }
</script>

<style scoped>
    ::placeholder{
        color: #828282;
    }
.name{
    font-family: Ubuntu Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    padding-bottom: 16px;
    margin: 0;
}
    .label{
        font-family: Noto Sans ;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 17px;
        padding-bottom: 4px;
        margin: 0;
    }
    input{
        box-sizing: border-box;
        border-radius: 8px;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        margin-right: 70px;
        /*width: 200px;*/
        /*height: 56px;*/
    }
    .some{
        margin: 0;
        padding-top: 4px;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 14px;

    }
</style>