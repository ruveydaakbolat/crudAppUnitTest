import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

it("Uygulama doğru şekilde çalışoyor mu?", async () => {
  render(<App />);
  user.setup();

  // gerekli elemanlar
  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Yaş");
  const sendBtn = screen.getByRole("button", {name: /kullanıcı ekle/i});

  // inputları doldur
  await user.type(nameInp, "Kerem");
  await user.type(mailInp, "kerem@gmail.com");
  await user.type(ageInp, "21");

  // kullanıcı ekle butonuna tıkla
  await user.click(sendBtn);

  // inputlara girilen verilere uygun tablo hücreleri ekrana basılır
  screen.getByRole("cell", {name: "Kerem"});
  screen.getByRole("cell", {name: "kerem@gmail.com"});
  screen.getByRole("cell", {name: "21"})
});
