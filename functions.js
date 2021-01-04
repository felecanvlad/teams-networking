const API = {
    CREATE: {
        URL: "create.json",
        METHOD: "GET" // POST 
    } ,
    READ: {
        URL: "Data/team.json",
        METHOD: "GET"
    },
    UPDATE: {
        URL: "",
        METHOD: "GET"
    },
    DELETE: {
        URL: "",
        METHOD: "GET"
    }
};

API.READ.URL

function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}
function getPersonsHtml(persons) {
    return persons.map(getPersonHtml).join("");
}
function getPersonHtml(person) {
    const gitHub = person.gitHub;
    return `
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>
        <a target="_blank" href="https://github.com/${gitHub}">GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/">Linkedin</a>
    </td>
    <td></td>
    </tr>`
}
let allPersons = [];

function loadList() {
    fetch(API.READ.URL)
    .then(res => res.json())
    .then(data => {
        allPersons = data;
        insertPersons(data);
    });
}

loadList();

function searchPersons (text) {
    text = text.toLowerCase();
    console.warn("search",text);
     return allPersons.filter(person => {
         return person.firstName.toLowerCase().indexOf(text) > -1 ||
            person.lastName.toLowerCase().indexOf(text) > -1;
     });

}    

const search = document.getElementById ('search');
search.addEventListener("input", e => {
    const text = e.target.value;
    
    const filtrate = searchPersons(text);

    insertPersons(filtrate);
});

function saveTeamMember() {
    const firstName = document.querySelector("input[name=firstName]").value;
    const lastName = document.querySelector("input[name=lastName]").value;
    const gitHub = document.querySelector("input[name=gitHub]").value;
    
    const person = {
        firstName, 
        lastName, 
        gitHub
    }
    console.info('saving...', person,JSON.stringify(person));

    fetch(API.CREATE.URL, {
        method: API.CREATE.METHOD,
        body: API.CREATE.METHOD === "GET" ? null : JSON.stringify(person)
    })
        .then(res => res.json())
        .then(r => {
            console.warn(r);
            if (r.success) {
                setTimeout(() => {
                    console.info('refresh list');
                    loadList();
                }, 30000);
            }
        });
};

const saveBtn = document.querySelector("#list tfoot button");
saveBtn.addEventListener("click", e => {
    saveTeamMember();
});