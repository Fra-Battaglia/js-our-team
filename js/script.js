//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

let team = [
	{
		name: "Wayne Barnett",
		role: "Founder & CEO",
		img: "wayne-barnett-founder-ceo.jpg"
	},
	{
		name: "Angela Caroll",
		role: "Chief Editor",
		img: "angela-caroll-chief-editor.jpg"
	},
	{
		name: "Walter Gordon",
		role: "Office Manager",
		img: "walter-gordon-office-manager.jpg"
	},
	{
		name: "Angela Lopez",
		role: "Social Media Manager",
		img: "angela-lopez-social-media-manager.jpg"
	},
	{
		name: "Scott Estrada",
		role: "Developer",
		img: "scott-estrada-developer.jpg"
	},
	{
		name: "Barbara Ramos",
		role: "Graphic Designer",
		img: "barbara-ramos-graphic-designer.jpg"
	},
]

//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (i = 0; i < team.length; i++) {
	let team_member = team[i];
	console.log(team_member);
}