function insertPersons () {
    var tbody = document.querySelector ('#list tbody');
    tbody.innerHTML = getPersonsHTML (data);
}

function getPersonsHTML () {
    return getPersonHTML ({firstName : 'Vlad'}) +
           getPersonHTML ({firstName : 'Matei'});
}

function getPersonHTML () {
    return `<tr>
    <td>Vlad</td>
    <td>Felecan</td>
    <td>
        <a target="_blank" href="https://github.com/felecanvlad">GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/">Linkedin</a>
    </td>
</tr>`
}

var data = [
    {
        "firstName" : "Vlad",
        "lastName" : "Felecan",
        "gitHub" : "felecanvlad"
    },
    {
        "firstName" : "Matei",
        "lastName" : "Nicolae",
        "gitHub" : "nmatei"
    }
];

insertPersons ()