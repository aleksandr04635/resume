/* function calculateTeamFinanceReport1(salaries: any, team: any) {
  const costObj: any = { totalBudgetTeam: 0 };
  for (let x in salaries) {
    costObj["totalBudget" + x] = 0;
  }
  team.forEach((member: any) => {
    if (salaries[member.specialization]) {
      console.log(salaries[member.specialization]);
      console.log(Number(salaries[member.specialization].tax.slice(0, -1)));

      let num =
        Math.round(
          (salaries[member.specialization].salary /
            (1 -
              Number(salaries[member.specialization].tax.slice(0, -1)) / 100)) *
            100
        ) / 100;

      console.log(num);
      costObj.totalBudgetTeam += num;
      costObj["totalBudget" + member.specialization] += num;
    }
  });
  costObj.totalBudgetTeam = Math.trunc(costObj.totalBudgetTeam);
  for (let x in salaries) {
    costObj["totalBudget" + x] = Math.trunc(costObj["totalBudget" + x]);
  }
  return costObj;
}
const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};
const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];
const financeReport1 = calculateTeamFinanceReport1(salaries1, team1);
console.log(JSON.stringify(financeReport1));

const salaries2 = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
};
const team2 = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },
];
const financeReport2 = calculateTeamFinanceReport1(salaries2, team2);
console.log(JSON.stringify(financeReport2)); */
