const Aside = () => {
    return <aside>
      <br></br><h3>Formulario de Contacto</h3>
        <form class="g-3 row">
            <div class="col-md-6">
                <label for="inputNombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="inputNombre" placeholder="Ingrese su nombre" required/>
            </div>
            <div class="col-md-6">
                <label for="inputApellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="inputApellido" placeholder="Ingrese su apellido" required/>
            </div>
            <div class="col-md-6">
                <label for="inputEmail" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="nombre@ejemplo.com" required/>
            </div>
            <div class="col-md-6">
                <label for="inputCiudad" class="form-label">Ciudad</label>
                <input type="text" class="form-control" id="inputCiudad" placeholder="Ingrese su ciudad" required/>
            </div>
            <div class="col-md-12">
                <label for="inputMensaje" class="form-label">Mensaje</label>
                <textarea class="form-control" id="inputMensaje" rows="3" placeholder="Escriba su mensaje aquí" required></textarea>
            </div>
            <div class="col-md-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                    <label class="form-check-label" for="invalidCheck2">
                        Acepto los términos y condiciones
                    </label>
                </div>
            </div>
            <div class="col-md-12">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
    </aside>;
}

export default Aside;