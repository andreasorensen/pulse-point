describe('News App e2e Tests', () => {
  
  beforeEach(() => {
    cy.intercept('https://newsapi.org/v2/top-headlines?country=us&apiKey=735e143035ed491b801796553b059fd6', { fixture: 'topHeadlines.json' }).as('getTopHeadlines');
    cy.intercept('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=735e143035ed491b801796553b059fd6', { fixture: 'businessArticles.json' }).as('getBusinessArticles');
  });
  
  it('should display top headlines on the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.wait('@getTopHeadlines');
    
    cy.get('.homepage')
      .should('be.visible')
      .get('.article-card')
      .should('have.length.gt', 0);
  });

  it('should navigate to an article details page and display details', () => {
    cy.visit('http://localhost:3000');
    cy.wait('@getTopHeadlines');

    cy.get('.article-card').first().click();
    cy.url().should('include', '/article/');
    cy.get('.details-container').should('be.visible');
  });

  it('should display articles by category when a category is selected', () => {
    cy.visit('http://localhost:3000');
    cy.wait('@getTopHeadlines');

    cy.get('nav').contains('Business').click();
    cy.wait('@getBusinessArticles');
    cy.url().should('include', '/category/business');
    cy.get('.article-card').should('have.length.gt', 0);
  });
});

