'use stric'
const button = document.getElementById('btn')


const consultaGemini = (question) => {

    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;


    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(requestData)
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const responseTextIa = data.candidates[0].content.parts[0].text
        respostaIa(responseTextIa)
    })
    .catch(error => console.error('Error: ', error))
}


const respostaIa = (responseTextIa) => {
    const textAreaPt = document.getElementById('answer')
    textAreaPt.value = responseTextIa
}




button.addEventListener('click', () => {
    const question = document.getElementById('question').value
    consultaGemini(question)

    const perguntaUser = document.getElementById('perguntaUser')
    perguntaUser.value = question
})