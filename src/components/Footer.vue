<template>
    <div class="footer">
        <div class="section__subscribe">
            <div class="subscribe__fixed-width">
                <div class="name__company">MovieBox</div>
                <p class="why__you__need__subscribe">Want to receive a newsletter about the latest news, promotions or promo codes? Leave your email in the form below.</p>
                <p class="join__us">Join Newsletters</p>
                <div class="section__input__subscribe">
                    <input type="text" placeholder="Insert your mail here">
                    <div class="btn__submit">
                        <button type="submit">→</button>
                    </div>
                    
                </div>
            </div>
            
        </div>

        <div class="section__more_about">
            <div class="content__col links">

            </div>

            <div class="content__short__info">

            </div>
        </div>
    </div>
</template>

<style>
.footer{
    max-width: 100%;
    display: flex;
    margin-top: 100px;
}
.section__subscribe{
    width: 40%;
    background-color: var(--footer--first);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.subscribe__fixed-width{
    width: 321px;
    margin-bottom: 100px;
}
.name__company{
    margin-top: 93px;
    font-size: 64px;
}
.why__you__need__subscribe{
    margin-top: 32px;
    font-size: 16px;
}
.join__us{
    margin-top: 40px;
}
.section__input__subscribe{
    margin-top: 25px;
}
.section__more_about{
    width: 60%;
}
</style>

<script>

</script>