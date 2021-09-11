describe('Top Page Test', () => {
  describe('Basic Test', () => {
    it('ルートパスに訪問できるか', () => {
      cy.visit('/')
    })
  })

  describe('Header Test', () => {
    it('ヘッダーから「ホーム」をクリックし、「ホーム」の画面に遷移できるか？', () => {
      cy.visit('/')
      cy.get('[data-test-id="home-header-link"]').click()
      cy.url().should('include', '/')
    })
    it('ヘッダーから「このブログについて」をクリックし、「このブログについて」画面に遷移できるか？', () => {
      cy.visit('/')
      cy.get('[data-test-id="about-header-link"]').click()
      cy.url().should('include', '/about')
    })

    it('ヘッダーから「プロフィール」をクリックし、「プロフィール」の画面に遷移できるか？', () => {
      cy.visit('/')
      cy.get('[data-test-id="profile-header-link"]').click()
      cy.url().should('include', '/profile')
    })
  })

  describe('SideBar Test', () => {
    it('プロフィールエリアの「more」ボタンをクリックし、「プロフィール」の画面に遷移できるか？', () => {
      cy.visit('/')
      cy.get('[data-test-id="test-more"]').click()
      cy.url().should('include', '/profile')
    })
  })
})
