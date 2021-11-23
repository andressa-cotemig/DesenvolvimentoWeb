import { Calcular } from "./Calculadora";

describe("Calcular", () => {
    it("deve somar dois valores", () => {
        const num1 = 8;
        const num2 = 6;
        const esperado = 14;
        const resultado = Calcular.somar(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("deve subtrair dois valores", () => {
        const num1 = 8;
        const num2 = 6;
        const esperado = 2;
        const resultado = Calcular.subtrair(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("deve dividir dois valores", () => {
        const num1 = 8;
        const num2 = 4;
        const esperado = 2;
        const resultado = Calcular.dividir(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("deve multiplicar dois valores", () => {
        const num1 = 8;
        const num2 = 6;
        const esperado = 48;
        const resultado = Calcular.multiplicar(num1, num2);
        expect(esperado).toEqual(resultado);
    });
});