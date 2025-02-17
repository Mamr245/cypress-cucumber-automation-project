import Base_PO from "./Base_PO";

class CustomerCare_PO extends Base_PO {
    typeName(name) {
        cy.get('#name').type(name);
    }

    typeEmail(email) {
        cy.get('#email').type(email);
    }

    typePhone(phoneNumber) {
        cy.get('#phone').type(phoneNumber);
    }

    typeComment(comment) {
        cy.get('#message').type(comment);
    }

    clickSendToCustomerCareButton() {
        cy.get('input[value="Send to Customer Care"]').click();
    }
}

export default CustomerCare_PO;