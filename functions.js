function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}
function getPersonsHtml(persons) {
    return persons.map(getPersonHtml).join("");
}
function getPersonHtml(person) {
    const gitHub = person.gitHub;
    return `<tr>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>
        <a target="_blank" href="https://github.com/${gitHub}">GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/">Linkedin</a>
    </td>`
}

fetch('Data/team.json')
    .then(res => res.json())
    .then(data => {
        insertPersons(data);
    });

