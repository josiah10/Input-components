<template>
    <div>
        <div class="container">
           <h2>Inputs</h2>
            <div class="flx">
                <Input name="<Input />" />
                <Input name="&:hover" bord="1px solid #333333" ncol="#828282" />
                <Input name="&:focus" bord="1px solid #2962FF" ncol="#828282" lcol="#2962FF"/>
            </div>

            <div class="flx">
                <Input name="<Input error />" lcol="#D32F2F" bord="1px solid #D32F2F" />
                <Input name="&:hover" bord="1px solid #333333" ncol="#828282" />
                <Input name="&:focus" lcol="#D32F2F" bord="1px solid #D32F2F" ncol="#828282"/>
            </div>
            <div class="flx">
                <Input name="<Input disabled />" bord="1px solid #E0E0E0" back="#F2F2F2"/>
            </div>

            <div class="flx">
                <Input class="mr" name="<Input startIcon />" some="some interesting text" scol="#828282" />
                <Input name="<Input endIcon />" lcol="#D32F2F" bord="1px solid #D32F2F" some="some interesting text" scol="#D32F2F" />
            </div>
                <phone-icon class="pi"/>
                <lock-icon class="li"/>
            <div class="flx">
                <Input class="mr" name="<Input startIcon />" pad="18px 75px 18px 45px"/>
                <Input name="<Input endIcon />" />
            </div>
            <div class="flx">
                <Input class="mr" name="<Input value=”text” />" place="Text" pcol="#D32F2F"/>
            </div>

            <div class="flx">
                <Input class="mr" name="<Input size=”sm” />" pad="10px 108px 10px 12px" high="40px" wid="200px"/>
                <Input name="<Input size=”md” />" />
            </div>
            <div class="flx">
                <Input  name="<Input fullWidth />" place="Text" wid="1031px"/>
            </div>
            <div class="flx">
                <Input  name="<Input multiline row=”4” />" high="150px" wid="200px" pad="18px 108px 112px 12px"/>
            </div>




            <h5>created by <span>Josiah</span> - devChallenges.io</h5>
        </div>

    </div>
</template>

<script>
import Input from "./Input";
    export default {
        name: "Rightside",
        data(){
            return{
            }
        },
        components:{
            Input
        }
    }
</script>

<style scoped>
    .container{
        padding: 15px 0 0 318px;
    }
    h2 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #4F4F4F;
        padding-bottom: 55px;
    }
    .flx{
        display: flex;
        align-items: start;
        flex-direction: row;
        margin-bottom: 42px;
    }
    .mr{
        margin-right: 98px;
    }

    h4{
        font-family: Ubuntu Mono;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 12px;
        color: #828282;
        margin-bottom: 34px;
    }
    h5 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #A9A9A9;
    }
    h5 span{
        font-weight: 600;
        text-decoration: underline;
    }
    .pi{
        position: absolute;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #828282;
        top:836px;
        left: 335px;
    }
    .li{
        position: absolute;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #828282;
        top:836px;
        left: 865px;
    }

</style>