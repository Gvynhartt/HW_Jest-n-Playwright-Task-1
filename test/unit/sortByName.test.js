const sorting = require("../../app");

describe("Books names test suite", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Case when no sorting is performed", () => {
  it("All book names start with same character", () => {
    expect(
      sorting.sortByName([
        "Книга 1",
        "Книга 1",
        "Книга 1",
      ])
    ).toEqual([
      "Книга 1",
      "Книга 1",
      "Книга 1",
    ]);
  });
});
