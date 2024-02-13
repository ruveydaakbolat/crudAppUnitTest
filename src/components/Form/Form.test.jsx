import { render, screen } from "@testing-library/react"
import Form from "."
import user from "@testing-library/user-event";
import { expect } from 'vitest';

it("form gönderilince addUser doğru parametreler ile çalışıyor mu", async () => {
    
    // mock fonksiyonu
    const mock = vi.fn();

    render(<Form addUser={mock} />)

    user.setup();

    // gerekli elemanları çağır
    const nameInp = screen.getByLabelText("İsim");
    const ageInp = screen.getByPlaceholderText("ör:20");
    const mailInp = screen.getByLabelText("Email")
    const sendBtn = screen.getByRole("button");

    // inputları doldur
    await user.click(nameInp)
    await user.keyboard("kerem");

    await user.type(mailInp, "kerem@gmail.com");

    await user.type(ageInp, "20");

    // gönder butonuna tıkla
    await user.click(sendBtn);

    // fonksiyon doğru parametreler ile çalışıyor mu
    expect(mock).toBeCalledWith({
        name: "kerem",
        email: 'kerem@gmail.com',
        age: "20"
    })
})