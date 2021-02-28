import { galleryFilter } from '../page_objects/GalleryFilter.js'

describe('All galleries', () => {
    before (() => {
        cy.visit('/')
    })
    it('Load more galleries', () => {
        for (let i = 0; i < 4; i++) {
            galleryFilter.clickLoadMore()    
        }
    })
    
    it('Filter unregistered user', () => {
        galleryFilter.fillSearchInput('aleksa')
        galleryFilter.clickFilterButton()
    })
    it('Filter registered user', () => {
        galleryFilter.clickLogin()
        galleryFilter.loginForm('acafaca10@test.com', '11111111')
        galleryFilter.fillSearchInput('aca')
        galleryFilter.clickFilterButton()
    })
})