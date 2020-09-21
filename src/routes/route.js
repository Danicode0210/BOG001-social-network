import initialSession from '../views/initialSession.js'
import postAdoption from '../views/post-adoption.js';
import adopt from "../views/adopt.js";
import error404 from "../views/error404.js";
import { añadirEventos } from "../views/form-register.js"
import register from "../views/form-register.js"
import { login, gmail } from "../views/initialSession.js"
import { postInitial } from "../views/post-adoption.js"
import { mostrarContraseña } from "../views/initialSession.js"



export const router = async (route) => {
    const content = document.getElementById('root');
    content.innerHTML = '';
    let pedazoDelDom = '';
    /* content.appendChild(initialSession()); */
    switch (route) {
        //RUTA LOGIN USER REGISTER
        case '#/':
            pedazoDelDom = await initialSession();
            await content.appendChild(pedazoDelDom)
            await login();
            await gmail();
            await mostrarContraseña();
            break;
        //RUTA USER NOT REGISTER
        case '#/formRegister':
            pedazoDelDom = await register();
            await content.appendChild(pedazoDelDom)
            await añadirEventos();
            break;
        case '#/postAdoption':
            pedazoDelDom = await postAdoption();
            await content.appendChild(pedazoDelDom)
            await postInitial();
            break;
        case '#/adopt':
            pedazoDelDom = adopt();
            break;

        default:
            pedazoDelDom = await initialSession();
            await content.appendChild(pedazoDelDom)
            await login();
            await gmail();
            await mostrarContraseña();

    }

};


export default router;
