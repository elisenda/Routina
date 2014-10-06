// Describe a feature
describe('Main Menu', function(){
        it('given application started menu is hide', function(){
        		expect(hasClass(element(by.name('body')), 'menu-open')).toBe(false);
        });
        it('when menu button clicked', function(){
            element(by.id('menuButton')).click();
        });
        it('then menu must show', function(){
				expect(hasClass(element(by.name('body')), 'menu-open')).toBe(true);
        });
});