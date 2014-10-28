// Describe a feature
describe('Main Menu', function(){
        it('given application started menu is hide', function(){
        		expect(element(by.tagName('body')).getAttribute('class')).not.toContain('menu-open');
        });
        it('when menu button clicked', function(){
            element(by.id('menuButton')).click();
        });
        it('then menu must show', function(){
				expect(element(by.tagName('body')).getAttribute('class')).toContain('menu-open');
        });
});