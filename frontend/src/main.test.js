import { handleClick } from "../public/main";


test("Should change the background colour", () => {
  handleClick('#000')
  expect(document.body.style.backgroundColor).toEqual("rgb(0, 0, 0)");
});