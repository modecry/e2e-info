function executeTestWithAuth(testName, testCallback) {
  describe (testName, function (){

    before(function() {
      // runs once before all tests in the block
      cy.fixture('uzedo').then(function(info){

        this.info=info
      })
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    it ('Авторизация', function (){

      cy.visit( 'http://kek/auth' , {
        auth: {
          username: "kek" ,
          password: "kek#as"
        }
      })

      //Авторизоваться по админом, нажать войти
      cy.get('.input-module_input__3SpIc.formInput--input_2gvwL').type('admin')
      cy.get('button[type="submit"]').click()
      testCallback();
    })

  })
}

// example using
executeTestWithAuth('Category create', ()=>{
  //Выбрать "Документы и пакеты"
  cy.get('.MenuItem--menu-item-name_ABWig').eq(3).contains('Документы и пакеты').click()

  //в импут "категория" ввести "Сведения о налоговых отчетах"
  cy.get('input[name="documentCategoryName"]').type('Сведения о налоговых отчетах')
  cy.wait(2000);
})