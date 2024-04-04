/*const motApplication = "Test" 
let motUtilisateur = prompt("Entrez le mot : " + motApplication)

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}*/

const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])



if (motUtilisateur === listeMots[0]) {
    console.log("Bravo !")
    score++
    console.log(score)
} else {
    console.log("Vous avez fait une erreur de frappe.")
    console.log(score)
}


motUtilisateur = prompt('Entrez le mot : ' + listeMots[1])
if (motUtilisateur === listeMots[1]) {
    console.log("Bravo !")
    score++
    console.log(score)
} else {
    console.log("Vous avez fait une erreur de frappe.")
    console.log(score)
}


motUtilisateur = prompt('Entrez le mot : ' + listeMots[2])
if (motUtilisateur === listeMots[2]) {
    console.log("Bravo !")
    score++
    console.log(score)
} else {
    console.log("Vous avez fait une erreur de frappe.")
    console.log(score)
}