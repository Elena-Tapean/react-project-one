describe('Test resume page', function () {
    beforeEach(function () {
        cy
        .intercept('*/resume/elena', {
          fixture: 'resume.json'
      })
        .as('checkResume')
    })
    
    it('should mock the request', function () {
        cy
          .visit('http://localhost:3000/resume/elena')
          .wait('@checkResume')
    })
})