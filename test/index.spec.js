// importamos la funcion que vamos a testear
import { router } from "./routes/router.js";

describe('router', () => {
  it('debería ser una función', () => {
    expect(typeof router).toBe('function');
  });
});
it('Deberia llevarnos a la ruta "#/" ', () => {

  const route = "#/";


})
