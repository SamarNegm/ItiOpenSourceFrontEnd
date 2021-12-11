var id = 1;
class contact {
    constructor(name, email, phone) {
        this.name = name
        this.email = email
        this.phone = phone
    }
}

class contactList {

    contacts = [];
    name;
    addContact(contact) {
        this.contacts.push(contact);

    }
    removeContact(cid) {
        var newConactList = [];
        for (var i = 0; i < this.contacts.length; i++) {
            if ((this.contacts[i].id) == cid) {
                for (var j = 0; j < this.contacts.length; j++) {
                    if (j == i)
                        continue;
                    newConactList.push(this.contacts[j]);


                }
            }
        }
        this.contacts = newConactList;

    }
    editContact(cid, contact) {
        console.log(this.contacts + "   ,,,,,,, " + cid);
        var newConactList = [];
        for (var i = 0; i < this.contacts.length; i++) {
            if ((this.contacts[i].id) == cid) {

                for (var j = 0; j < this.contacts.length; j++) {
                    if (j == i) {
                        Object.defineProperties(contact, {
                            id: {
                                value: cid,
                                writable: false
                            },

                        })
                        newConactList.push(contact)
                    }
                    else newConactList.push(this.contacts[j]);


                }
            }
        }
        this.contacts = newConactList;

    }
    getcontact(id) {
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id == id)
                return this.contacts[i];
        }


    }
    getAllContacts() {
        return this.contacts
    }

}
var r = 1;

var submit = document.getElementById("submit");
var editButton = document.getElementById("edit");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var uname = document.getElementById("name");
var pname = document.getElementById("pname");
var pmail = document.getElementById("pmail");
var pphone = document.getElementById("pphone");
var currContactList = new contactList();
var EditedContact = new contact("test", "test", "test");
submit.addEventListener('click', onSubmit);
editButton.addEventListener('click', function () {

    onEdit(EditedContact);
});
function validtaData() {
    var v = 0;
    if (!validateEmail(email.value)) {

        pmail.style.display = 'block';

    }
    else {
        pmail.style.display = 'none';
        v++;
    }
    if (uname.value == "") {
        pname.style.display = 'block';


    }
    else {
        v++;
        pname.style.display = 'none';
    }
    if (!validatePhone(phone.value)) {

        pphone.style.display = 'block';
    }
    else {
        v++;
        pphone.style.display = 'none';
    }

    if (v == 3)
        return 1;
    return0;

}

function onSubmit() {

    var myContactList = document.getElementById("contactList");
    if (validtaData()) {

        var newContact = new contact(uname.value, email.value, phone.value);

        Object.defineProperties(newContact, {
            id: {
                value: id++,
                writable: false
            },

        })
        currContactList.addContact(newContact);



        var row = myContactList.insertRow(r++);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = uname.value;
        cell2.innerHTML = email.value;
        cell3.innerHTML = phone.value;
        var btnId = "btn" + newContact.id;
        var ebtnId = newContact.id;
        cell4.innerHTML = ' <button class="btn" id=' + ebtnId + '><i class="material-icons">edit</i></button><button class="btn" id=' + btnId + '> <i    class="material-icons">delete</i> </button>';
        var del = document.getElementById(btnId);
        console.log(btnId + " btnId  " + del);
        del.addEventListener('click', function (e) {
            r--;
            e.target.parentElement.parentElement.parentElement.remove();
            DeleteButton(newContact.id);
        })
        var editB = document.getElementById(ebtnId);
        editB.addEventListener('click', function (e) {

            EditedContact = currContactList.getcontact(e.target.parentElement.id);
            uname.value = EditedContact.name;
            phone.value = EditedContact.phone;
            email.value = EditedContact.email;


        });



    }





}
function onEdit(EditedContactIn) {

    if (validtaData()) {
        var EditedContact2 = new contact(uname.value, email.value, phone.value);



        currContactList.editContact((EditedContactIn.id), EditedContact2);
        var mycurrContactList = currContactList.getAllContacts();

        var delTable = document.getElementById("contactList");
        delTable.remove();
        var updatedTable = document.createElement("table");
        var tbdy = document.createElement('tbody');
        updatedTable.appendChild(tbdy);
        updatedTable.setAttribute("id", "contactList");
        let thead = document.createElement('thead');
        document.body.appendChild(updatedTable);
        updatedTable.appendChild(thead);

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Name";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Email";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Phone";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Action";


        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        thead.appendChild(row_1);


        r = 1;
        for (let i = 0; i < mycurrContactList.length; i++) {
            var row = updatedTable.insertRow(r);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            r++;
            cell1.innerHTML = mycurrContactList[i].name;
            cell2.innerHTML = mycurrContactList[i].email;
            cell3.innerHTML = mycurrContactList[i].phone;
            var btnId = "btn" + mycurrContactList[i].id;
            var ebtnId = mycurrContactList[i].id;
            cell4.innerHTML = ' <button class="btn" id=' + ebtnId + '><i class="material-icons">edit</i></button><button class="btn" id=' + btnId + '> <i    class="material-icons">delete</i> </button>';
            var del = document.getElementById(btnId);
            console.log(btnId + " btnId");
            del.addEventListener('click', function (e) {

                r--;
                e.target.parentElement.parentElement.parentElement.remove();
                DeleteButton(ebtnId);
            })
            var editB = document.getElementById(ebtnId);
            editB.addEventListener('click', function (e) {
                console.log(mycurrContactList[i].id + " ........." + ebtnId);

                EditedContact = (currContactList.getcontact(e.target.parentElement.id));
                uname.value = EditedContactIn.name;
                phone.value = EditedContactIn.phone;
                email.value = EditedContactIn.email;


            });
        }





    }
}


function DeleteButton(id) {

    currContactList.removeContact((id));


}

function validateEmail(email) {
    var dot = 0;
    var at = 0;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            for (var j = i + 1; j < email.length; j++) {
                if (email[j] == '.')
                    return 1;
            }
            return 0;
        }
    }
    return 0;

}
function validatePhone(phone) {
    if (phone.length != 11)
        return 0;
    for (var i = 0; i < phone.length; i++) {

        if (!(phone[i] - '0' >= 0 && phone[i] - '0' <= 9))
            return 0;
    }
    return 1;
}