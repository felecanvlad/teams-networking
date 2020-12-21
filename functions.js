function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}
function getPersonsHtml (persons) {
    return getPersonHtml(persons[0]) + getPersonHtml(persons[1]);
}
function getPersonHtml (person) {
    const gitHub = person.gitHub;
    return `<tr>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>
        <a target="_blank" href="https://github.com/${gitHub}">GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/">Linkedin</a>
    </td>`
}

// var data = [
//     {
//     "firstName": "Vlad",
//     "lastName": "Felecan",
//     "gitHub": "felecanvlad"
// },
// {
//     "firstName": "Matei",
//     "lastName": "Nicolae",
//     "gitHub": "nmatei"
// }
// ]

fetch ('Data/team.json')
    .then(res => res.json())
    .then(data  => {
        insertPersons(data);
    });

