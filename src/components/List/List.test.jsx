import { render, screen, within } from "@testing-library/react";
import List from ".";
import { testUsers } from "../../constants/testData";
import { expect } from "vitest";

// gönderilen her kullanıcı için body kısmına satır basılıyor mu?
it("Gönderilen her kullanıcı için ekrana satır basılır", () => {
  render(<List users={testUsers} />);

  // table body kısmını al
  const body = screen.getByTestId("body");

  // table body kısmındaki satırları seç
  const rows = within(body).getAllByRole("row");

  // dizideki kullanıcı sayısı kadar satır var mı?
  expect(rows).toHaveLength(testUsers.length);
});

// isim email yasş hücreleri users verisine göre ekrana basılıyor mu?
it("Herbir kullanıcı için email, isim ve yaş hücreleri bulunur", () => {
  render(<List users={testUsers} />);

  // Dizideki herbir kullanucu için ekranda bu kullanıcının değerlerini içeren tablo hücreleri bulunur

  for (const user of testUsers) {
    screen.getByRole("cell", { name: user.name });
    screen.getByRole("cell", { name: user.email });
    screen.getByRole("cell", { name: user.age });
  }
});
