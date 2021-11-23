import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contador from "./Contador";

describe("Counter Component", () => {
    it("deve iniciar o titulo com o valor 0", () => {
        render(<Contador />);

        const counterTitle = screen.getByText("0");
        expect(counterTitle).toBeInTheDocument();
    });

    it("deve conter a classe counter__title no titulo", () => {
        render(<Contador />);

        const counterTitle = screen.getByText("0");

        expect(counterTitle).toHaveClass("counter__title");
    });

    it("não deve iniciar o titulo com as classes counter__title--increment e counter__title--decrement", () => {
        render(<Contador />);

        const counterTitle = screen.getByText("0");

        expect(counterTitle).not.toHaveClass("counter__title--increment");
        expect(counterTitle).not.toHaveClass("counter__title--decrement");
    });

    it("deve conter um botão incrementar", () => {
        render(<Contador />);

        const buttonIncrement = screen.getByRole("button", {
            name: /incrementar/i,
        });

        expect(buttonIncrement).toBeInTheDocument();
    });

    it("deve conter um botão incrementar com as classes button e button--increment", () => {
        render(<Contador />);

        const buttonIncrement = screen.getByRole("button", {
            name: /incrementar/i,
        });

        expect(buttonIncrement).toHaveClass("button");
        expect(buttonIncrement).toHaveClass("button--increment");
    });

    it("deve conter um botão decrementar", () => {
        render(<Contador />);

        const buttonDecrement = screen.getByRole("button", {
            name: /decrementar/i,
        });

        expect(buttonDecrement).toBeInTheDocument();
    });

    it("deve conter um botão decrementar com as classes button e button--decrement", () => {
        render(<Contador />);

        const buttonDecrement = screen.getByRole("button", {
            name: /decrementar/i,
        });

        expect(buttonDecrement).toHaveClass("button");
        expect(buttonDecrement).toHaveClass("button--decrement");
    });

    it("deve incrementar + 1 ao clicar no botão incrementar", () => {
        render(<Contador />);

        const buttonIncrement = screen.getByRole("button", {
            name: /incrementar/i,
        });

        expect(screen.queryByText("1")).toBeNull();
        userEvent.click(buttonIncrement);
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("deve decrementar - 1 ao clicar no botão decrementar", () => {
        render(<Contador />);

        const buttonDecrement = screen.getByRole("button", {
            name: /decrementar/i,
        });

        expect(screen.queryByText("-1")).toBeNull();
        userEvent.click(buttonDecrement);
        expect(screen.getByText("-1")).toBeInTheDocument();
    });

    it("deve adicionar a classe counter__title--increment no titulo, quando o valor for maior do que 0", () => {
        render(<Contador />);

        const buttonIncrement = screen.getByRole("button", {
            name: /incrementar/i,
        });

        expect(screen.queryByText("0")).not.toHaveClass(
            "counter__title--increment"
        );
        userEvent.click(buttonIncrement);
        expect(screen.getByText("1")).toHaveClass("counter__title--increment");
    });

    it("deve adicionar a classe counter__title--decrement no titulo, quando o valor for menor do que 0", () => {
        render(<Contador />);

        const buttonDecrement = screen.getByRole("button", {
            name: /decrementar/i,
        });

        expect(screen.queryByText("0")).not.toHaveClass(
            "counter__title--decrement"
        );
        userEvent.click(buttonDecrement);
        expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
    });
});