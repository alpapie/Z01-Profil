const listeHeadersErreur = [
    { code: 400, message: "Bad Request" },
    { code: 403, message: "Forbidden" },
    { code: 404, message: "Not Found" },
    { code: 500, message: "Internal Server Error" },
  ];

export class ErrorPage extends HTMLElement{
    constructor( status){
        super()
        this.ErrorHeader= listeHeadersErreur.find(
            (header) => header.code === status
          ) ||  listeHeadersErreur[3];

        document.title=this.ErrorHeader.code
    }
    
    connectedCallback(){
        this.Template()
    }

    Template(){
        let content=`
            <div class="container">
                <div class="content">
                    <h1>${this.ErrorHeader.code}</h1>
                    <p>${this.ErrorHeader.message}</p>
                </div>
            </div>
            <style>
                body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
                background-color: #ffffff;
            }

            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }

            .content {
                text-align: center;
            }

            h1 {
                font-size: 8em;
                margin: 0;
                color: #000000;
            }

            p {
                font-size: 1.5em;
                margin-top: 0;
                color: #777;
            }

            </style>
        `
       this.innerHTML=(content)
    }
}