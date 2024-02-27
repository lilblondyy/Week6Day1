$(document).ready(function () {
  const storeItems = [
    {
      name: "TV",
      price: 800.0,
      inStock: true,
      details: "4K Ultra HD",
    },
    {
      name: "Phone",
      price: 700.0,
      inStock: false,
      details: "5G",
    },
    {
      name: "Game Console",
      price: 300.0,
      inStock: true,
      details: "The latest and greatest",
    },
    {
      name: "Laptop",
      price: 1200.0,
      inStock: true,
      details: "16GB RAM 1TB SSD",
    },
    {
      name: "Smart Watch",
      price: 200.0,
      inStock: false,
      details: "Counts your steps",
    },
    {
      name: "Headphones",
      price: 100.0,
      inStock: true,
      details: "Clearest music to be heard",
    },
    {
      name: "Keyboard",
      price: 100.0,
      inStock: true,
      details: "Types for you",
    },
    {
      name: "HDMI Cord",
      price: 100.0,
      inStock: true,
      details: "HDMI to USB type C",
    },
    {
      name: "Monitor",
      price: 300.0,
      inStock: true,
      details: "4K Ultra HD",
    },
    {
      name: "Speaker",
      price: 200.0,
      inStock: true,
      details: "Clearest music to be heard",
    },
    {
      name: "Video Game",
      price: 60.0,
      inStock: true,
      details: "Enjoy for hours",
    },
  ];

  function renderProducts() {
    $("#product-list").empty();
    storeItems.forEach(function (item) {
      $("#product-list").append(`
            <div class="product">
                <p>$${item.price.toFixed(2)}</p>
                <p>${item.name}</p>
                <p>${item.details}</p>
            </div>
        `);
    });
  }

  $("#toggle-dark-mode").click(function () {
    $("body").toggleClass("dark-mode");
  });

  renderProducts();
});
