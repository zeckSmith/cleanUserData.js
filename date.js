

function analyseProduitBrut(x) {

    return {
        id: Number(x.id),
        nom: typeof x.nom === "string" ? x.nom : "",
        prix: parseFloat(x.prix),
        enStock: typeof x.enStock === "boolean" ? x.enStock : null,
        categories: typeof x.categories === "string" ? x.categories.split(',').map(c => c.trim()) : [],
        description: typeof x.description === "string" ? x.categories : "",
        dateajout: new Date (x.dateAjout),
        tags: Array.isArray(x.tags) ? x.tags.filter(c => typeof c === "string") : [], 
        image: typeof x.image === "string" ? x.image : "https://image/defull",
}
}


const produitBrut = {
  id: "045",
  nom: "Chaussures Running",
  prix: "59.99",           // doit être un number
  enStock: "false",        // boolean
  categories: "sport , homme ", // doit être un tableau
  description: null,       // string vide si null
  dateAjout: "2024-06-28T10:00:00Z", // à convertir en Date
  tags: ["promo", 123, null], // ne garder que les strings
  image: undefined         // mettre une URL par défaut si absente
};

// console.log(analyseProduitBrut(produitBrut));

produits = [
    { id: "1", quantite: "2", prixUnitaire: "19.90" },
    { id: 2, quantite: 1, prixUnitaire: 12 }
  ]


console.log(Array.isArray(produits));



// {
//   id: 45,
//   nom: "Chaussures Running",
//   prix: 59.99,
//   enStock: false,
//   categories: ["sport", "homme"],
//   description: "",
//   dateAjout: Date("2024-06-28T10:00:00Z"),
//   tags: ["promo"],
//   image: "https://example.com/default.jpg"
// }
