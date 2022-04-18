<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
		<script src="https://jailbreak-update.github.io/jquery/jquery-3.3.1.min.js"></script>	
		<script src="js/sweetalert.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script src="js/particulas.js"></script>

        <div id="donate-button-container">
            <div id="donate-button"></div>
            <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
            <script>
            PayPal.Donation.Button({
            env:'production',
            hosted_button_id:'AQL9KDQA28NFN',
            image: {
            src:'https://www.paypalobjects.com/en_US/MX/i/btn/btn_donateCC_LG.gif',
            alt:'Donate with PayPal button',
            title:'PayPal - The safer, easier way to pay online!',
            }
            }).render('#donate-button');
            </script>
            </div>

            <input type="checkbox" id="btn-menu">
        <div class="container-menu">
            <div class="cont-menu">
                <nav>
                    <a href="/index.html">Inicio</a>
                    <a id="btn0">Acerca de Mi</a>
                    <a id="btn1">Categorias</a>
                </nav>
                <label for="btn-menu" class="icon-forward"></label>
            </div>
        </div>

        <script src="/js/main.js"></script>
            
</body>
</html>