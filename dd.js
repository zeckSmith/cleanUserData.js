
function analyserProfilUtilisateur(obj) {
  return {
    id: parseInt(obj.id) || 0,
    actif: obj.actif == "true" || obj.actif === true,
    nom: typeof obj.nom === "string" ? obj.nom : "",
    email: typeof obj.email === "string" ? obj.email : null,
    naissance: new Date(obj.naissance),
    preferences: typeof obj.preferences === "object" && obj.preferences !== null ? obj.preferences : {},
    scores: Array.isArray(obj.scores)
      ? obj.scores.map(score => (score))
      : [],
    amis: Array.isArray(obj.amis)
      ? obj.amis.map(ami => ({
          id: Number(ami.id),
          nom: typeof ami.nom === "string" ? ami.nom : "",
          actif: ami.actif === "true" ? false : Boolean(ami.actif)
        }))
      : []
  };
}


const brut = {
  id: "12x",                  // devrait être un number
  actif: "tru",              // devrait être un boolean
  nom: "Amadou Coulibaly",
  email: undefined,           // devrait être une string ou null
  naissance: "2003-01-17",    // string ISO date → doit devenir un objet Date
  preferences: null,          // doit être un objet par défaut s’il est null
  scores: [10, "12", 13],     // doit contenir seulement des numbers
  token: Symbol("secret"), // à retirer de l’objet final
  amis: [
    { id: 1, nom: "Fatou", actif: "false" },
    { id: "2", nom: "Yao", actif: true },
 ]
};

console.log(analyserProfilUtilisateur(brut));


// {
//   id: 123,
//   actif: true,
//   nom: "Amadou Coulibaly",
//   email: null,
//   naissance: Date("2003-01-17"),
//   preferences: {}, // par défaut
//   scores: [10, 12, 13],
//   amis: [
//     { id: 1, nom: "Fatou", actif: false },
//     { id: 2, nom: "Yao", actif: true},
//   ]
// }







