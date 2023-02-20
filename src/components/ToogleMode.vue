<template>
    <div class="toogle-wrapper">
        <label for="" class="toogle">
            <input type="checkbox" class="toogler round" 
            :checked="theme" 
            @change="$emit('toogle')"/>
        </label>
    </div>
</template>

<style>

.toogle{
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: 13px;
    right: 20px;
}

input[type="checkbox"].toogler {
    position: relative;
    width: 37px;
    height: 22px;
    -webkit-appearance: none;
    outline: none;
    background: #c6c6c6;
    border-radius: 20px;
    transition: .5s;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    cursor: pointer;
}
input:checked[type="checkbox"].toogler{
    background: var(--light-gradient);
}
input[type="checkbox"].toogler:before{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #fff;
    transition: .5s;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
}
input:checked[type="checkbox"].toogler:before{
    left: 20px;
}

</style> 

<script>
export default{
    props: ['theme'],
}
</script>