import Base_PO from "./Base_PO";

class RequestLoan_PO extends Base_PO {
    typeLoanAmount(loanAmount) {
        cy.get('#amount').type(loanAmount);
    }

    typeDownPaymentAmount(downPaymentAmount) {
        cy.get('#downPayment').type(downPaymentAmount);
    }

    clickApplyNowButton() {
        cy.get('input[value="Apply Now"]').click();
    }
}
export default RequestLoan_PO;