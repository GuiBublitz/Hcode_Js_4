class Format {

    static getCamelCase(text){

        let div = document.createElement('div');

        div.innerHTML = ` <div data-${text}="id"></div> `;
    
        return Object.keys(div.firstElementChild.dataset)[0];

    }

}