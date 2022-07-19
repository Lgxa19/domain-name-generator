var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
var sufix = ['.com', '.net', '.ve', '.ca', '.fr', '.edu', '.eu', '.gov', '.io']

function domain() {
    for (i = 0; i < pronoun.length; i++) {
        for (j = 0; j < adj.length; j++) {
            for (k = 0; k < noun.length; k++) {
                console.log(pronoun[i] + adj[j] + noun[k] + sufix[Math.floor(Math.random() * sufix.length)]);
            }
        }
    }
    return;
}

domain();

// thegreatjogger.com
// thegreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// ourbigjogger.com
// ourbigracoon.com
