const flowersData = {
  rose: {
    name: "Rose",
    description: "Roses are among the most beloved flowers worldwide, symbolizing love and beauty. They come in a variety of colors, including red, pink, yellow, and white, each having its own meaning. Roses have been celebrated for their beauty and fragrance for centuries. The rose plant is also famous for its therapeutic properties, such as rose oil used in aromatherapy. Roses are commonly associated with romance and are often exchanged as gifts during special occasions such as Valentine's Day and anniversaries."
  },
  tulip: {
    name: "Tulip",
    description: "Tulips are spring-blooming flowers that are famous for their vibrant, colorful petals. They come in almost every color of the rainbow, including red, yellow, pink, purple, and white. Originating from Central Asia and popularized in the Netherlands, tulips symbolize perfect love and new beginnings. These flowers are one of the first to bloom in spring and are a common sight in gardens worldwide. Their elegant, cup-shaped blooms make them a symbol of beauty and grace."
  },
  sunflower: {
    name: "Sunflower",
    description: "Sunflowers are tall, bright flowers known for their characteristic yellow petals and large, round heads. They are famous for following the sun across the sky, a phenomenon known as heliotropism. Sunflowers symbolize positivity, happiness, and loyalty. Native to North America, they are cultivated not only for their beauty but also for their seeds, which are widely used in snacks and oil production. Sunflowers are often associated with summer and are a symbol of warmth and vitality."
  },
  daisy: {
    name: "Daisy",
    description: "Daisies are simple, cheerful flowers that symbolize innocence and purity. They are part of the Asteraceae family and have white petals surrounding a yellow center. Daisies are often found in wildflower meadows and gardens. Their appearance resembles a child's first flower, making them a symbol of new beginnings and purity. The name 'daisy' comes from the Old English word 'day's eye,' referring to how the flowers open during the day and close at night."
  },
  lily: {
    name: "Lily",
    description: "Lilies are elegant flowers that symbolize purity, renewal, and fertility. Known for their trumpet-shaped blooms, lilies come in many colors such as white, pink, orange, and yellow. They have a long history of cultural and religious significance, particularly in Christianity, where they are associated with the Virgin Mary. Lilies are often used in weddings and funerals, as they represent love, devotion, and the eternal cycle of life."
  },
  orchid: {
    name: "Orchid",
    description: "Orchids are exotic, elegant flowers that symbolize love, beauty, and strength. They come in a wide variety of colors and shapes, making them a popular choice for ornamental plants. Orchids are one of the largest plant families in the world, with thousands of species found in tropical and subtropical regions. In many cultures, orchids are considered a symbol of luxury and refinement. Orchids are also used in traditional medicines and cosmetics, particularly for their soothing properties."
  }
};

function searchFlower() {
  const flowerName = document.getElementById('flowerName').value.toLowerCase().trim();
  const flowerDetails = document.getElementById('flowerDetails');
  const errorMessage = document.getElementById('errorMessage');
  
  if (flowersData[flowerName]) {
    const flower = flowersData[flowerName];
    document.getElementById('flowerTitle').textContent = flower.name;
    document.getElementById('flowerDescription').textContent = flower.description;
    
    flowerDetails.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    flowerDetails.style.display = 'none';
    errorMessage.style.display = 'block';
  }
}
