describe('auth', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
  });
  it('lets the user login with valid credentials', () => {
    cy.registerForm();
    cy.LoginCredentials();
    cy.loginSubmit();
    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.be.a('string');
    });
  });

  it('shows an error when user tries to login with wrong credentials', () => {
    cy.registerForm();
    cy.invalidLoginCredentials();
    cy.loginSubmit();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains(
        'Either your username was not found or your password is incorrect',
      );
    });
  });

  it('lets the user log out with the logout button', () => {
    cy.registerForm();
    cy.LoginCredentials();
    cy.loginSubmit();
    cy.get('button[data-auth="logout"]').click();
    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.be.null;
    });
  });
});
