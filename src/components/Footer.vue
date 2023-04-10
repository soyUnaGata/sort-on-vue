<template>
    <div class="footer">
        <div class="section__subscribe">
            <div class="subscribe__fixed-width">
                <div class="name__company">MovieBox</div>
                <p class="why__you__need__subscribe">Want to receive a newsletter about the latest news, promotions or promo codes? Leave your email in the form below.</p>
                <p class="join__us">Join Newsletters</p>
                <div class="section__input__subscribe">
                    <input class="insert_email" type="text" placeholder="Insert your mail here">
                    <button class="btn-sub" type="submit">→</button>
                </div>
            </div>
            
        </div>

        <div class="section__more_about">
           <div class="three_columns_content">
                <div class="content__col links">
                    <div class="content__column width">
                        <a href="#" class="main">Product</a>
                        <a href="#">Movies</a>
                        <a href="#">TV Show</a>
                        <a href="#">Videos</a>
                    </div>
                </div>

                <div class="content__colu">
                    <div class="content__column">
                        <a href="#" class="main">Media Group</a>
                        <a href="#">Nice Studio</a>
                        <a href="#">Nice News</a>
                        <a href="#">Nice TV</a>
                    </div>
                </div>

                <div class="content__colu">
                    <div class="content__column">
                        <a href="#" class="main">Sitemap</a>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                    </div>
                </div>
           </div>

            <div class="content__short__info">
                <div class="info">
                    <img src="../assets/img/LocationMapMarker4.png" alt="Location">
                    <span class="location">8819 Ohio St. South Gate, California 90280</span>
                </div>

                <div class="info">
                    <img src="../assets/img/Mail.svg" alt="Mail">
                    <span class="e-mail_ad">ourstudio@hello.com</span>
                </div>

                <div class="info">
                    <img src="../assets/img/Phone.svg" alt="Phone">
                    <span class="phone_company">+271 386-647-3637</span>
                </div>
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
    line-height: 25px;
}
.join__us{
    margin-top: 40px;
}
.section__input__subscribe{
    margin-top: 25px;
    position: relative;
}
.insert_email{
    height: 64px;
    background: var(--input--email);
    width: 282px;
    border: none;
    border-radius: 10px;
}
input[type="text"].insert_email{
    outline: none;
    font-size: 15px;
    padding-left: 16px;
}
input[type="text"].insert_email::placeholder{
    color: #E11D48;
    font-size: 16px;
    font-weight: 200;
    padding-left: 15px;
}

.btn-sub{
    width: 48px;
    height: 48px;
    border-radius: 8px;
    border: none;
    background: #FED530;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    left: calc(100% - 93px);
    top: calc(50% - 24px);
}
.btn-sub:active{
    box-shadow: 3px 3px 2px grey;
}
.section__more_about{
    width: 60%;
    display: flex;
    flex-direction: column;
    background: var(--footer--secondary);
}
.three_columns_content{
    display: flex;
    gap: 160px;
    margin-left: 64px;
    margin-top: 133px;
}
.content__column{
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.width{
    width: 64px;
}
.content__column > a{
    text-decoration: none;
    color: var(--text--color);
    font-size: 16px;
}
.main {
    font-weight: 600;
}
.content__short__info{
    margin-top: 100px;
    display: flex;
    gap: 24px;
    margin-left: 64px;
    font-size: 14px;
}
.info{
    display: flex;
    align-items: center;
    gap: 5px;
}

</style>
