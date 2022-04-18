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
                    <a href="">Inicio</a>
                    <a id="btn0">Acerca de Mi</a>
                    <a id="btn1">Categorias</a>
                </nav>
                <label for="btn-menu" class="icon-forward"></label>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
		<script src="https://jailbreak-update.github.io/jquery/jquery-3.3.1.min.js"></script>	
		<script src="js/sweetalert.js"></script>

        <script src="js/main.js"></script>

        <div class="aviso-cookies" id="aviso-cookies">
            <img src="img/cookie.svg" alt="galleta" class="galleta">
            <h3 class="titulo">Cookies</h3>
            <p class="parrafo">Utilizamos cookies propias y de terceros para mejorar nuestros servicios.</p>
            <button class="boton" id="btn-aceptar-cookies">De acuerdo</button>
            <a class="enlace" href="aviso-cookies.html">Aviso de Cookies</a>
        </div>

        <div class="fondo-aviso-cookies" id="fondo-aviso-cookies"></div>


        <script src="js/aviso-cookies.js"></script>
</body>
</html>