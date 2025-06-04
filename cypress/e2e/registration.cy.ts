// E2E test for the registration flow

describe('Registration Flow', () => {
  it('should allow a user to fill out and submit the registration form', () => {
    cy.visit('/lagerverksamhet-form');

    // Fill out the form fields
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('testuser@example.com');

    // Open the dropdown to select activities
    cy.contains('button', /välj aktiviteter/i).click();
    cy.contains('Paddling').click();
    cy.contains('Matlagning').click();
    cy.contains('Orientering').click();

    // Click outside to close the dropdown
    cy.get('body').click(0, 0);

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert success message from ValidationMessage component (partial match)
    cy.contains('Tack för din anmälan').should('be.visible');

    // Form should be reset
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('input[name="email"]').should('have.value', '');
    // Selected activities should be emptied
    cy.contains('button', /välj aktiviteter/i).click();
    cy.get('.flex.flex-wrap.gap-2.mb-2.mt-2').should('be.empty');
  });
});
