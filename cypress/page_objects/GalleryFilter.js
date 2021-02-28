class GalleryFilter {

    get login() {
        return cy.get("a[href='/login']")
    }

    get email() {
        return cy.get('#email')
    }
    get password() {
        return cy.get('#password')
    }
    get submit() {
        return cy.get("button[type='submit']")
    }

    get searchInput() {
        return cy.get("input[placeholder='Search...']")
    }
    get filterButton() {
        return cy.get('.input-group-append > .btn')
    }
    get loadMoreButton() {
        return cy.contains('Load More')
    }
    fillSearchInput(search) {
        this.searchInput.type(search)
    }
    clickFilterButton() {
        this.filterButton.click()
    }

    clickLogin() {
        this.login.click()
    }

    clickLoadMore() {
        this.loadMoreButton.click()
    }

    loginForm(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.submit.click()
    }
}

export const galleryFilter = new GalleryFilter()