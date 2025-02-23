import Base_PO from "./Base_PO";

class TransferFunds_PO extends Base_PO { 
    clickTransferButton() {
        cy.get('input[value="Transfer"]').click();
    }
    
    typeAmountToTransfer(amountToTransfer) {
        cy.get('#amount').type(amountToTransfer);
    }

    selecToAccount(toAccount) {
        cy.get('#toAccountId').select(toAccount);
    }
}
export default TransferFunds_PO;